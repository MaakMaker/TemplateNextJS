import React, {useEffect} from "react";
import {Layout} from "antd";
import {useSelector} from "react-redux";

import Sidebar from "../Sidebar";
import HorizontalDefault from "../Topbar/HorizontalDefault";
import HorizontalDark from "../Topbar/HorizontalDark";
import InsideHeader from "../Topbar/InsideHeader";
import AboveHeader from "../Topbar/AboveHeader";
import BelowHeader from "../Topbar/BelowHeader";
import Topbar from "../Topbar";
import {footerText} from "../../../util/config";
import {
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DARK_HORIZONTAL,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_DARK
} from "../../../constants/ThemeSetting";
import NoHeaderNotification from "../Topbar/NoHeaderNotification";
import Customizer from "../Customizer";
import {useRouter} from "next/router";
import {isUnRestrictedRoute, useAuth} from "../../../util/use-auth";
import CircularProgress from "../../components/CircularProgress";

const {Content, Footer} = Layout;

const AppLayout = ({children}) => {
  const {themeType, navStyle} = useSelector(({settings}) => settings)
  const router = useRouter();
  const {user, isLoadingUser} = useAuth();

  const getContainerClass = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DARK_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_BELOW_HEADER:
        return "gx-container-wrap";
      case NAV_STYLE_ABOVE_HEADER:
        return "gx-container-wrap";
      default:
        return '';
    }
  };
  const getNavStyles = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DEFAULT_HORIZONTAL :
        return <HorizontalDefault/>;
      case NAV_STYLE_DARK_HORIZONTAL :
        return <HorizontalDark/>;
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL :
        return <InsideHeader/>;
      case NAV_STYLE_ABOVE_HEADER :
        return <AboveHeader/>;
      case NAV_STYLE_BELOW_HEADER :
        return <BelowHeader/>;
      case NAV_STYLE_FIXED :
        return <Topbar/>;
      case NAV_STYLE_DRAWER :
        return <Topbar/>;
      case NAV_STYLE_MINI_SIDEBAR :
        return <Topbar/>;
      case NAV_STYLE_NO_HEADER_MINI_SIDEBAR :
        return <NoHeaderNotification/>;
      case NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR :
        return <NoHeaderNotification/>;
      default :
        return null;
    }
  };

  useEffect(() => {
    if (!isLoadingUser) {
      if (!user && !isUnRestrictedRoute(router.pathname)) {
        router.push('/signin').then(r => r);
      } else if (user && isUnRestrictedRoute(router.pathname)) {
        router.push('/main/dashboard/crm').then(r => r);
      }
    }
  }, [user, isLoadingUser, router.pathname])

  let bodyClass = "";
  if (themeType === THEME_TYPE_DARK) {
    bodyClass = "dark-theme"
  }

  if (isLoadingUser) {
    return <div className="gx-loader-view">
      <CircularProgress/>
    </div>;
  }

  return isUnRestrictedRoute(router.pathname) ? children : (
    <Layout className={`gx-app-layout ${bodyClass}`}>
      <Sidebar/>
      <Layout>
        {getNavStyles(navStyle)}
        <Content className={`gx-layout-content ${getContainerClass(navStyle)}`}>
          <div className="gx-main-content-wrapper">
            {children}
          </div>
          <Footer>
            <div className="gx-layout-footer-content">
              {footerText}
            </div>
          </Footer>
        </Content>
      </Layout>
      <Customizer/>
    </Layout>
  );
}

export default AppLayout;

