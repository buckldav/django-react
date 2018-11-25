import PropTypes from "prop-types";
import React from "react";
import DesktopContainer from "./DesktopContainer";
import MobileContainer from "./MobileContainer";
import CustomFooter from "./Footer";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const CustomLayout = props => (
  <ResponsiveContainer>
    {props.children}
    <CustomFooter />
  </ResponsiveContainer>
);

export default CustomLayout;
