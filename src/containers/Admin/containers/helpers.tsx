import React, { Fragment } from "react";
import { Space, Tooltip } from "antd";
import FeatherIcon from "feather-icons-react";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { ViewProfileBtnStyled } from "./Dashboard/styled";
import { Link, NavLink } from "react-router-dom";
import { ActionButtonStyled } from "../../Styles";
import styled from "styled-components";
import { IOrganizationProps } from "../../../context/Organization/types";
import numberWithCommas from "../../../utils/numberFormatter";

const DeleteButton = props => (
  <Tooltip title="Delete">
    <ActionButtonStyled
      {...props}
      danger
      type="default"
      children={<DeleteFilled height="1.2em" width="1.2em" />}
    />
  </Tooltip>
);

const EditButton = props => (
  <Tooltip title="Edit">
    <ActionButtonStyled
      {...props}
      type="default"
      children={<EditFilled height="1.2em" width="1.2em" />}
    />
  </Tooltip>
);

const ImgPlaceholderStyled = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background: #e7833b;
  margin-bottom: 0;
`;

// Function that Generate Table Columns
const createTableColumns = (
  handleEdit?: (record: any) => void,
  handleDelete?: (record: any) => void,
  isAdmin?: boolean,
  isOrganizationRoute?: boolean,
  isViewingProfile?: boolean
) => {
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
      title: "CEO/DG/Head/Founder",
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
      title: "Business Type",
      dataIndex: "business_type",
      key: "business_type",
    },
    // {
    //   title: "Employees",
    //   dataIndex: "employees",
    //   key: "employees",
    //   align: "center",
    // },
    // {
    //   title: "Funding (₦)",
    //   dataIndex: "funding",
    //   key: "funding",

    //   render: (record, key) => {
    //     // let result = record ? record.split("₦") : [];

    //     return (
    //       // <span>{`${result.length ? numberWithCommas(result[1]) : ""}`}</span>
    //       <span>{numberWithCommas(record)}</span>
    //     );
    //   },
    // },
    {
      title: "Actions",
      key: "action",
      align: "center",

      render: (record, key) => {
        return (
          <Space size="middle">
            <ViewProfileBtnStyled>
              <Link to={`/d/profile/${record.id}`}>View Profile</Link>
            </ViewProfileBtnStyled>

            {isAdmin && isOrganizationRoute ? (
              <Fragment>
                <EditButton onClick={() => handleEdit(record)} />
                <DeleteButton onClick={() => handleDelete(record.id)} />
              </Fragment>
            ) : null}
          </Space>
        );
      },
    },
  ];

  return columns;
};

function getBusinessType(org: IOrganizationProps) {
  if (org.is_ecosystem) {
    return "Ecosystem Enabler";
  }

  if (org.is_entrepreneur) {
    return "Entrepreneur";
  }
}

const createDataSource = (organizationList: IOrganizationProps[]) => {
  const dataSource = organizationList.map((org, key) => {
    return {
      ...org,
      key: org.id,
      rank: key + 1,
      business_type: getBusinessType(org),
      company: org.name,
      ceo_name: { name: org.ceo_name, avatar: org.ceo_image_url },
      state: org.state,
      sectors: org.sector_name || org.sector,
      market_cap: org.market_cap,
      employees: org.no_of_jobs,
      funding: org.funding,
      id: org.id,
    };
  });

  return dataSource;
};

const TableOptions = () => (
  <Fragment>
    {/* <NavLink to="#">
      <FeatherIcon size={16} icon="printer" />
      <span>Printer</span>
    </NavLink> */}
    <NavLink to="#">
      <FeatherIcon size={16} icon="book-open" />
      <span>PDF</span>
    </NavLink>
    {/* <NavLink to="#">
      <FeatherIcon size={16} icon="file-text" />
      <span>Google Sheets</span>
    </NavLink> */}
    <NavLink to="#">
      <FeatherIcon size={16} icon="x" />
      <span>Excel (XLSX)</span>
    </NavLink>
    <NavLink to="#">
      <FeatherIcon size={16} icon="file" />
      <span>CSV</span>
    </NavLink>
  </Fragment>
);

export {
  createTableColumns,
  createDataSource,
  TableOptions,
  EditButton,
  DeleteButton,
  ImgPlaceholderStyled,
};
