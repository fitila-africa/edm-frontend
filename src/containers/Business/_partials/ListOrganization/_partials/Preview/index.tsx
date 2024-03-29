import React, { useContext, useState, useEffect, FC } from "react";
import { ButtonStyled } from "../../../../../Styles";
import { capitalize, numberWithCommas } from "../../../../../../utils/helpers";
import {
  useApiContext,
  useEcosystemContext,
  useSectorContext,
} from "../../../../../../context";
import { BusinessContext } from "../../../../context";
import { useHistory } from "react-router-dom";
import { Col, Row } from "antd";

interface IPreviewProps {
  prev: () => void;
}

const Preview: FC<IPreviewProps> = ({ prev }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [ecosystem, setEcosystem] = useState([]);
  const [selectedEcosystem, setSelectedEcosystem] = useState([]);
  const [selectedSubEcosystem, setSelectedSubEcosystem] = useState([]);

  const { organization: api } = useApiContext();

  const history = useHistory();

  const { state, clearBusinessData } = useContext(BusinessContext);

  const {
    state: organization_state,
    ecosystem: ecosystemId,
    // sub_ecosystem,
    sub_ecosystem_sub_class_name,
    sub_segment: subSegmentId,
    business_type,
    name,
    description,
    // headquarters,
    ceo_name,
    ceo_gender,
    ceo_image,
    company_logo,
    address,
    sector,
    business_level,
    num_supported_business,
    website,
    num_of_employees,
    funding_currency,
    funding_currency_value,
    funding_disbursed_for_support,
    company_valuation,
    currency,
    email,
    phone,
    facebook,
    instagram,
    linkedin,
    twitter,
    cac_doc,
  } = state;

  const { data: ecosystemData } = useEcosystemContext();
  const { data: sectors } = useSectorContext();

  const is_startup =
    business_level && business_level.toLowerCase() === "startup";

  useEffect(() => {
    const getEcosystem = () => {
      if (!ecosystem.length) {
        setEcosystem(ecosystemData);

        let selectedecosystem = ecosystemData.filter(
          eco => eco.id === ecosystemId
        );

        let selectedSubEcosystem =
          selectedecosystem.length &&
          selectedecosystem[0].sub_ecosystem.filter(
            sub_eco => sub_eco.id === subSegmentId
          );

        setSelectedEcosystem(selectedecosystem);
        setSelectedSubEcosystem(selectedSubEcosystem);
      }
    };

    getEcosystem();
  }, [
    ecosystemData,
    ecosystem.length,
    ecosystemId,
    subSegmentId,
    selectedEcosystem,
  ]);

  const handleSubmit = () => {
    setIsLoading(true);

    const selectedSector = sectors.find(
      sector => sector.name.toLowerCase() === state.sector
    );

    const data = { ...state, sector: selectedSector.id };
    // console.log(data);

    const formData = new FormData();

    for (const key in data) {
      if (data[key]) {
        formData.append(key, data[key]);
      }
    }

    api
      .addBusiness(formData)
      .then(res => {
        setIsLoading(false);
        if (res && res.status === 201) {
          clearBusinessData();
          history.push("/business/success");
        }
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const ceo_name_label =
    state.business_type === "Entrepreneur"
      ? "CEO/Founder's Name"
      : "CEO/DG/Head/Founder's Name";

  return (
    <div>
      <div className="preview-info">
        <p>
          <strong>Business Type:</strong>
          <br />
          {business_type}
        </p>

        <p>
          <strong>Organization Name:</strong>
          <br />
          {name}
        </p>

        <p>
          <strong>{ceo_name_label}:</strong>
          <br />
          {ceo_name}
        </p>

        <p>
          <strong>Gender:</strong>
          <br />
          {capitalize(ceo_gender)}
        </p>

        <p>
          <strong>Business Address:</strong>
          <br />
          {address}
        </p>

        <p>
          <strong>State:</strong>
          <br />
          {organization_state}
        </p>

        {business_type === "Ecosystem Enabler" && (
          <p>
            <strong>Ecosystem Segment:</strong>
            <br />
            {selectedEcosystem.length > 0 && selectedEcosystem[0].name}
          </p>
        )}

        {business_type === "Ecosystem Enabler" && (
          <p>
            <strong>Sub-Segment of Ecosystem:</strong>
            <br />
            {selectedSubEcosystem.length && selectedSubEcosystem[0].name}
          </p>
        )}

        {business_type === "Ecosystem Enabler" && (
          <p>
            <strong>Sub-Segment SubClass:</strong>
            <br />
            {sub_ecosystem_sub_class_name || "--"}
          </p>
        )}

        {business_type === "Ecosystem Enabler" &&
          funding_disbursed_for_support && (
            <p>
              <strong>Funding Disbursed for Support:</strong>
              <br />
              {currency}
              {numberWithCommas(funding_disbursed_for_support)}
            </p>
          )}

        {
          <p>
            <strong>Sector:</strong>
            <br />
            {capitalize(sector)}
          </p>
        }

        {business_type === "Entrepreneur" && (
          <p>
            <strong>Business Level:</strong>
            <br />
            {business_level}
          </p>
        )}

        {business_type === "Entrepreneur" && is_startup && company_valuation && (
          <p>
            <strong>Company Valuation:</strong>
            <br />
            {currency}
            {numberWithCommas(company_valuation)}
          </p>
        )}

        {business_type === "Ecosystem Enabler" && (
          <p>
            <strong>
              Number of businesses supported over the last 5 years:
            </strong>
            <br />
            {num_supported_business}
          </p>
        )}

        {funding_currency_value && (
          <p>
            <strong>Funding:</strong>
            <br />
            {`${funding_currency}${numberWithCommas(funding_currency_value)}`}
          </p>
        )}

        {website && (
          <p>
            <strong>Website Address:</strong>
            <br />
            <a href={website} target="_blank" rel="noreferrer noopener">
              {website}
            </a>
          </p>
        )}
        <p>
          <strong>Email Address:</strong>
          <br />
          {email}
        </p>

        <p>
          <strong>Phone Number:</strong>
          <br />
          {phone}
        </p>

        {facebook && (
          <p>
            <strong>Facebook Url:</strong>
            <br />
            <a href={facebook} target="_blank" rel="noreferrer noopener">
              {facebook}
            </a>
          </p>
        )}

        {linkedin && (
          <p>
            <strong>LinkedIn Url:</strong>
            <br />
            <a href={linkedin} target="_blank" rel="noreferrer noopener">
              {linkedin}
            </a>
          </p>
        )}

        {instagram && (
          <p>
            <strong>Instagram Url:</strong>
            <br />
            <a href={instagram} target="_blank" rel="noreferrer noopener">
              {instagram}
            </a>
          </p>
        )}

        {twitter && (
          <p>
            <strong>Twitter Url:</strong>
            <br />
            <a href={twitter} target="_blank" rel="noreferrer noopener">
              {twitter}
            </a>
          </p>
        )}

        {/* Add Image Upload Previews Here */}
        {company_logo && (
          <p>
            <strong>Company Logo:</strong>
            <br />
            {company_logo.name}
          </p>
        )}

        {ceo_image && (
          <p>
            <strong>CEO/Founder Image:</strong>
            <br />
            {ceo_image.name}
          </p>
        )}

        <p>
          <strong>Business RC Number:</strong>
          <br />
          {cac_doc}
        </p>

        <p>
          <strong>Number of Employees:</strong>
          <br />
          {num_of_employees}
        </p>

        <p>
          <strong>Description:</strong>
          <br />
          {description || "--"}
        </p>
      </div>

      <Row gutter={8}>
        <Col span={12}>
          <ButtonStyled type="primary" size="large" onClick={() => prev()}>
            Previous
          </ButtonStyled>
        </Col>

        <Col span={12}>
          <ButtonStyled
            size="large"
            htmlType="submit"
            type="primary"
            loading={isLoading}
            onClick={() => handleSubmit()}
          >
            Submit
          </ButtonStyled>
        </Col>
      </Row>
    </div>
  );
};

export default Preview;
