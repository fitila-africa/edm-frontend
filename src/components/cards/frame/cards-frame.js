import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { CardFrame } from "./style";
import Heading from "../../heading/heading";
import { Dropdown } from "../../dropdown/dropdown";
import { ReactComponent as BurgerMenu } from "../../../static/svg/burgermenu.svg";

const Cards = props => {
  const {
    title,
    bgColor,
    children,
    more,
    moreText,
    size,
    headless,
    caption,
    isbutton,
    bodyStyle,
    headStyle,
    style,
    border,
    loading,
    bodypadding,
  } = props;
  return (
    <>
      {!headless ? (
        <CardFrame
          size={size}
          title={title}
          bodyStyle={bodyStyle && bodyStyle}
          headStyle={headStyle && headStyle}
          bordered={border}
          loading={loading}
          bodypadding={bodypadding && bodypadding}
          bg
          bgColor={bgColor}
          extra={
            <>
              {more && (
                <Dropdown content={more} placement="bottomCenter">
                  <NavLink to="#">
                    {!moreText ? <BurgerMenu /> : "More"}
                  </NavLink>
                </Dropdown>
              )}

              {isbutton && isbutton}
            </>
          }
          style={{ ...style, width: "100%" }}
        >
          {children}
        </CardFrame>
      ) : (
        <CardFrame
          bodypadding={bodypadding && bodypadding}
          bodyStyle={bodyStyle && bodyStyle}
          size={size}
          style={{ ...style, width: "100%" }}
          bordered={border}
          loading={loading}
          bgColor={bgColor}
        >
          {title && <Heading as="h4">{title}</Heading>}
          {caption && <p>{caption}</p>}
          {children}
        </CardFrame>
      )}
    </>
  );
};

Cards.defaultProps = {
  border: false,
};

Cards.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
  size: PropTypes.string,
  more: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
  style: PropTypes.object,
  bodyStyle: PropTypes.object,
  headStyle: PropTypes.object,
  isbutton: PropTypes.node,
  headless: PropTypes.bool,
  loading: PropTypes.bool,
  border: PropTypes.bool,
  bgColor: PropTypes.string,
  caption: PropTypes.string,
  bodypadding: PropTypes.string,
  moreText: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.node,
  ]),
};

export { Cards };
