import React, { useEffect, useState } from "react";
import { Button, Col, Row, Space, Table } from "antd";
import Axios from "axios";
import { Cards } from "../../../../components/cards/frame/cards-frame";
import { PageHeader } from "../../../../components/page-headers/page-headers";
import { useApiContext } from "../../../../context";
import { IOrganizationProps } from "../../../../context/Organization/types";
import { useMountedState } from "../../../../utils/hooks";
// import numberWithCommas from "../../../../utils/numberFormatter";
import { Main } from "../../../AuthLayout/styled";
import { AdminSectionWrapper } from "../../styled";
import { ImgPlaceholderStyled } from "../helpers";
import ViewDetails from "./_partials/ViewDetails";
import numberWithCommas from "../../../../utils/numberFormatter";
import ReasonModal from "./_partials/ReasonModal";

interface IPendingAppProps {
  isLoading: boolean;
  data: IOrganizationProps[];
}

const PendingApplications = () => {
  const [organizations, setOrganizations] = useState<IPendingAppProps>({
    isLoading: false,
    data: [],
  });

  const [currentListing, setCurrentListing] = useState(null);
  const [isViewDetailsModalOpen, setIsViewDetailsModalOpen] = useState(false);
  const [isReasonModalOpen, setIsReasonModalOpen] = useState(false);

  const { organization: api } = useApiContext();

  const isMounted = useMountedState();

  useEffect(() => {
    const cancelTokenSource = Axios.CancelToken;
    const source = cancelTokenSource.source();

    const getAllPendingApplications = async () => {
      setOrganizations(prevOrganizations => ({
        ...prevOrganizations,
        isLoading: true,
      }));

      try {
        const res = await api.getPendingOrganization({
          cancelToken: source.token,
        });

        const { data } = res.data;

        if (isMounted()) {
          setOrganizations(prevOrganizations => ({
            ...prevOrganizations,
            isLoading: false,
            data,
          }));
        }
      } catch (error) {
        if (Axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        }
        // handle error
        if (isMounted()) {
          setOrganizations(prevOrganizations => ({
            ...prevOrganizations,
            isLoading: false,
          }));

          console.log(error);
        }
      }
    };

    getAllPendingApplications();

    return () => {
      // cancel the request (the message parameter is optional)
      source.cancel("Operation canceled by the user.");
    };
  }, [isMounted, api]);

  const refetchPendingApplications = async () => {
    setOrganizations(prevOrganizations => ({
      ...prevOrganizations,
      isLoading: true,
    }));

    try {
      const res = await api.getPendingOrganization();

      const { data } = res.data;

      if (isMounted()) {
        setOrganizations(prevOrganizations => ({
          ...prevOrganizations,
          isLoading: false,
          data,
        }));
      }
    } catch (error) {
      if (Axios.isCancel(error)) {
        console.log("Request canceled", error.message);
      }
      // handle error
      if (isMounted()) {
        setOrganizations(prevOrganizations => ({
          ...prevOrganizations,
          isLoading: false,
        }));

        console.log(error);
      }
    }
  };

  const toggleViewDetailsModal = () => setIsViewDetailsModalOpen(open => !open);
  const toggleReasonModal = () => setIsReasonModalOpen(open => !open);

  const columns: any = [
    {
      title: "S/N",
      dataIndex: "rank",
      key: "rank",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "Ceo/Founder",
      dataIndex: "ceo_name",
      key: "ceo_name",

      render: (record, text) => (
        <Space size="middle" style={{ display: "flex", alignItems: "center" }}>
          <>
            {record.avatar ? (
              <div
                style={{
                  width: "30px",
                  height: "30px",
                }}
              >
                <img
                  src={record.avatar}
                  alt="Profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50px",
                  }}
                />
              </div>
            ) : (
              <ImgPlaceholderStyled className="img_placeholder" />
            )}
            <span>{record.name}</span>
          </>
        </Space>
      ),
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "Sectors",
      dataIndex: "sectors",
      key: "sectors",
    },

    {
      title: "Employees",
      dataIndex: "employees",
      key: "employees",
    },
    {
      title: "Funding (₦)",
      dataIndex: "funding",
      key: "funding",
      align: "center",
      render: (record, key) => {
        // let result = record ? record.split("₦") : [];

        return (
          // <span>{`${result.length ? numberWithCommas(result[1]) : ""}`}</span>
          <span>{key.is_ecosystem ? "N/A" : numberWithCommas(record)}</span>
        );
      },
    },
    {
      title: "Actions",
      key: "action",
      align: "center",
      render: (record, key) => {
        return (
          <Space size="middle">
            <Button
              type="primary"
              onClick={() => {
                setCurrentListing(record);
                toggleViewDetailsModal();
              }}
            >
              View Details
            </Button>
          </Space>
        );
      },
    },
  ];

  const dataSource = organizations.data.map((org, key) => {
    return {
      ...org,
      key: org.id,
      rank: key + 1,
      company: org.name,
      ceo_name: { name: org.ceo_name, avatar: org.ceo_image_url },
      state: org.state,
      sectors: org.sector_name || org.sector,
      employees: org.num_of_employees,
      funding: org.funding,
      id: org.id,
    };
  });

  const cardHeader = (
    <div>
      <span>Pending Applications</span>
    </div>
  );

  return (
    <AdminSectionWrapper>
      <PageHeader
        title="Pending Application from various Organizations"
        style={{
          background: "none",
        }}
      />

      <Main>
        <Row>
          <Col span={24}>
            <Cards title={cardHeader}>
              <Table
                className="table-responsive"
                dataSource={dataSource}
                columns={columns}
                loading={organizations.isLoading}
              />
            </Cards>
          </Col>
        </Row>

        {isViewDetailsModalOpen ? (
          <ViewDetails
            visible={isViewDetailsModalOpen}
            closeModal={toggleViewDetailsModal}
            currentListing={currentListing}
            toggleReasonModal={toggleReasonModal}
            refetchPendingApplications={refetchPendingApplications}
          />
        ) : null}

        {isReasonModalOpen ? (
          <ReasonModal
            visible={isReasonModalOpen}
            closeModal={toggleReasonModal}
            currentListing={currentListing}
            refetchPendingApplications={refetchPendingApplications}
          />
        ) : null}
      </Main>
    </AdminSectionWrapper>
  );
};

export default PendingApplications;
