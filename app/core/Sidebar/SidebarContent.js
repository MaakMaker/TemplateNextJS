import React, {useEffect} from "react";
import {Menu} from "antd";
import Link from "next/link";

import {useRouter} from 'next/router'
import CustomScrollbars from "../../../util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../../constants/ThemeSetting";
import IntlMessages from "../../../util/IntlMessages";
import {useDispatch, useSelector} from "react-redux";
import {setPathName} from "../../../redux/actions";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const SidebarContent = () => {

  const dispatch = useDispatch();
  const router = useRouter()
  let {navStyle, themeType, pathname} = useSelector(({settings}) => settings);

  const getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  const getNavStyleSubMenuClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };

  useEffect(() => {
    dispatch(setPathName(router.pathname))
  }, [router.pathname]);

  const selectedKeys = router.pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  return (
    <>
      <SidebarLogo/>
      <div className="gx-sidebar-content">
        <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
          <UserProfile/>
          <AppsNavigation/>
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline">

            <MenuItemGroup key="main" className="gx-menu-group" title={<IntlMessages id="sidebar.main"/>}>
              <SubMenu key="dashboard" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span><i className="icon icon-dasbhoard"/>
                         <span><IntlMessages id="sidebar.dashboard"/></span></span>}>
                <Menu.Item key="main/dashboard/crypto">
                  <Link href="/main/dashboard/crypto">
                    <a><i className="icon icon-crypto"/>
                      <span><IntlMessages id="sidebar.dashboard.crypto"/></span>
                    </a></Link>
                </Menu.Item>
                <Menu.Item key="main/dashboard/crm">
                  <Link href="/main/dashboard/crm">
                    <a><i className="icon icon-crm"/>
                      <span><IntlMessages id="sidebar.dashboard.crm"/></span>
                    </a></Link>
                </Menu.Item>
                <Menu.Item key="main/dashboard/listing">
                  <Link href="/main/dashboard/listing">
                    <a><i className="icon icon-listing-dbrd"/>
                      <span><IntlMessages id="sidebar.dashboard.listing"/></span>
                    </a></Link>
                </Menu.Item>
              </SubMenu>

              <Menu.Item key="main/widgets">
                <Link href="/main/widgets"><a><i className="icon icon-widgets"/>
                  <span><IntlMessages id="sidebar.widgets"/></span></a></Link>
              </Menu.Item>

              <Menu.Item key="main/metrics">
                <Link href="/main/metrics"><a><i className="icon icon-apps"/>
                  <span><IntlMessages id="sidebar.metrics"/></span></a></Link>
              </Menu.Item>

              <Menu.Item key="main/layouts">
                <Link href="/main/layouts"><a><i className="icon icon-card"/>
                  <span> <IntlMessages id="sidebar.layouts"/></span></a></Link>
              </Menu.Item>

            </MenuItemGroup>

            <MenuItemGroup key="in-built-apps" className="gx-menu-group"
                           title={<IntlMessages id="sidebar.inBuiltApp"/>}>
              <Menu.Item key="in-built-apps/mail">
                <Link href="/in-built-apps/mail"><a><i className="icon icon-email"/><span><IntlMessages
                  id="sidebar.mailApp"/></span></a></Link>
              </Menu.Item>

              <Menu.Item key="in-built-apps/todo">
                <Link href="/in-built-apps/todo"><a><i
                  className="icon icon-check-square-o"/><span><IntlMessages
                  id="sidebar.todoApp"/></span></a></Link>
              </Menu.Item>

              <Menu.Item key="in-built-apps/contacts">
                <Link href="/in-built-apps/contacts"><a><i className="icon icon-contacts"/><span><IntlMessages
                  id="sidebar.contactsApp"/></span></a></Link>
              </Menu.Item>

              <Menu.Item key="in-built-apps/chat">
                <Link href="/in-built-apps/chat"><a><i
                  className="icon icon-chat-bubble -flex-column-reverse"/><span><IntlMessages
                  id="sidebar.chatApp"/></span></a></Link>
              </Menu.Item>
            </MenuItemGroup>

            <MenuItemGroup key="social-apps" className="gx-menu-group" title={<IntlMessages id="sidebar.social"/>}>
              <Menu.Item key="social-apps/profile">
                <Link href="/social-apps/profile">
                  <a><i className="icon icon-profile2"/>
                    <span><IntlMessages id="sidebar.extensions.profile"/></span>
                  </a></Link>
              </Menu.Item>

              <Menu.Item key="social-apps/wall">
                <Link href="/social-apps/wall">
                  <a><i className="icon icon-avatar -flex-column-reverse"/>
                    <span><IntlMessages id="sidebar.wall"/></span>
                  </a></Link>
              </Menu.Item>
            </MenuItemGroup>

            <MenuItemGroup key="components" className="gx-menu-group" title={<IntlMessages id="sidebar.components"/>}>

              <SubMenu key="general" popupClassName={getNavStyleSubMenuClass(navStyle)} title={
                <span><i className="icon icon-all-contacts"/>
                   <span><IntlMessages id="sidebar.components.general"/></span>
              </span>}>
                <Menu.Item key="components/general/button">
                  <Link href="/components/general/button">
                    <span><IntlMessages id="sidebar.general.button"/></span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="components/general/icon">
                  <Link href="/components/general/icon">
                    <span><IntlMessages id="sidebar.general.icon"/></span></Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="navigation" popupClassName={getNavStyleSubMenuClass(navStyle)} title={
                <span>
                  <i className="icon icon-navigation"/>
                  <span><IntlMessages id="sidebar.components.navigation"/></span>
              </span>}>
                <Menu.Item key="components/navigation/affix">
                  <Link href="/components/navigation/affix">
                    <span><IntlMessages
                      id="sidebar.navigation.affix"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/navigation/breadcrumb">
                  <Link href="/components/navigation/breadcrumb">
                    <span><IntlMessages
                      id="sidebar.navigation.breadcrumb"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/navigation/dropdown">
                  <Link href="/components/navigation/dropdown">
                    <span><IntlMessages
                      id="sidebar.navigation.dropdown"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/navigation/menu">
                  <Link href="/components/navigation/menu">
                    <span><IntlMessages
                      id="sidebar.navigation.menu"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/navigation/pagination">
                  <Link href="/components/navigation/pagination">
                    <span><IntlMessages
                      id="sidebar.navigation.pagination"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/navigation/steps">
                  <Link href="/components/navigation/steps">
                    <span><IntlMessages
                      id="sidebar.navigation.steps"/></span></Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="data-entry" popupClassName={getNavStyleSubMenuClass(navStyle)} title={
                <span>
                  <i className="icon icon-data-entry"/>
                  <span><IntlMessages id="sidebar.components.dataEntry"/></span>
              </span>}>
                <Menu.Item key="components/data-entry/auto-complete">
                  <Link href="/components/data-entry/auto-complete">
                    <span><IntlMessages
                      id="sidebar.dataEntry.autoComplete"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/data-entry/checkbox">
                  <Link href="/components/data-entry/checkbox">
                    <span><IntlMessages
                      id="sidebar.dataEntry.checkbox"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/data-entry/cascader">
                  <Link href="/components/data-entry/cascader">
                    <span><IntlMessages
                      id="sidebar.dataEntry.cascader"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/data-entry/date-picker">
                  <Link href="/components/data-entry/date-picker">
                    <span><IntlMessages
                      id="sidebar.dataEntry.datePicker"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/data-entry/form">
                  <Link href="/components/data-entry/form">
                    <span><IntlMessages
                      id="sidebar.dataEntry.form"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/data-entry/input-number">
                  <Link href="/components/data-entry/input-number">
                    <span><IntlMessages
                      id="sidebar.dataEntry.inputNumber"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/data-entry/input">
                  <Link href="/components/data-entry/input">
                    <span><IntlMessages
                      id="sidebar.dataEntry.input"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/data-entry/mention">
                  <Link href="/components/data-entry/mention">
                    <span><IntlMessages
                      id="sidebar.dataEntry.mention"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/data-entry/rate">
                  <Link href="/components/data-entry/rate">
                    <span><IntlMessages
                      id="sidebar.dataEntry.rate"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/data-entry/radio">
                  <Link href="/components/data-entry/radio">
                    <span><IntlMessages
                      id="sidebar.dataEntry.radio"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/data-entry/switch">
                  <Link href="/components/data-entry/switch">
                    <span><IntlMessages
                      id="sidebar.dataEntry.switch"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/data-entry/slider">
                  <Link href="/components/data-entry/slider">
                    <span><IntlMessages
                      id="sidebar.dataEntry.slider"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/data-entry/select">
                  <Link href="/components/data-entry/select">
                    <span><IntlMessages
                      id="sidebar.dataEntry.select"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/data-entry/tree">
                  <Link href="/components/data-entry/tree-select">
                    <span><IntlMessages
                      id="sidebar.dataEntry.treeSelect"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/data-entry/transfer">
                  <Link href="/components/data-entry/transfer">
                    <span><IntlMessages
                      id="sidebar.dataEntry.transfer"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/data-entry/time-picker">
                  <Link href="/components/data-entry/time-picker">
                    <span><IntlMessages
                      id="sidebar.dataEntry.timePicker"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/data-entry/upload">
                  <Link href="/components/data-entry/upload">
                    <span><IntlMessages
                      id="sidebar.dataEntry.upload"/></span></Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="data-display" popupClassName={getNavStyleSubMenuClass(navStyle)} title={
                <span><i className="icon icon-data-display"/>

                    <span><IntlMessages id="sidebar.components.dataDisplay"/></span>

              </span>}>
                <Menu.Item key="components/data-display/avatar">
                  <Link href="/components/data-display/avatar">
                    <span><IntlMessages
                      id="sidebar.dataDisplay.avatar"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/data-display/badge">
                  <Link href="/components/data-display/badge">
                    <span><IntlMessages
                      id="sidebar.dataDisplay.badge"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/data-display/collapse">
                  <Link href="/components/data-display/collapse">
                    <span><IntlMessages
                      id="sidebar.dataDisplay.collapse"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/data-display/carousel">
                  <Link href="/components/data-display/carousel">
                    <span><IntlMessages
                      id="sidebar.dataDisplay.carousel"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/data-display/card">
                  <Link href="/components/data-display/card">
                    <span><IntlMessages
                      id="sidebar.dataDisplay.card"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/data-display/calendar">
                  <Link href="/components/data-display/calendar">
                    <span><IntlMessages
                      id="sidebar.dataDisplay.calender"/></span></Link>
                </Menu.Item>
                {/*<Menu.Item key="components/data-display/list">*/}
                {/*  <Link href="/components/data-display/list">*/}
                {/*    <span><IntlMessages*/}
                {/*      id="sidebar.dataDisplay.list"/></span></a></Link>*/}
                {/*</Menu.Item>*/}
                <Menu.Item key="components/data-display/popover">
                  <Link href="/components/data-display/popover">
                    <span><IntlMessages
                      id="sidebar.dataDisplay.popover"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/data-display/tree">
                  <Link href="/components/data-display/tree">
                    <span><IntlMessages
                      id="sidebar.dataDisplay.tree"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/data-display/tooltip">
                  <Link href="/components/data-display/tooltip">
                    <span><IntlMessages
                      id="sidebar.dataDisplay.toolTips"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/data-display/timeline">
                  <Link href="/components/data-display/timeline">
                    <span><IntlMessages
                      id="sidebar.dataDisplay.timeLine"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/data-display/tag">
                  <Link href="/components/data-display/tag">
                    <span><IntlMessages
                      id="sidebar.dataDisplay.tag"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/data-display/tabs">
                  <Link href="/components/data-display/tabs">
                    <span><IntlMessages
                      id="sidebar.dataDisplay.tabs"/></span></Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="feedback" popupClassName={getNavStyleSubMenuClass(navStyle)} title={
                <span><i className="icon icon-feedback"/>
                    <span><IntlMessages id="sidebar.components.feedBack"/></span>

              </span>}>
                <Menu.Item key="components/feedback/alert">
                  <Link href="/components/feedback/alert">
                    <span><IntlMessages
                      id="sidebar.feedBack.alert"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/feedback/modal">
                  <Link href="/components/feedback/modal">
                    <span><IntlMessages
                      id="sidebar.feedBack.modal"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/feedback/message">
                  <Link href="/components/feedback/message">
                    <span><IntlMessages
                      id="sidebar.feedBack.message"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/feedback/notification">
                  <Link href="/components/feedback/notification">
                    <span><IntlMessages
                      id="sidebar.feedBack.notification"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/feedback/progress">
                  <Link href="/components/feedback/progress">
                    <span><IntlMessages
                      id="sidebar.feedBack.progress"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/feedback/popconfirm">
                  <Link href="/components/feedback/popconfirm">
                    <span><IntlMessages id="sidebar.feedBack.popConfirm"/></span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="components/feedback/spin">
                  <Link href="/components/feedback/spin">
                    <span><IntlMessages
                      id="sidebar.feedBack.spin"/></span></Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="others" popupClassName={getNavStyleSubMenuClass(navStyle)} title={
                <span><i className="icon icon-inbox"/>
                    <span><IntlMessages id="sidebar.components.other"/></span>

              </span>}>
                <Menu.Item key="components/others/anchor">
                  <Link href="/components/others/anchor">
                    <span><IntlMessages
                      id="sidebar.other.anchor"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/others/backtop">
                  <Link href="/components/others/backtop">
                    <span><IntlMessages
                      id="sidebar.other.backTop"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/others/divider">
                  <Link href="/components/others/divider">
                    <span><IntlMessages
                      id="sidebar.other.divider"/></span></Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="table" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={
                         <span><i className="icon icon-table"/>

                             <span><IntlMessages id="sidebar.dataDisplay.table"/></span>

                         </span>}>
                <Menu.Item key="components/table/basic">
                  <Link href="/components/table/basic">
                    <span><IntlMessages
                      id="sidebar.view.basicTable"/></span></Link>
                </Menu.Item>
                <Menu.Item key="components/table/data">
                  <Link href="/components/table/data">
                    <span><IntlMessages
                      id="sidebar.view.dataTable"/></span></Link>
                </Menu.Item>
              </SubMenu>

            </MenuItemGroup>

            <MenuItemGroup key="extra-components" className="gx-menu-group"
                           title={<IntlMessages id="sidebar.extraComponents"/>}>

              {/*<Menu.Item key="extra-components/stripe">
                <Link href="/extra-components/stripe">
                  <a>
                    <i className="icon icon-card"/>
                    Stripe
                  </a>
                </Link>
              </Menu.Item>*/}
              <SubMenu key="editor" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span><i className="icon icon-editor"/>
                        <span><IntlMessages id="sidebar.editors"/></span>
                       </span>}>
                <Menu.Item key="extra-components/editor/ck">
                  <Link href="/extra-components/editor/ck">
                    <a>
                      <IntlMessages id="sidebar.editors.CKEditor"/>
                    </a>
                  </Link>
                </Menu.Item>
              </SubMenu>

              <Menu.Item key="extra-components/color-picker">
                <Link href="/extra-components/color-picker">
                  <a><i className="icon icon-picker"/>

                    <span><IntlMessages id="sidebar.pickers.colorPickers"/></span>

                  </a></Link>
              </Menu.Item>

              <Menu.Item key="extra-components/dnd">
                <Link href="/extra-components/dnd">
                  <a><i className="icon icon-drag-and-drop"/>

                    <span><IntlMessages id="sidebar.extensions.dragNDrop"/></span>

                  </a></Link>
              </Menu.Item>

              <Menu.Item key="extra-components/sweet-alert">
                <Link href="/extra-components/sweet-alert">
                  <a><i className="icon icon-sweet-alert"/>

                    <span><IntlMessages id="sidebar.extensions.sweetAlert"/></span>

                  </a></Link>
              </Menu.Item>

              <Menu.Item key="extra-components/notification">
                <Link href="/extra-components/notification"><a><i className="icon icon-notification"/>
                  <span><IntlMessages
                    id="sidebar.extensions.notification"/></span></a></Link>
              </Menu.Item>

              <SubMenu key="time-line" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span><i className="icon icon-timeline"/><span><IntlMessages
                         id="sidebar.timeLine"/></span></span>}>
                <Menu.Item key="extra-components/time-line/default">
                  <Link href="/extra-components/time-line/default">
                    <span><IntlMessages
                      id="sidebar.timeLine.default"/></span></Link>
                </Menu.Item>
                <Menu.Item key="extra-components/time-line/default-with-icon">
                  <Link href="/extra-components/time-line/default-with-icon">
                    <span><IntlMessages
                      id="sidebar.timeLine.defaultwithIcons"/></span></Link>
                </Menu.Item>
                <Menu.Item key="extra-components/time-line/left-align">
                  <Link href="/extra-components/time-line/left-align">
                    <span><IntlMessages
                      id="sidebar.timeLine.leftAligned"/></span></Link>
                </Menu.Item>
              </SubMenu>

              <Menu.Item key="extra-components/shuffle">
                <Link href="/extra-components/shuffle"><a><i className="icon icon-shuffle"/>
                  <span><IntlMessages
                    id="sidebar.extensions.shuffle"/></span></a></Link>
              </Menu.Item>

            </MenuItemGroup>

            <MenuItemGroup key="extensions" className="gx-menu-group" title={<IntlMessages id="sidebar.extensions"/>}>

              <SubMenu key="map" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span><i className="icon icon-extensions"/>
                        <span><IntlMessages id="sidebar.map"/></span></span>}>
                <SubMenu key="google" popupClassName={getNavStyleSubMenuClass(navStyle)}
                         title={
                           <span>
                           <i className="icon icon-map-google"/>
                           <span><IntlMessages id="sidebar.google.map"/></span></span>}>

                  <Menu.Item key="extensions/map/google/simple">
                    <Link href="/extensions/map/google/simple">
                      <span><IntlMessages
                        id="sidebar.map.simple"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/google/styled">
                    <Link href="/extensions/map/google/styled">
                      <span><IntlMessages
                        id="sidebar.map.styled"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/google/geo-location">
                    <Link href="/extensions/map/google/geo-location">
                      <span><IntlMessages
                        id="sidebar.map.geoLocation"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/google/directions">
                    <Link href="/extensions/map/google/directions">
                      <span><IntlMessages
                        id="sidebar.map.mapDirection"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/google/overlay">
                    <Link href="/extensions/map/google/overlay">
                      <span><IntlMessages
                        id="sidebar.map.overlay"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/google/kml">
                    <Link href="/extensions/map/google/kml">
                      <span><IntlMessages
                        id="sidebar.map.kmLayer"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/google/popup-info">
                    <Link href="/extensions/map/google/popup-info">
                      <span><IntlMessages
                        id="sidebar.map.popupInfo"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/google/traffic">
                    <Link href="/extensions/map/google/traffic">
                      <span><IntlMessages
                        id="sidebar.map.trafficLayer"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/google/street-view">
                    <Link href="/extensions/map/google/street-view">
                      <span><IntlMessages
                        id="sidebar.map.streetView"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/google/event">
                    <Link href="/extensions/map/google/event">
                      <span><IntlMessages
                        id="sidebar.map.eventListener"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/google/drawing">
                    <Link href="/extensions/map/google/drawing">
                      <span><IntlMessages
                        id="sidebar.map.mapDrawing"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/google/clustering">
                    <Link href="/extensions/map/google/clustering">
                      <span><IntlMessages
                        id="sidebar.map.mapClustering"/></span></Link>
                  </Menu.Item>
                </SubMenu>

                <SubMenu key="ammap" popupClassName={getNavStyleSubMenuClass(navStyle)}
                         title={
                           <span><i className="icon icon-amchart"/>
                           <span><IntlMessages id="sidebar.ammap"/></span></span>}>

                  <Menu.Item key="extensions/map/ammap/animations-lines">
                    <Link href="/extensions/map/ammap/animations-lines">
                      <span><IntlMessages
                        id="sidebar.map.animations.lines"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/ammap/curved-lines">
                    <Link href="/extensions/map/ammap/curved-lines">
                      <span><IntlMessages
                        id="sidebar.map.curved.lines"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/ammap/zooming-countries">
                    <Link href="/extensions/map/ammap/zooming-countries">
                      <span><IntlMessages
                        id="sidebar.map.zooming.countries"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/ammap/patterns">
                    <Link href="/extensions/map/ammap/patterns">
                      <span><IntlMessages
                        id="sidebar.map.patterns"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/ammap/capitals-map">
                    <Link href="/extensions/map/ammap/capitals-map">
                      <span><IntlMessages
                        id="sidebar.map.capitals.map"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/ammap/map-markers">
                    <Link href="/extensions/map/ammap/map-markers">
                     <span><IntlMessages
                       id="sidebar.map.markers"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/ammap/flight-routes">
                    <Link href="/extensions/map/ammap/flight-routes">
                      <span><IntlMessages
                        id="sidebar.map.flight.routes"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/ammap/choropleth">
                    <Link href="/extensions/map/ammap/choropleth">
                      <span><IntlMessages
                        id="sidebar.map.choropleth"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/ammap/grouped-countries">
                    <Link href="/extensions/map/ammap/grouped-countries">
                      <span><IntlMessages
                        id="sidebar.map.grouped.countries"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/ammap/bubbles">
                    <Link href="/extensions/map/ammap/bubbles">
                      <span><IntlMessages
                        id="sidebar.map.bubbles"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/ammap/drill-down">
                    <Link href="/extensions/map/ammap/drill-down">
                      <span><IntlMessages
                        id="sidebar.map.drill.down"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/ammap/multiple-areas">
                    <Link href="/extensions/map/ammap/multiple-areas">
                      <span><IntlMessages
                        id="sidebar.map.multiple.areas"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/map/ammap/weather">
                    <Link href="/extensions/map/ammap/weather">
                      <span><IntlMessages
                        id="sidebar.map.weather"/></span></Link>
                  </Menu.Item>

                </SubMenu>
              </SubMenu>

              <SubMenu key="chart" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span><i className="icon icon-chart"/>
                        <span><IntlMessages id="sidebar.chart"/></span></span>}>

                <SubMenu key="recharts" popupClassName={getNavStyleSubMenuClass(navStyle)} title={
                  <span><i className="icon icon-chart-area-new"/>
                    <span><IntlMessages id="sidebar.components.rechart"/></span>
              </span>}>

                  <Menu.Item key="extensions/chart/recharts/area">
                    <Link href="/extensions/chart/recharts/area">
                         <span><IntlMessages
                           id="sidebar.chart.area"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/chart/recharts/bar">
                    <Link href="/extensions/chart/recharts/bar">
                         <span><IntlMessages
                           id="sidebar.chart.bar"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/chart/recharts/composed">
                    <Link href="/extensions/chart/recharts/composed">
                         <span><IntlMessages
                           id="sidebar.chart.composed"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/chart/recharts/line">
                    <Link href="/extensions/chart/recharts/line">
                         <span><IntlMessages
                           id="sidebar.chart.line"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/chart/recharts/pie">
                    <Link href="/extensions/chart/recharts/pie">
                         <span><IntlMessages
                           id="sidebar.chart.pie"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/chart/recharts/radar">
                    <Link href="/extensions/chart/recharts/radar">
                         <span><IntlMessages
                           id="sidebar.chart.radar"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/chart/recharts/radial">
                    <Link href="/extensions/chart/recharts/radial">
                         <span><IntlMessages
                           id="sidebar.chart.radial"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/chart/recharts/scatter">
                    <Link href="/extensions/chart/recharts/scatter">
                         <span><IntlMessages
                           id="sidebar.chart.scatter"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/chart/recharts/treemap">
                    <Link href="/extensions/chart/recharts/treemap">
                         <span><IntlMessages
                           id="sidebar.chart.tree"/></span></Link>
                  </Menu.Item>
                </SubMenu>

                <SubMenu key="amchart" popupClassName={getNavStyleSubMenuClass(navStyle)} title={
                  <span><i className="icon icon-amchart"/>
                <span><IntlMessages id="sidebar.components.amchart"/></span>
              </span>}>
                  <Menu.Item key="extensions/chart/amchart/area">
                    <Link href="/extensions/chart/amchart/area">
                         <span><IntlMessages
                           id="sidebar.chart.area"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/chart/amchart/bar">
                    <Link href="/extensions/chart/amchart/bar">
                         <span><IntlMessages
                           id="sidebar.chart.bar"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/chart/amchart/line">
                    <Link href="/extensions/chart/amchart/line">
                         <span><IntlMessages
                           id="sidebar.chart.line"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/chart/amchart/pie">
                    <Link href="/extensions/chart/amchart/pie">
                         <span><IntlMessages
                           id="sidebar.chart.pie"/></span></Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/chart/amchart/composed">
                    <Link href="/extensions/chart/amchart/composed">
                         <span><IntlMessages
                           id="sidebar.chart.composed"/></span></Link>
                  </Menu.Item>
                </SubMenu>

              </SubMenu>

            </MenuItemGroup>

            <MenuItemGroup key="custom-views" className="gx-menu-group"
                           title={<IntlMessages id="sidebar.customViews"/>}>
              <SubMenu key="user-auth" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span><i className="icon icon-auth-screen"/><span><IntlMessages
                         id="app.userAuth"/></span></span>}>
                <Menu.Item key="custom-views/user-auth/sign-in">
                  <Link href="/custom-views/user-auth/sign-in">
                         <span><IntlMessages
                           id="app.userAuth.signIn"/></span></Link>
                </Menu.Item>
                <Menu.Item key="custom-views/user-auth/forgot-password">
                  <Link href="/custom-views/user-auth/forgot-password">
                         <span><IntlMessages
                           id="app.userAuth.forgotPassword"/></span></Link>
                </Menu.Item>
                <Menu.Item key="custom-views/user-auth/sign-up">
                  <Link href="/custom-views/user-auth/sign-up">
                         <span><IntlMessages
                           id="app.userAuth.signUp"/></span></Link>
                </Menu.Item>
                <Menu.Item key="custom-views/user-auth/lock-screen">
                  <Link href="/custom-views/user-auth/lock-screen">
                         <span><IntlMessages
                           id="app.userAuth.lockScreen"/></span></Link>
                </Menu.Item>
                <Menu.Item key="custom-views/user-auth/reset-password">
                  <Link href="/custom-views/user-auth/reset-password">
                         <span><IntlMessages
                           id="app.userAuth.resetPassword"/></span></Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="list-type" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span><i className="icon icon-all-contacts"/><span><IntlMessages
                         id="sidebar.listType"/></span></span>}>
                <Menu.Item key="custom-views/list-type/simple-list">
                  <Link href="/custom-views/list-type/simple-list">
                         <span><IntlMessages
                           id="sidebar.listType.plainListView"/></span></Link>
                </Menu.Item>
                <Menu.Item key="custom-views/list-type/strip-list">
                  <Link href="/custom-views/list-type/strip-list">
                         <span><IntlMessages
                           id="sidebar.listType.withDivider"/></span></Link>
                </Menu.Item>
                <Menu.Item key="custom-views/list-type/card-list">
                  <Link href="/custom-views/list-type/card-list">
                         <span><IntlMessages
                           id="sidebar.listType.cardListView"/></span></Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="eCommerce" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span><i className="icon icon-shopping-cart"/><span><IntlMessages
                         id="sidebar.eCommerce"/></span></span>}>
                <Menu.Item key="custom-views/eCommerce/product-grid">
                  <Link href="/custom-views/eCommerce/product-grid">
                         <span><IntlMessages
                           id="sidebar.eCommerce.productGrid"/></span></Link>
                </Menu.Item>
                <Menu.Item key="custom-views/eCommerce/product-list">
                  <Link href="/custom-views/eCommerce/product-list">
                         <span><IntlMessages
                           id="sidebar.eCommerce.productList"/></span></Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="error-pages" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span><i className="icon icon-error"/><span><IntlMessages
                         id="sidebar.extraPages"/></span></span>}>

                <Menu.Item key="custom-views/error-pages/error-404">
                  <Link href="/custom-views/error-pages/error-404">
                         <span><IntlMessages
                           id="sidebar.extraPages.404"/></span></Link>
                </Menu.Item>
                <Menu.Item key="custom-views/error-pages/error-500">
                  <Link href="/custom-views/error-pages/error-500">
                         <span><IntlMessages
                           id="sidebar.extraPages.500"/></span></Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="extras" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span><i className="icon icon-ellipse-h"/><span><IntlMessages
                         id="sidebar.listType.extras"/></span></span>}>
                <Menu.Item key="custom-views/extras/pricing-table">
                  <Link href="/custom-views/extras/pricing-table">
                         <span><IntlMessages
                           id="sidebar.extraElements.pricingTable"/></span></Link>
                </Menu.Item>

                <Menu.Item key="custom-views/extras/callouts">
                  <Link href="/custom-views/extras/callouts">
                         <span><IntlMessages
                           id="sidebar.extraElements.callouts"/></span></Link>
                </Menu.Item>
                <Menu.Item key="custom-views/extras/testimonials">
                  <Link href="/custom-views/extras/testimonials">
                         <span><IntlMessages
                           id="sidebar.extraElements.testimonials"/></span></Link>
                </Menu.Item>
              </SubMenu>

            </MenuItemGroup>

          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;

