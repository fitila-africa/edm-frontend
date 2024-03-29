import React, { FC, useState } from "react";
import { Modal, Button } from "antd";
import { IOrganizationProps } from "../../../../../../context/Organization/types";
import {
  useApiContext,
  useOrganizationContext,
} from "../../../../../../context";
import { capitalize } from "../../../../../../utils/helpers";
import numberWithCommas from "../../../../../../utils/numberFormatter";

interface IViewDetailsProps {
  visible: boolean;
  closeModal: () => void;
  currentListing: IOrganizationProps;
  toggleReasonModal: () => void;
  refetchPendingApplications: () => Promise<void>;
}

const ViewDetails: FC<IViewDetailsProps> = ({
  visible,
  closeModal,
  currentListing,
  toggleReasonModal,
  refetchPendingApplications,
}) => {
  const [isApprovalLoading, setIsApprovalLoading] = useState(false);

  const { organization: api } = useApiContext();
  const { refetchOrganizations } = useOrganizationContext();

  const {
    id,
    name,
    ceo_name,
    state,
    sector_name,
    num_of_employees,
    funding,
    address,
    business_level,
    ceo_gender,
    company_valuation,
    description,
    funding_disbursed_for_support,
    phone,
    num_supported_business,
    is_ecosystem,
    is_entrepreneur,
    ecosystem_name,
    sub_ecosystem_name,
    sub_ecosystem_sub_class_name,
    cac_doc,
    linkedIn,
    twitter,
    facebook,
    website,
    date_created,
  } = currentListing;

  const handleApproval = async () => {
    setIsApprovalLoading(true);

    try {
      const res = await api.approveOrganization(id);

      setIsApprovalLoading(false);

      if (res.status === 202) {
        Modal.success({
          title: "Organization has been approved.",
          onOk: () => closeModal(),
        });
        refetchPendingApplications();
        refetchOrganizations();
      }
    } catch (error) {
      console.log(error);
      setIsApprovalLoading(false);
    }
  };

  return (
    <Modal
      title={<strong>View Company Details</strong>}
      visible={visible}
      onCancel={closeModal}
      footer={[
        <Button key="decline" onClick={() => toggleReasonModal()}>
          Decline
        </Button>,
        <Button
          type="primary"
          loading={isApprovalLoading}
          key="approve"
          onClick={() => handleApproval()}
        >
          Approve
        </Button>,
      ]}
    >
      <div>
        <p>
          <strong>Company</strong>: {name || "--"}
        </p>

        <p>
          <strong>Business Role</strong>:{" "}
          {(is_ecosystem && "Ecosystem Player") ||
            (is_entrepreneur && "Enterpreneur") ||
            "--"}
        </p>

        <p>
          <strong>Description</strong>: {description || "--"}
        </p>

        <p>
          <strong>CEO/Founder</strong>: {ceo_name.name || "--"}
        </p>

        <p>
          <strong>Phone</strong> {phone || "--"}
        </p>

        {currentListing.is_ecosystem && (
          <>
            {" "}
            <p>
              <strong>Ecosystem</strong>: {ecosystem_name || "--"}
            </p>
            <p>
              <strong>Sub-Ecosystem</strong>: {sub_ecosystem_name || "--"}
            </p>
            <p>
              <strong>Sub-Ecosystem Sub-Class </strong>:{" "}
              {sub_ecosystem_sub_class_name || "--"}
            </p>{" "}
          </>
        )}

        <p>
          <strong>CEO Gender</strong>: {capitalize(ceo_gender) || "--"}
        </p>
        <p>
          <strong>Address</strong>: {address || "--"}
        </p>

        <p>
          <strong>State</strong>: {state || "--"}
        </p>

        {currentListing.is_entrepreneur && (
          <p>
            <strong>Business Level</strong>: {business_level || "--"}
          </p>
        )}

        <p>
          <strong>Company Valuation</strong>:{" "}
          {numberWithCommas(company_valuation) || "--"}
        </p>

        <p>
          <strong>Sector</strong>: {sector_name || "--"}
        </p>

        <p>
          <strong>Employees</strong>: {num_of_employees || "--"}
        </p>

        <p>
          <strong>Number of Supported Businesses</strong>:{" "}
          {num_supported_business || "--"}
        </p>

        {currentListing.is_entrepreneur && (
          <p>
            <strong>Funding (₦)</strong>:{" "}
            {is_ecosystem ? "N/A" : funding && numberWithCommas(funding)}
          </p>
        )}

        {currentListing.is_ecosystem && (
          <p>
            <strong>Funding Disbursed for Support Businesses</strong>:{" "}
            {(funding_disbursed_for_support &&
              numberWithCommas(funding_disbursed_for_support)) ||
              "--"}
          </p>
        )}

        <p>
          <strong>Business RC Number</strong>: {cac_doc || "--"}
        </p>

        <p>
          <strong>LinkedIn</strong>:{" "}
          {(linkedIn && (
            <a href={linkedIn} target="_blank" rel="noreferrer noopener">
              {linkedIn}
            </a>
          )) ||
            "--"}
        </p>

        <p>
          <strong>Twitter</strong>:{" "}
          {(twitter && (
            <a href={twitter} target="_blank" rel="noreferrer noopener">
              {twitter}
            </a>
          )) ||
            "--"}
        </p>

        <p>
          <strong>Facebook</strong>:{" "}
          {(facebook && (
            <a href={facebook} target="_blank" rel="noreferrer noopener">
              {facebook}
            </a>
          )) ||
            "--"}
        </p>

        <p>
          <strong>Website</strong>:{" "}
          {(website && (
            <a href={website} target="_blank" rel="noreferrer noopener">
              {website}
            </a>
          )) ||
            "--"}
        </p>

        <p>
          <strong>Date Listed</strong>:{" "}
          {new Date(date_created).toJSON().split("T")[0] || "--"}
        </p>
      </div>
    </Modal>
  );
};

export default ViewDetails;
