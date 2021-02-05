import React from "react";
import { connect } from "react-redux";
import { Col } from "antd";
import { Main } from "../../../AuthLayout/styled";
import { AdminSectionWrapper } from "../../styled";
import { Child, TabBasic } from "../../../../components/tabs/style";
import SimilarCompanies from "./_partials/SimilarCompanies";
import Revenue from "./_partials/Revenue";
import Ratings from "./_partials/Ratings";
import PressReleases from "./_partials/PressReleases";
import Funding from "./_partials/Funding";
import SocialMedia from "./_partials/SocialMedia";
import Contact from "./_partials/Contact";
import Summary from "./_partials/Summary";
import { RowStyled } from "./styled";

const Profile = ({ organization, match }) => {
  const { id: organizationId } = match.params;

  console.log("Organzaition", organizationId);

  const selectedOrganization = organization.filter(
    // eslint-disable-next-line eqeqeq
    org => org.id == organizationId
  );

  console.log("Slected Organzaition", selectedOrganization);

  let counter = 0;

  const data = [
    {
      id: 1,
      title: "Summary",
      tabTitle: "Summary",
      content: <Summary selectedOrganization={selectedOrganization} />,
    },
    {
      id: 2,
      title: "Similar Companies",
      tabTitle: "Similar Companies",
      content: <SimilarCompanies />,
    },
    {
      id: 3,
      title: "Revenue",
      tabTitle: "Revenue",
      content: <Revenue />,
    },
    {
      id: 3,
      title: "Funding",
      tabTitle: "Funding",
      content: <Funding />,
    },
    {
      id: 3,
      title: "Press Releases",
      tabTitle: "Press Releases",
      content: <PressReleases />,
    },
    {
      id: 3,
      title: "Social Media",
      tabTitle: "Social Media",
      content: <SocialMedia />,
    },
    {
      id: 3,
      title: "Ratings",
      tabTitle: "Ratings",
      content: <Ratings />,
    },
    {
      id: 3,
      title: "Contact",
      tabTitle: "Contact",
      content: <Contact selectedOrganization={selectedOrganization[0]} />,
    },
  ];

  return (
    <AdminSectionWrapper className="company-profile">
      <RowStyled className="company-profile-row" gutter={25}>
        <Col span={24}>
          <TabBasic defaultActiveKey="1" tabPosition={"top"}>
            {data.map(item => {
              const { content: tabContent, tabTitle } = item;
              counter += 1;
              return (
                <Child tab={tabTitle} key={counter}>
                  <Main className="main-content" style={{ padding: "0" }}>
                    {tabContent}
                  </Main>
                </Child>
              );
            })}
          </TabBasic>
        </Col>
      </RowStyled>
    </AdminSectionWrapper>
  );
};

const mapStateToProps = state => ({
  organization: state.business.organization,
});

export default connect(mapStateToProps, null)(Profile);
