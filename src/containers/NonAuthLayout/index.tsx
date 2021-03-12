import React, { FunctionComponent } from "react";
import { Layout, Col, Row, Dropdown } from "antd";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../static/svg/logo.svg";
import { ReactComponent as UserPlus } from "../../static/svg/user.svg";
import { ReactComponent as UserIcon } from "../../static/svg/usericon.svg";
import {
  BusinessButton,
  Div,
  FooterStyled,
  HeaderStyled,
  LayoutStyled,
  LinkStyled,
} from "./styled";
import { ButtonStyled } from "../Styles";
import { DownOutlined } from "@ant-design/icons";

const { Content } = Layout;

const NonAuthLayout: FunctionComponent = ({ children }) => {
  const menu = (
    <div style={{ padding: "1rem", background: "#fff" }}>
      <LinkStyled
        to="#"
        style={{
          padding: "1rem",
          background: "#F7F9FA;",
          marginBottom: ".5rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span>
          <UserPlus style={{ marginRight: "1.25rem" }} /> Sign Up
        </span>
      </LinkStyled>

      <LinkStyled
        to="/signin"
        style={{
          padding: "1rem",
          background: "#F7F9FA;",
          marginBottom: ".5rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span>
          <UserPlus style={{ marginRight: "1.25rem" }} /> Sign In
        </span>
      </LinkStyled>
    </div>
  );

  return (
    <Div>
      <LayoutStyled className="layout nonAuthLayout">
        <HeaderStyled
        // style={{
        //   position: "fixed",
        //   width: "100%",
        //   top: 0,
        //   left: 0,
        //   background: "#fff",
        // }}
        >
          <Row
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <div className="navItem-left">
              <Link className={`striking-logo top-menu' `} to="/">
                <img src={Logo} alt="Logo" />
              </Link>

              {/* <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
              </Breadcrumb> */}
            </div>

            <div className="navItem-right">
              <BusinessButton size="large">
                <NavLink to="/business">List Your Organization</NavLink>
              </BusinessButton>

              <Dropdown className="account-btn" overlay={menu}>
                <ButtonStyled size="large">
                  <UserIcon style={{ marginRight: "10px" }} />
                  <strong>
                    Account
                    <DownOutlined style={{ marginLeft: "10px" }} />
                  </strong>
                </ButtonStyled>
              </Dropdown>
              {/* 
              <ButtonStyled size="large">
                <LinkStyled to="/signup">
                  <span>
                    <UserPlus style={{ marginRight: "1.25rem" }} /> Sign Up
                  </span>
                </LinkStyled>
              </ButtonStyled> */}
            </div>
          </Row>
        </HeaderStyled>

        <Content
          style={{
            padding: "0 3.125rem",
            background: "#fff",
            minHeight: "calc(100vh - 128px)",
            marginTop: "4rem",
          }}
        >
          <section>{children}</section>
        </Content>

        <FooterStyled className="admin-footer">
          <Row>
            <Col md={12} xs={24}>
              <span className="admin-footer__copyright">
                2020 ©, Copyright, Enterprise Data Map
              </span>
            </Col>

            <Col md={12} xs={24}>
              <div className="admin-footer__links">
                <NavLink to="/login">Admin</NavLink>
                <NavLink to="/d/privacy">Privacy Poilicy</NavLink>
                <NavLink to="/d/terms">Terms and Condition</NavLink>
                <NavLink to="#">Cookie Poilicy</NavLink>
              </div>
            </Col>
          </Row>
        </FooterStyled>
      </LayoutStyled>
    </Div>
  );
};

export default NonAuthLayout;
