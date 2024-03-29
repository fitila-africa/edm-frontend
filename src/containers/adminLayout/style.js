import { Button } from "antd";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  header {
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 2px 8px rgba(53, 55, 81, 0.04);
    ${({ darkMode }) => (darkMode ? `background: #272B41;` : "")};
    z-index: 999;
    padding: 0 3rem;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background: #fff;

    .ant-row {
      justify-content: space-between;
      align-items: center;
      flex: 1;
    }

    @media screen and (max-width: 1200px) {
      padding-left: 0;
      padding-right: 0;
    }

    @media screen and (max-width: 375px) {
      .user-info {
        display: none;
      }
    }

    .navitem-left {
      display: flex;
      align-items: center;

      .ant-breadcrumb {
        margin-left: 4rem;
        color: #000000;
        font-size: 1rem;
      }

      @media screen and (max-width: 992px) {
        .ant-breadcrumb {
          display: none;
        }
      }
    }

    .ant-btn-link {
      ${({ darkMode }) =>
        darkMode
          ? `background: #272B41;border-color: #272B41;color: #7D808D !important`
          : ""};
    }

    .head-example {
      ${({ darkMode }) => (darkMode ? `color: #A8AAB3;` : "")};
    }
    .ant-menu-sub.ant-menu-vertical {
      .ant-menu-item {
        a {
          color: ${({ theme }) => theme["gray-color"]};
        }
      }
    }
    .ant-menu.ant-menu-horizontal {
      display: flex;
      align-items: center;
      margin: 0 -16px;
      li.ant-menu-submenu {
        margin: 0 16px;
      }
      .ant-menu-submenu {
        &.ant-menu-submenu-active,
        &.ant-menu-submenu-selected,
        &.ant-menu-submenu-open {
          .ant-menu-submenu-title {
            color: ${({ darkMode }) => (darkMode ? `#fff;` : "#5A5F7D")};
            svg,
            i {
              color: ${({ darkMode }) => (darkMode ? `#fff;` : "#5A5F7D")};
            }
          }
        }
        .ant-menu-submenu-title {
          font-size: 14px;
          font-weight: 500;
          color: ${({ darkMode }) => (darkMode ? `#ffffff90;` : "#5A5F7D")};

          svg,
          i {
            color: ${({ darkMode }) => (darkMode ? `#ffffff90;` : "#5A5F7D")};
          }

          .ant-menu-submenu-arrow {
            font-family: "FontAwesome";
            font-style: normal;
            margin-left: 6px;

            &:after {
              color: ${({ darkMode }) => (darkMode ? `#ffffff90;` : "#9299B8")};
              content: "\f107";
              background-color: transparent;
            }
          }
        }
      }
    }
  }
  .header-more {
    .head-example {
      ${({ darkMode }) => (darkMode ? `color: #A8AAB3;` : "")};
    }
  }

  .striking-logo {
    /* width: 7rem; */

    @media only screen and (max-width: 875px) {
      ${({ theme }) => (theme.rtl ? "margin-left" : "margin-right")}: 4px;
    }
    @media only screen and (max-width: 767px) {
      ${({ theme }) => (theme.rtl ? "margin-left" : "margin-right")}: 0;
    }

    img {
      width: 100%;
    }

    svg {
      margin-top: 10px;
      margin-left: -15px;

      @media screen and (max-width: 992px) {
        top: -9px;
        position: absolute;
        left: 40px;
        margin-top: 0;
        margin-left: 0;
      }
    }

    &.top-menu {
      margin-left: 15px;
    }
  }
  .certain-category-search-wrapper {
    ${({ darkMode, theme }) =>
      darkMode
        ? `${!theme.rtl ? "border-right" : "border-left"}: 1px solid #272B41;`
        : ""};
    @media only screen and (max-width: 767px) {
      padding: 0 15px;
    }
    input {
      max-width: 350px;
      ${({ darkMode }) => (darkMode ? `background: #272B41;` : "")};
      ${({ darkMode }) => (darkMode ? `color: #fff;` : "#5A5F7D")};
      @media only screen and (max-width: 875px) {
        padding-right: 5px;
      }
    }
  }

  .navbar-brand {
    button {
      padding: ${({ theme }) =>
        theme.rtl ? "0 15px 0 25px" : "0 25px 0 15px"};
      line-height: 0;
      margin-top: 4px;
      color: ${({ theme }) => theme["extra-light-color"]};
      @media only screen and (max-width: 875px) {
        padding: ${({ theme }) =>
          theme.rtl ? "0 10px 0 25px" : "0 25px 0 10px"};
      }
      @media only screen and (max-width: 767px) {
        padding: ${({ theme }) =>
          theme.rtl ? "0 0px 0 15px" : "0 15px 0 0px"};
      }
    }
  }

  /* Sidebar styles */
  .ant-layout-sider {
    /* box-shadow: 0px 2px 8px rgba(53, 55, 81, 0.08); */
    margin: 76px 0 0 0;
    padding: 15px 15px 55px 0;
    overflow-y: auto;
    height: 100vh;
    position: fixed;
    left: 0;
    z-index: 998;
    background: #fff;

    @media (max-width: 991px) {
      /* box-shadow: 0 0 10px #00000020; */
    }

    &.ant-layout-sider-dark {
      background: ${({ theme }) => theme["dark-color"]};
      .ant-layout-sider-children {
        .ant-menu {
          .ant-menu-submenu-inline {
            > .ant-menu-submenu-title {
              padding: 0 30px !important;
            }
          }
          .ant-menu-item,
          .ant-menu-submenu,
          .ecosystem-submenu {
            padding: 0 30px !important;
          }
        }
      }
    }

    .ant-layout-sider-children {
      padding-bottom: 15px;
      > .sidebar-nav-title {
        margin-top: 8px;
      }

      .ant-menu {
        overflow-x: hidden;
        border-right: 0 none;
        background-color: none;

        .ant-menu-submenu,
        .ant-menu-item {
          .feather {
            width: 16px;
            font-size: 16px;
            color: ${({ theme }) => theme["extra-light-color"]};
          }

          span {
            padding-left: 20px;
            display: inline-block;
            color: ${({ theme }) => theme["dark-color"]};
            transition: 0.3s ease;
          }
        }

        .ant-menu-submenu {
          padding-left: 3rem;

          @media screen and (max-width: 1200px) and (min-width: 1150px) {
            padding-left: 0px;
          }

          .ant-menu-submenu-title {
            display: flex;
            align-items: center;
          }
        }

        .ant-menu-submenu-inline {
          > .ant-menu-submenu-title {
            display: flex;
            align-items: center;
            padding-left: 0 !important;
            padding-right: 15px !important;

            a {
              display: flex;

              img {
                width: 16px;
                height: 16px;
              }
            }

            .ant-menu-submenu-arrow {
              right: auto;
              right: 24px;

              &:after,
              &:before {
                width: 7px;
                background: #868eae;
                height: 1.25px;
              }
              &:before {
                transform: rotate(45deg)
                  ${({ theme }) =>
                    !theme.rtl ? "translateY(-3.3px)" : "translateY(3.3px)"};
              }
              &:after {
                transform: rotate(-45deg)
                  ${({ theme }) =>
                    theme.rtl ? "translateY(-3.3px)" : "translateY(3.3px)"};
              }
            }
          }
          &.ant-menu-submenu-open {
            > .ant-menu-submenu-title {
              .ant-menu-submenu-arrow {
                transform: translateY(4px);
                &:before {
                  transform: rotate(45deg) translateX(-3.3px);
                }
                &:after {
                  transform: rotate(-45deg) translateX(3.3px);
                }
              }
            }
          }
          .ant-menu-item {
            padding-left: 30px !important;
            padding-right: 0 !important;
            transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
          }
        }
        .ant-menu-item {
          display: flex;
          align-items: center;
          padding-left: 3rem !important;

          :hover,
          :focus,
          :active {
            color: ${({ theme }) => theme["text-primary"]};
            background-color: ${({ theme }) => theme["secondary-hover"]};
            font-weight: bold;
          }

          &.ant-menu-item-active {
            border-radius: 4px;

            a {
              color: ${({ theme }) => theme["seconadry-color"]};
            }
          }

          a {
            display: flex !important;
            align-items: center;
            .feather {
              width: 16px;
              color: ${({ theme }) => theme["extra-light-color"]};
            }
            span {
              padding-right: 20px;
              display: inline-block;
              color: ${({ theme }) => theme["dark-color"]};
            }
          }

          &.ant-menu-item-selected {
            color: ${({ theme }) => theme["text-primary"]};
            background-color: ${({ theme }) => theme["secondary-hover"]};

            a,
            a:hover {
              color: ${({ theme }) => theme["text-primary"]};
              font-weight: bold;
            }

            svg,
            i {
              color: ${({ theme }) => theme["text-primary"]};
            }
          }
        }

        .ant-menu-item-active {
          a {
            color: ${({ theme }) => theme["text-primary"]};
          }
        }

        .ant-menu-submenu,
        .ant-menu-item {
          ${({ theme }) => theme.rtl && `padding-right: 5px;`};

          &.ant-menu-item-selected {
            border-radius: 4px;
            &:after {
              content: none;
            }
          }
          &.ant-menu-submenu-active {
            border-radius: 4px;
            ${({ darkMode }) =>
              darkMode ? `background-color: rgba(255, 255, 255, .05);` : ""};
          }
        }
        .sidebar-nav-title {
          margin-top: 40px;
          margin-bottom: 24px;
        }
        &.ant-menu-inline-collapsed {
          .ant-menu-submenu {
            text-align: ${({ theme }) => (!theme.rtl ? "left" : "right")};
            .ant-menu-submenu-title {
              padding: 0 20px;
              justify-content: center;
            }
          }
          .ant-menu-item {
            padding: 0 20px !important;
            justify-content: center;
          }
          .ant-menu-submenu,
          .ant-menu-item {
            span {
              display: none;
            }
          }
        }
      }
    }
    .sidebar-nav-title {
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
      ${({ darkMode }) =>
        darkMode ? `color: rgba(255, 255, 255, .38);` : "color: #9299B8;"};
      padding: 0 ${({ theme }) => (theme.rtl ? "20px" : "15px")};
      display: flex;
    }
    &.ant-layout-sider-collapsed {
      padding: 15px 0px 55px !important;
      .sidebar-nav-title {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 1150px) {
    .ant-layout-sider.ant-layout-sider-collapsed {
      ${({ theme }) => (!theme.rtl ? "left" : "right")}: -80px !important;
    }
  }

  .atbd-main-layout {
    margin-left: 300px;
    margin-top: 76px;
    transition: 0.3s ease;

    @media only screen and (max-width: 1150px) {
      margin-left: auto !important;
    }

    @media screen and (max-width: 1200px) and (min-width: 1150px) {
      margin-left: 80px;
    }

    .ant-layout-content {
      background: #f2f2f2;
    }
  }

  /* Mobile Actions */
  .mobile-action {
    position: absolute;
    ${({ theme }) => (theme.rtl ? "left" : "right")}: 20px;
    top: 50%;
    transform: translateY(-50%);
    display: inline-flex;
    align-items: center;
    @media only screen and (max-width: 767px) {
      ${({ theme }) => (theme.rtl ? "left" : "right")}: 0;
    }

    a {
      display: inline-flex;
      color: ${({ theme }) => theme["light-color"]};
      &.btn-search {
        margin-right: 18px;
      }
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .admin-footer {
    padding: 20px 30px 18px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 16px;
    background: #f2f2f2;
    /* box-shadow: 0 -5px 10px rgba(146,153,184, 0.05); */

    .admin-footer__copyright {
      display: inline-block;
      width: 100%;
      color: ${({ theme }) => theme["light-color"]};
      @media only screen and (max-width: 767px) {
        text-align: center;
        margin-bottom: 2rem;
      }
    }

    .admin-footer__links {
      text-align: right;

      @media only screen and (max-width: 767px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      a {
        color: ${({ theme }) => theme["light-color"]};

        &:not(:last-child) {
          margin-right: 15px;
        }

        @media only screen and (max-width: 767px) {
          &:not(:last-child),
          &:last-child {
            margin: 0.6rem 0;
          }
        }

        &:hover {
          color: ${({ theme }) => theme["primary-color"]};
        }
      }
    }
  }
`;

const SidebarFooterStyled = styled.footer`
  font-size: 12px;
  /* margin-top: 3rem; */
  color: #81868c;
  padding-left: 3rem;
  position: absolute;
  bottom: 0;

  p {
    /* margin-left: 20px; */
  }

  ul {
    list-style: none;
    text-decoration: underline;
    /* margin-left: 20px; */
    padding: 0;
  }
`;

const CurrentUserButton = styled(Button)`
  background: #f7f9fa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0;

  &:hover,
  &:active,
  &:focus {
    background: #f7f9fa;
    color: inherit;
    border: 0;
  }

  span {
    color: #000;

    :first-child {
      height: 30px;
      width: 30px;
      border-radius: 50px;
      margin-right: 10px;
      background: #e6e6e6;
    }
  }

  svg {
    margin-left: 10px;

    path {
      fill: #000;
    }
  }
`;

const UserDropdown = styled.div`
  .user-dropdwon {
    width: 130px;

    .user-dropdwon__links {
      list-style: none;
      padding-left: 0;
      margin-bottom: 0;

      a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 10px 12px;
        font-size: 14px;
        transition: 0.3s;
        color: ${({ theme }) => theme["light-color"]};

        &:hover {
          background: ${({ theme }) => theme["primary-color"]}05;
          color: ${({ theme }) => theme["primary-color"]};
          padding-left: 22px;
        }

        svg {
          width: 16px;
          transform: ${({ theme }) =>
            theme.rtl ? "rotateY(180deg)" : "rotateY(0deg)"};
          ${({ theme }) => (theme.rtl ? "margin-left" : "margin-right")}: 14px;
        }
      }
    }

    .user-dropdwon__bottomAction {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: 500;
      text-align: center;
      width: 100%;
      border-radius: 0 0 2px 2px;
      padding: 1.3rem 0;
      background: #e5e5e5;
      color: #000;

      svg {
        width: 15px;
        height: 15px;
        ${({ theme }) => (theme.rtl ? "margin-left" : "margin-right")}: 8px;
      }
    }
  }
`;

export { Div, SidebarFooterStyled, CurrentUserButton, UserDropdown };
