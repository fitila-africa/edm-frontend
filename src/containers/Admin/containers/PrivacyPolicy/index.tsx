import React from "react";
import { Col, Row } from "antd";
import Heading from "../../../../components/heading/heading";
import { PageHeader } from "../../../../components/page-headers/page-headers";
import { Main } from "../../../AuthLayout/styled";
import { AdminSectionWrapper } from "../../styled";

import styled from "styled-components";

export const PrivacyHeader = styled.h2`
  color: #1d429c;
  font-weight: 700;
`;

const PrivacyPolicy = () => {
  return (
    <AdminSectionWrapper>
      <PageHeader
        title={
          <Heading as="h2" style={{ fontSize: "24px", fontWeight: "bold" }}>
            Disclaimer and Privacy Policy
          </Heading>
        }
        style={{ marginBottom: "0" }}
      />

      <Main>
        <Row gutter={24}>
          <Col span={24}>
            <Row gutter={24}>
              <Col sm={24} md={24} lg={12}>
                <div>
                  <PrivacyHeader>Interpretation </PrivacyHeader>
                  <p>
                    The words of which the initial letter is capitalized have
                    meanings defined under the following conditions. The
                    following definitions shall have the same meaning regardless
                    of whether they appear in singular or in plural.
                  </p>
                </div>

                <div>
                  <PrivacyHeader>Definitions </PrivacyHeader>
                  <p>For the purposes of this Disclaimer:</p>
                  <ul>
                    <li>
                      <b>Company</b> (referred to as either "the Company", "We",
                      "Us" or "Our" in this Disclaimer) refers to FATE
                      Foundation, Water House HQ, Ijora Cause Way, Lagos.
                    </li>
                    <li>
                      <b>Service</b> refers to the Website.
                    </li>
                    <li>
                      <b>You</b> means the individual accessing the Service, or
                      the company, or other legal entity on behalf of which such
                      individual is accessing or using the Service, as
                      applicable.
                    </li>
                    <li>
                      <b>Website</b> refers to Enterprise Data Map, accessible
                      from <br />
                      <a href="www.enterprisedatamap.org">
                        www.enterprisedatamap.org
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <PrivacyHeader>Disclaimer</PrivacyHeader>
                  <p>
                    The information contained on the Service is for general
                    information purposes only. The Company assumes no
                    responsibility for errors or omissions in the contents of
                    the Service. In no event shall the Company be liable for any
                    special, direct, indirect, consequential, or incidental
                    damages or any damages whatsoever, whether in an action of
                    contract, negligence or other tort, arising out of or in
                    connection with the use of the Service or the contents of
                    the Service. The Company reserves the right to make
                    additions, deletions, or modifications to the contents on
                    the Service at any time without prior notice. The Company
                    does not warrant that the Service is free of viruses or
                    other harmful components.
                  </p>
                </div>

                <div>
                  <PrivacyHeader>Views Expressed Disclaimer</PrivacyHeader>

                  <p>
                    The Service may contain views and opinions which are those
                    of the authors and do not necessarily reflect the official
                    policy or position of any other author, agency,
                    organization, employer or company, including the Company.
                    Comments published by users are their sole responsibility
                    and the users will take full responsibility, liability and
                    blame for any libel or litigation that results from
                    something written in or as a direct result of something
                    written in a comment. The Company is not liable for any
                    comment published by users and reserve the right to delete
                    any comment for any reason whatsoever.
                  </p>
                </div>

                <div>
                  <PrivacyHeader>
                    "Use at Your Own Risk" Disclaimer
                  </PrivacyHeader>

                  <p>
                    All information in the Service is provided "as is", with no
                    guarantee of completeness, accuracy, timeliness or of the
                    results obtained from the use of this information, and
                    without warranty of any kind, express or implied, including,
                    but not limited to warranties of performance,
                    merchantability and fitness for a particular purpose. The
                    Company will not be liable to You or anyone else for any
                    decision made or action taken in reliance on the information
                    given by the Service or for any consequential, special or
                    similar damages, even if advised of the possibility of such
                    damages.
                  </p>
                </div>
              </Col>

              <Col sm={24} md={24} lg={12}>
                <div>
                  <PrivacyHeader>External Links Disclaimer </PrivacyHeader>
                  <p>
                    The Service may contain links to external websites that are
                    not provided or maintained by or in any way affiliated with
                    the Company. Please note that the Company does not guarantee
                    the accuracy, relevance, timeliness, or completeness of any
                    information on these external websites.
                  </p>
                </div>

                <div>
                  <PrivacyHeader>Errors and Omissions Disclaimer</PrivacyHeader>

                  <p>
                    The information given by the Service is for general guidance
                    on matters of interest only. Even if the Company takes every
                    precaution to insure that the content of the Service is both
                    current and accurate, errors can occur. Plus, given the
                    changing nature of laws, rules and regulations, there may be
                    delays, omissions or inaccuracies in the information
                    contained on the Service. The Company is not responsible for
                    any errors or omissions, or for the results obtained from
                    the use of this information.
                  </p>
                </div>

                <div>
                  <PrivacyHeader>Fair Use Disclaimer</PrivacyHeader>

                  <p>
                    The Company may use copyrighted material which has not
                    always been specifically authorized by the copyright owner.
                    The Company is making such material available for criticism,
                    comment, news reporting, teaching, scholarship, or research.
                    The Company believes this constitutes a "fair use" of any
                    such copyrighted material as provided for in section 107 of
                    the United States Copyright law. If You wish to use
                    copyrighted material from the Service for your own purposes
                    that go beyond fair use, You must obtain permission from the
                    copyright owner.
                  </p>
                </div>

                <div>
                  <PrivacyHeader>No Responsibility Disclaimer</PrivacyHeader>

                  <p>
                    The information on the Service is provided with the
                    understanding that the Company is not herein engaged in
                    rendering legal, accounting, tax, or other professional
                    advice and services. As such, it should not be used as a
                    substitute for consultation with professional accounting,
                    tax, legal or other competent advisers. In no event shall
                    the Company or its suppliers be liable for any special,
                    incidental, indirect, or consequential damages whatsoever
                    arising out of or in connection with your access or use or
                    inability to access or use the Service.
                  </p>
                </div>

                <div>
                  <PrivacyHeader>Contact Us</PrivacyHeader>

                  <p>
                    If you have any questions about this Disclaimer, You can
                    contact Us:
                  </p>
                  <ul>
                    <li>
                      By email:{" "}
                      <a href="mailto:policy@fatefoundation.org">
                        policy@fatefoundation.org
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Main>
    </AdminSectionWrapper>
  );
};

export default PrivacyPolicy;
