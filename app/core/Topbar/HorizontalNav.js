import React from "react";
import {useSelector} from "react-redux";
import {Menu} from "antd";
import IntlMessages from "../../../util/IntlMessages";
import {
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL
} from "../../../constants/ThemeSetting";
import AppLink from "../../components/AppLink";


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const HorizontalNav = () => {

  const navStyle = useSelector(({settings}) => settings.navStyle);
  const pathname = useSelector(({settings}) => settings.pathname);

  const getNavStyleSubMenuClass = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return "gx-menu-horizontal gx-submenu-popup-curve";
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-inside-submenu-popup-curve";
      case NAV_STYLE_BELOW_HEADER:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-below-submenu-popup-curve";
      case NAV_STYLE_ABOVE_HEADER:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-above-submenu-popup-curve";
      default:
        return "gx-menu-horizontal";
    }
  };

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  return (

    <Menu
      defaultOpenKeys={[defaultOpenKeys]}
      selectedKeys={[selectedKeys]}
      mode="horizontal">
      <SubMenu popupClassName={getNavStyleSubMenuClass(navStyle)} key="main"
               title={<IntlMessages id="sidebar.main"/>}>

        <SubMenu popupClassName="gx-menu-horizontal" key="dashboard"
                 title={<span> <i className="icon icon-dasbhoard"/>
                         <IntlMessages id="sidebar.dashboard"/></span>}>
          <Menu.Item key="main/dashboard/crypto">
            <AppLink href="/main/dashboard/crypto">
              <i className="icon icon-crypto"/>
              <IntlMessages id="sidebar.dashboard.crypto"/>
            </AppLink>
          </Menu.Item>
          <Menu.Item key="main/dashboard/crm">
            <AppLink href="/main/dashboard/crm">
              <i className="icon icon-crm"/>
              <IntlMessages id="sidebar.dashboard.crm"/>
            </AppLink>
          </Menu.Item>
          <Menu.Item key="main/dashboard/listing">
            <AppLink href="/main/dashboard/listing">
              <i className="icon icon-listing-dbrd"/>
              <IntlMessages id="sidebar.dashboard.listing"/>
            </AppLink>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="main/widgets">
          <AppLink href="/main/widgets"><i className="icon icon-widgets"/>
            <IntlMessages id="sidebar.widgets"/></AppLink>
        </Menu.Item>

        <Menu.Item key="main/metrics">
          <AppLink href="/main/metrics"><i className="icon icon-apps"/>
            <IntlMessages id="sidebar.metrics"/></AppLink>
        </Menu.Item>

        <Menu.Item key="main/algolia">
          <AppLink href="/main/algolia"><i className="icon icon-shopping-cart "/>
            <IntlMessages id="sidebar.algolia"/></AppLink>
        </Menu.Item>

      </SubMenu>

      <SubMenu popupClassName={getNavStyleSubMenuClass(navStyle)} key="in-built-apps"
               title={<IntlMessages id="sidebar.inBuiltApp"/>}>

        <Menu.Item key="in-built-apps/mail">
          <AppLink href="/in-built-apps/mail"><i className="icon icon-email"/><IntlMessages
            id="sidebar.mailApp"/></AppLink>
        </Menu.Item>

        <Menu.Item key="in-built-apps/todo">
          <AppLink href="/in-built-apps/todo"><i
            className="icon icon-check-square-o"/><IntlMessages
            id="sidebar.todoApp"/></AppLink>
        </Menu.Item>

        <Menu.Item key="in-built-apps/contacts">
          <AppLink href="/in-built-apps/contacts"><i className="icon icon-contacts"/><IntlMessages
            id="sidebar.contactsApp"/></AppLink>
        </Menu.Item>

        <Menu.Item key="in-built-apps/chat">
          <AppLink href="/in-built-apps/chat"><i
            className="icon icon-chat-bubble -flex-column-reverse"/><IntlMessages
            id="sidebar.chatApp"/></AppLink>
        </Menu.Item>

        <Menu.Item key="social-apps/profile">
          <AppLink href="/social-apps/profile">
            <i className="icon icon-profile2"/>
            <IntlMessages id="sidebar.extensions.profile"/>
          </AppLink>
        </Menu.Item>

        <Menu.Item key="social-apps/wall">
          <AppLink href="/social-apps/wall">
            <i className="icon icon-avatar -flex-column-reverse"/>
            <IntlMessages id="sidebar.wall"/>
          </AppLink>
        </Menu.Item>

        <Menu.Item key="in-built-apps/notes">
          <AppLink href="/in-built-apps/notes">
            <i className="icon icon-copy"/>
            <IntlMessages id="sidebar.notes"/>
          </AppLink>
        </Menu.Item>

        <Menu.Item key="in-built-apps/firebase-crud">
          <AppLink href="/in-built-apps/firebase-crud">
            <i className="icon icon-icon"/>
            <IntlMessages id="sidebar.crud"/>
          </AppLink>
        </Menu.Item>

      </SubMenu>

      <SubMenu popupClassName={getNavStyleSubMenuClass(navStyle)} key="components"
               title={<IntlMessages id="sidebar.components"/>}>

        <SubMenu popupClassName="gx-menu-horizontal" key="general" title={
          <span>
                  <i className="icon icon-all-contacts"/>
                   <IntlMessages id="sidebar.components.general"/>
              </span>}>
          <Menu.Item key="components/general/button">
            <AppLink href="/components/general/button">
              <IntlMessages id="sidebar.general.button"/>
            </AppLink>
          </Menu.Item>
          <Menu.Item key="components/general/icon">
            <AppLink href="/components/general/icon">
              <IntlMessages id="sidebar.general.icon"/></AppLink>
          </Menu.Item>
        </SubMenu>

        <SubMenu popupClassName="gx-menu-horizontal" key="navigation" title={
          <span>
                  <i className="icon icon-navigation"/>
                  <IntlMessages id="sidebar.components.navigation"/>
              </span>}>
          <Menu.Item key="components/navigation/affix">
            <AppLink href="/components/navigation/affix">
              <IntlMessages
                id="sidebar.navigation.affix"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/navigation/breadcrumb">
            <AppLink href="/components/navigation/breadcrumb">
              <IntlMessages
                id="sidebar.navigation.breadcrumb"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/navigation/dropdown">
            <AppLink href="/components/navigation/dropdown">
              <IntlMessages
                id="sidebar.navigation.dropdown"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/navigation/menu">
            <AppLink href="/components/navigation/menu">
              <IntlMessages
                id="sidebar.navigation.menu"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/navigation/pagination">
            <AppLink href="/components/navigation/pagination">
              <IntlMessages
                id="sidebar.navigation.pagination"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/navigation/steps">
            <AppLink href="/components/navigation/steps">
              <IntlMessages
                id="sidebar.navigation.steps"/></AppLink>
          </Menu.Item>
        </SubMenu>

        <SubMenu popupClassName="gx-menu-horizontal" key="dataEntry" title={
          <span>
                  <i className="icon icon-data-entry"/>
                  <IntlMessages id="sidebar.components.dataEntry"/>
              </span>}>
          <Menu.Item key="components/dataEntry/autoComplete">
            <AppLink href="/components/dataEntry/autoComplete">
              <IntlMessages
                id="sidebar.dataEntry.autoComplete"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/checkbox">
            <AppLink href="/components/dataEntry/checkbox">
              <IntlMessages
                id="sidebar.dataEntry.checkbox"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/cascader">
            <AppLink href="/components/dataEntry/cascader">
              <IntlMessages
                id="sidebar.dataEntry.cascader"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/datePicker">
            <AppLink href="/components/dataEntry/datePicker">
              <IntlMessages
                id="sidebar.dataEntry.datePicker"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/form">
            <AppLink href="/components/dataEntry/form">
              <IntlMessages
                id="sidebar.dataEntry.form"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/inputNumber">
            <AppLink href="/components/dataEntry/inputNumber">
              <IntlMessages
                id="sidebar.dataEntry.inputNumber"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/input">
            <AppLink href="/components/dataEntry/input">
              <IntlMessages
                id="sidebar.dataEntry.input"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/mention">
            <AppLink href="/components/dataEntry/mention">
              <IntlMessages
                id="sidebar.dataEntry.mention"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/rate">
            <AppLink href="/components/dataEntry/rate">
              <IntlMessages
                id="sidebar.dataEntry.rate"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/radio">
            <AppLink href="/components/dataEntry/radio">
              <IntlMessages
                id="sidebar.dataEntry.radio"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/switch">
            <AppLink href="/components/dataEntry/switch">
              <IntlMessages
                id="sidebar.dataEntry.switch"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/slider">
            <AppLink href="/components/dataEntry/slider">
              <IntlMessages
                id="sidebar.dataEntry.slider"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/select">
            <AppLink href="/components/dataEntry/select">
              <IntlMessages
                id="sidebar.dataEntry.select"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/treeSelect">
            <AppLink href="/components/dataEntry/treeSelect">
              <IntlMessages
                id="sidebar.dataEntry.treeSelect"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/transfer">
            <AppLink href="/components/dataEntry/transfer">
              <IntlMessages
                id="sidebar.dataEntry.transfer"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/timePicker">
            <AppLink href="/components/dataEntry/timePicker">
              <IntlMessages
                id="sidebar.dataEntry.timePicker"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/upload">
            <AppLink href="/components/dataEntry/upload">
              <IntlMessages
                id="sidebar.dataEntry.upload"/></AppLink>
          </Menu.Item>
        </SubMenu>

        <SubMenu popupClassName="gx-menu-horizontal" key="dataDisplay" title={
          <span>
                  <i className="icon icon-data-display"/>

                    <IntlMessages id="sidebar.components.dataDisplay"/>

              </span>}>
          <Menu.Item key="components/dataDisplay/avatar">
            <AppLink href="/components/dataDisplay/avatar">
              <IntlMessages
                id="sidebar.dataDisplay.avatar"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/dataDisplay/badge">
            <AppLink href="/components/dataDisplay/badge">
              <IntlMessages
                id="sidebar.dataDisplay.badge"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/dataDisplay/collapse">
            <AppLink href="/components/dataDisplay/collapse">
              <IntlMessages
                id="sidebar.dataDisplay.collapse"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/dataDisplay/carousel">
            <AppLink href="/components/dataDisplay/carousel">
              <IntlMessages
                id="sidebar.dataDisplay.carousel"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/dataDisplay/card">
            <AppLink href="/components/dataDisplay/card">
              <IntlMessages
                id="sidebar.dataDisplay.card"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/dataDisplay/calendar">
            <AppLink href="/components/dataDisplay/calendar">
              <IntlMessages
                id="sidebar.dataDisplay.calender"/></AppLink>
          </Menu.Item>
          {/*<Menu.Item key="components/dataDisplay/list">*/}
          {/*  <AppLink href="/components/dataDisplay/list">*/}
          {/*    <IntlMessages*/}
          {/*      id="sidebar.dataDisplay.list"/></AppLink>*/}
          {/*</Menu.Item>*/}
          <Menu.Item key="components/dataDisplay/popover">
            <AppLink href="/components/dataDisplay/popover">
              <IntlMessages
                id="sidebar.dataDisplay.popover"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/dataDisplay/tree">
            <AppLink href="/components/dataDisplay/tree">
              <IntlMessages
                id="sidebar.dataDisplay.tree"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/dataDisplay/tooltip">
            <AppLink href="/components/dataDisplay/tooltip">
              <IntlMessages
                id="sidebar.dataDisplay.toolTips"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/dataDisplay/timeline">
            <AppLink href="/components/dataDisplay/timeline">
              <IntlMessages
                id="sidebar.dataDisplay.timeLine"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/dataDisplay/tag">
            <AppLink href="/components/dataDisplay/tag">
              <IntlMessages
                id="sidebar.dataDisplay.tag"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/dataDisplay/tabs">
            <AppLink href="/components/dataDisplay/tabs">
              <IntlMessages
                id="sidebar.dataDisplay.tabs"/></AppLink>
          </Menu.Item>
        </SubMenu>

        <SubMenu popupClassName="gx-menu-horizontal" key="feedBack" title={
          <span>
                  <i className="icon icon-feedback"/>
                    <IntlMessages id="sidebar.components.feedBack"/>

              </span>}>
          <Menu.Item key="components/feedBack/alert">
            <AppLink href="/components/feedBack/alert">
              <IntlMessages
                id="sidebar.feedBack.alert"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/feedBack/modal">
            <AppLink href="/components/feedBack/modal">
              <IntlMessages
                id="sidebar.feedBack.modal"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/feedBack/message">
            <AppLink href="/components/feedBack/message">
              <IntlMessages
                id="sidebar.feedBack.message"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/feedBack/notification">
            <AppLink href="/components/feedBack/notification">
              <IntlMessages
                id="sidebar.feedBack.notification"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/feedBack/progress">
            <AppLink href="/components/feedBack/progress">
              <IntlMessages
                id="sidebar.feedBack.progress"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/feedBack/popconfirm">
            <AppLink href="/components/feedBack/popconfirm">
              <IntlMessages id="sidebar.feedBack.popConfirm"/>
            </AppLink>
          </Menu.Item>
          <Menu.Item key="components/feedBack/spin">
            <AppLink href="/components/feedBack/spin">
              <IntlMessages
                id="sidebar.feedBack.spin"/></AppLink>
          </Menu.Item>
        </SubMenu>

        <SubMenu popupClassName="gx-menu-horizontal" key="others" title={
          <span>
                  <i className="icon icon-inbox"/>
                    <IntlMessages id="sidebar.components.other"/>

              </span>}>
          <Menu.Item key="components/others/anchor">
            <AppLink href="/components/others/anchor">
              <IntlMessages
                id="sidebar.other.anchor"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/others/backtop">
            <AppLink href="/components/others/backtop">
              <IntlMessages
                id="sidebar.other.backTop"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/others/divider">
            <AppLink href="/components/others/divider">
              <IntlMessages
                id="sidebar.other.divider"/></AppLink>
          </Menu.Item>
        </SubMenu>

        <SubMenu popupClassName="gx-menu-horizontal" key="table"
                 title={
                   <span>
                           <i className="icon icon-table"/>

                             <IntlMessages id="sidebar.dataDisplay.table"/>

                         </span>}>
          <Menu.Item key="components/table/basic">
            <AppLink href="/components/table/basic">
              <IntlMessages
                id="sidebar.view.basicTable"/></AppLink>
          </Menu.Item>
          <Menu.Item key="components/table/data">
            <AppLink href="/components/table/data">
              <IntlMessages
                id="sidebar.view.dataTable"/></AppLink>
          </Menu.Item>
        </SubMenu>

      </SubMenu>

      <SubMenu popupClassName={getNavStyleSubMenuClass(navStyle)} key="extraComponents"
               title={<IntlMessages id="sidebar.extraComponents"/>}>

        <SubMenu popupClassName="gx-menu-horizontal" key="editor"
                 title={<span>
                         <i className="icon icon-editor"/>
                        <IntlMessages id="sidebar.editors"/>
                       </span>}>
          <Menu.Item key="extra-components/editor/ck">
            <AppLink href="/extra-components/editor/ck">
              <IntlMessages
                id="sidebar.editors.CKEditor"/></AppLink>
          </Menu.Item>
          <Menu.Item key="extra-components/editor/wysiswyg">
            <AppLink href="/extra-components/editor/wysiswyg">
              <IntlMessages
                id="sidebar.editors.WYSISWYGEditor"/></AppLink>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="extra-components/color-picker">
          <AppLink href="/extra-components/color-picker">
            <i className="icon icon-picker"/>

            <IntlMessages id="sidebar.pickers.colorPickers"/>

          </AppLink>
        </Menu.Item>

        <Menu.Item key="extra-components/dnd">
          <AppLink href="/extra-components/dnd">
            <i className="icon icon-drag-and-drop"/>

            <IntlMessages id="sidebar.extensions.dragNDrop"/>

          </AppLink>
        </Menu.Item>

        <Menu.Item key="extra-components/sweet-alert">
          <AppLink href="/extra-components/sweet-alert">
            <i className="icon icon-sweet-alert"/>
            <IntlMessages id="sidebar.extensions.sweetAlert"/>
          </AppLink>
        </Menu.Item>

        <Menu.Item key="extra-components/notification">
          <AppLink href="/extra-components/notification"><i className="icon icon-notification"/>
            <IntlMessages
              id="sidebar.extensions.notification"/></AppLink>
        </Menu.Item>

        <SubMenu popupClassName="gx-menu-horizontal" key="time-line"
                 title={<span><i className="icon icon-timeline"/><IntlMessages
                   id="sidebar.timeLine"/></span>}>
          <Menu.Item key="extra-components/time-line/default">
            <AppLink href="/extra-components/time-line/default">
              <IntlMessages
                id="sidebar.timeLine.default"/></AppLink>
          </Menu.Item>
          <Menu.Item key="extra-components/time-line/default-with-icon">
            <AppLink href="/extra-components/time-line/default-with-icon">
              <IntlMessages
                id="sidebar.timeLine.defaultwithIcons"/></AppLink>
          </Menu.Item>
          <Menu.Item key="extra-components/time-line/left-align">
            <AppLink href="/extra-components/time-line/left-align">
              <IntlMessages
                id="sidebar.timeLine.leftAligned"/></AppLink>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="extra-components/shuffle">
          <AppLink href="/extra-components/shuffle"><i className="icon icon-shuffle"/>
            <IntlMessages
              id="sidebar.extensions.shuffle"/></AppLink>
        </Menu.Item>

      </SubMenu>

      <SubMenu popupClassName={getNavStyleSubMenuClass(navStyle)} key="extensions"
               title={<IntlMessages id="sidebar.extensions"/>}>

        <MenuItemGroup key="map"
                       title={<IntlMessages id="sidebar.map"/>}>

          <SubMenu popupClassName="gx-menu-horizontal" key="google"
                   title={
                     <span>
                           <i className="icon icon-map-google"/>
                           <IntlMessages id="sidebar.google.map"/></span>}>

            <Menu.Item key="extensions/map/google/simple">
              <AppLink href="/extensions/map/google/simple">
                <IntlMessages
                  id="sidebar.map.simple"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/map/google/styled">
              <AppLink href="/extensions/map/google/styled">
                <IntlMessages
                  id="sidebar.map.styled"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/map/google/geo-location">
              <AppLink href="/extensions/map/google/geo-location">
                <IntlMessages
                  id="sidebar.map.geoLocation"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/map/google/directions">
              <AppLink href="/extensions/map/google/directions">
                <IntlMessages
                  id="sidebar.map.mapDirection"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/map/google/overlay">
              <AppLink href="/extensions/map/google/overlay">
                <IntlMessages
                  id="sidebar.map.overlay"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/map/google/kml">
              <AppLink href="/extensions/map/google/kml">
                <IntlMessages
                  id="sidebar.map.kmLayer"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/map/google/popup-info">
              <AppLink href="/extensions/map/google/popup-info">
                <IntlMessages
                  id="sidebar.map.popupInfo"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/map/google/traffic">
              <AppLink href="/extensions/map/google/traffic">
                <IntlMessages
                  id="sidebar.map.trafficLayer"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/map/google/street-view">
              <AppLink href="/extensions/map/google/street-view">
                <IntlMessages
                  id="sidebar.map.streetView"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/map/google/event">
              <AppLink href="/extensions/map/google/event">
                <IntlMessages
                  id="sidebar.map.eventListener"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/map/google/drawing">
              <AppLink href="/extensions/map/google/drawing">
                <IntlMessages
                  id="sidebar.map.mapDrawing"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/map/google/clustering">
              <AppLink href="/extensions/map/google/clustering">
                <IntlMessages
                  id="sidebar.map.mapClustering"/></AppLink>
            </Menu.Item>
          </SubMenu>

          <SubMenu popupClassName="gx-menu-horizontal" key="ammap"
                   title={
                     <span><i className="icon icon-amchart"/>
                           <IntlMessages id="sidebar.ammap"/></span>}>

            <Menu.Item key="extensions/map/ammap/animations-lines">
              <AppLink href="/extensions/map/ammap/animations-lines">
                <IntlMessages
                  id="sidebar.map.animations.lines"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/map/ammap/curved-lines">
              <AppLink href="/extensions/map/ammap/curved-lines">
                <IntlMessages
                  id="sidebar.map.curved.lines"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/map/ammap/zooming-countries">
              <AppLink href="/extensions/map/ammap/zooming-countries">
                <IntlMessages
                  id="sidebar.map.zooming.countries"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/map/ammap/patterns">
              <AppLink href="/extensions/map/ammap/patterns">
                <IntlMessages
                  id="sidebar.map.patterns"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/map/ammap/capitals-map">
              <AppLink href="/extensions/map/ammap/capitals-map">
                <IntlMessages
                  id="sidebar.map.capitals.map"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/map/ammap/map-markers">
              <AppLink href="/extensions/map/ammap/map-markers">
                <IntlMessages
                  id="sidebar.map.markers"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/map/ammap/flight-routes">
              <AppLink href="/extensions/map/ammap/flight-routes">
                <IntlMessages
                  id="sidebar.map.flight.routes"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/map/ammap/choropleth">
              <AppLink href="/extensions/map/ammap/choropleth">
                <IntlMessages
                  id="sidebar.map.choropleth"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/map/ammap/grouped-countries">
              <AppLink href="/extensions/map/ammap/grouped-countries">
                <IntlMessages
                  id="sidebar.map.grouped.countries"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/map/ammap/bubbles">
              <AppLink href="/extensions/map/ammap/bubbles">
                <IntlMessages
                  id="sidebar.map.bubbles"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/map/ammap/drill-down">
              <AppLink href="/extensions/map/ammap/drill-down">
                <IntlMessages
                  id="sidebar.map.drill.down"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/map/ammap/multiple-areas">
              <AppLink href="/extensions/map/ammap/multiple-areas">
                <IntlMessages
                  id="sidebar.map.multiple.areas"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/map/ammap/weather">
              <AppLink href="/extensions/map/ammap/weather">
                <IntlMessages
                  id="sidebar.map.weather"/></AppLink>
            </Menu.Item>

          </SubMenu>

        </MenuItemGroup>

        <MenuItemGroup key="chart"
                       title={<span>
                               <IntlMessages id="sidebar.chart"/></span>}>
          <SubMenu popupClassName="gx-menu-horizontal" key="rechart" title={
            <span><i className="icon icon-chart-area-new"/>
                    <IntlMessages id="sidebar.components.rechart"/>
              </span>}>

            <Menu.Item key="extensions/chart/recharts/area">
              <AppLink href="/extensions/chart/recharts/area">
                <IntlMessages
                  id="sidebar.chart.area"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/chart/recharts/bar">
              <AppLink href="/extensions/chart/recharts/bar">
                <IntlMessages
                  id="sidebar.chart.bar"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/chart/recharts/composed">
              <AppLink href="/extensions/chart/recharts/composed">
                <IntlMessages
                  id="sidebar.chart.composed"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/chart/recharts/line">
              <AppLink href="/extensions/chart/recharts/line">
                <IntlMessages
                  id="sidebar.chart.line"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/chart/recharts/pie">
              <AppLink href="/extensions/chart/recharts/pie">
                <IntlMessages
                  id="sidebar.chart.pie"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/chart/recharts/radar">
              <AppLink href="/extensions/chart/recharts/radar">
                <IntlMessages
                  id="sidebar.chart.radar"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/chart/recharts/radial">
              <AppLink href="/extensions/chart/recharts/radial">
                <IntlMessages
                  id="sidebar.chart.radial"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/chart/recharts/scatter">
              <AppLink href="/extensions/chart/recharts/scatter">
                <IntlMessages
                  id="sidebar.chart.scatter"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/chart/recharts/treemap">
              <AppLink href="/extensions/chart/recharts/treemap">
                <IntlMessages
                  id="sidebar.chart.tree"/></AppLink>
            </Menu.Item>
          </SubMenu>

          <SubMenu popupClassName="gx-menu-horizontal" key="amchart" title={
            <span><i className="icon icon-amchart"/>
                <IntlMessages id="sidebar.components.amchart"/>
              </span>}>
            <Menu.Item key="extensions/chart/amchart/area">
              <AppLink href="/extensions/chart/amchart/area">
                <IntlMessages
                  id="sidebar.chart.area"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/chart/amchart/bar">
              <AppLink href="/extensions/chart/amchart/bar">
                <IntlMessages
                  id="sidebar.chart.bar"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/chart/amchart/line">
              <AppLink href="/extensions/chart/amchart/line">
                <IntlMessages
                  id="sidebar.chart.line"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/chart/amchart/pie">
              <AppLink href="/extensions/chart/amchart/pie">
                <IntlMessages
                  id="sidebar.chart.pie"/></AppLink>
            </Menu.Item>
            <Menu.Item key="extensions/chart/amchart/composed">
              <AppLink href="/extensions/chart/amchart/composed">
                <IntlMessages
                  id="sidebar.chart.composed"/></AppLink>
            </Menu.Item>
          </SubMenu>

        </MenuItemGroup>

        <SubMenu popupClassName="gx-menu-horizontal" key="calendar"
                 title={<span><i className="icon icon-calendar"/><IntlMessages
                   id="sidebar.calendar"/></span>}>
          <Menu.Item key="extensions/calendar/basic">
            <AppLink href="/extensions/calendar/basic">
              <IntlMessages
                id="sidebar.calendar.basic"/></AppLink>
          </Menu.Item>
          <Menu.Item key="extensions/calendar/cultures">
            <AppLink href="/extensions/calendar/cultures">
              <IntlMessages
                id="sidebar.calendar.cultures"/></AppLink>
          </Menu.Item>
          <Menu.Item key="extensions/calendar/popup">
            <AppLink href="/extensions/calendar/popup">
              <IntlMessages
                id="sidebar.calendar.popup"/></AppLink>
          </Menu.Item>
          <Menu.Item key="extensions/calendar/rendering">
            <AppLink href="/extensions/calendar/rendering">
              <IntlMessages
                id="sidebar.calendar.rendering"/></AppLink>
          </Menu.Item>
          <Menu.Item key="extensions/calendar/selectable">
            <AppLink href="/extensions/calendar/selectable">
              <IntlMessages
                id="sidebar.calendar.selectable"/></AppLink>
          </Menu.Item>
          <Menu.Item key="extensions/calendar/timeslots">
            <AppLink href="/extensions/calendar/timeslots">
              <IntlMessages id="sidebar.calendar.timeslots"/></AppLink>
          </Menu.Item>
        </SubMenu>

      </SubMenu>

      <SubMenu popupClassName={getNavStyleSubMenuClass(navStyle)} key="custom-views"
               title={<IntlMessages id="sidebar.customViews"/>}>

        <SubMenu popupClassName="gx-menu-horizontal" key="user-auth"
                 title={<span><i className="icon icon-auth-screen"/><IntlMessages
                   id="app.userAuth"/></span>}>
          <Menu.Item key="custom-views/user-auth/sign-in">
            <AppLink href="/custom-views/user-auth/sign-in">
              <IntlMessages
                id="app.userAuth.signIn"/></AppLink>
          </Menu.Item>
          <Menu.Item key="custom-views/user-auth/forgot-password">
            <AppLink href="/custom-views/user-auth/forgot-password">
              <IntlMessages
                id="app.userAuth.forgotPassword"/></AppLink>
          </Menu.Item>
          <Menu.Item key="custom-views/user-auth/sign-up">
            <AppLink href="/custom-views/user-auth/sign-up">
              <IntlMessages
                id="app.userAuth.signUp"/></AppLink>
          </Menu.Item>
          <Menu.Item key="custom-views/user-auth/lock-screen">
            <AppLink href="/custom-views/user-auth/lock-screen">
              <IntlMessages
                id="app.userAuth.lockScreen"/></AppLink>
          </Menu.Item>
          <Menu.Item key="custom-views/user-auth/reset-password">
            <AppLink href="/custom-views/user-auth/reset-password">
              <IntlMessages
                id="app.userAuth.resetPassword"/></AppLink>
          </Menu.Item>
        </SubMenu>

        <SubMenu popupClassName="gx-menu-horizontal" key="list-type"
                 title={<span><i className="icon icon-all-contacts"/><IntlMessages
                   id="sidebar.listType"/></span>}>
          <Menu.Item key="custom-views/list-type/simple-list">
            <AppLink href="/custom-views/list-type/simple-list">
              <IntlMessages
                id="sidebar.listType.plainListView"/></AppLink>
          </Menu.Item>
          <Menu.Item key="custom-views/list-type/strip-list">
            <AppLink href="/custom-views/list-type/strip-list">
              <IntlMessages
                id="sidebar.listType.withDivider"/></AppLink>
          </Menu.Item>
          <Menu.Item key="custom-views/list-type/card-list">
            <AppLink href="/custom-views/list-type/card-list">
              <IntlMessages
                id="sidebar.listType.cardListView"/></AppLink>
          </Menu.Item>
        </SubMenu>

        <SubMenu popupClassName="gx-menu-horizontal" key="eCommerce"
                 title={<span><i className="icon icon-shopping-cart"/><IntlMessages
                   id="sidebar.eCommerce"/></span>}>
          <Menu.Item key="custom-views/eCommerce/product-grid">
            <AppLink href="/custom-views/eCommerce/product-grid">
              <IntlMessages
                id="sidebar.eCommerce.productGrid"/></AppLink>
          </Menu.Item>
          <Menu.Item key="custom-views/eCommerce/product-list">
            <AppLink href="/custom-views/eCommerce/product-list">
              <IntlMessages
                id="sidebar.eCommerce.productList"/></AppLink>
          </Menu.Item>
        </SubMenu>

        <SubMenu popupClassName="gx-menu-horizontal" key="errorPages"
                 title={<span><i className="icon icon-error"/><IntlMessages
                   id="sidebar.extraPages"/></span>}>

          <Menu.Item key="custom-views/error-pages/error-404">
            <AppLink href="/custom-views/error-pages/error-404">
              <IntlMessages
                id="sidebar.extraPages.404"/></AppLink>
          </Menu.Item>
          <Menu.Item key="custom-views/error-pages/error-500">
            <AppLink href="/custom-views/error-pages/error-500">
              <IntlMessages
                id="sidebar.extraPages.500"/></AppLink>
          </Menu.Item>
        </SubMenu>

        <SubMenu popupClassName="gx-menu-horizontal" key="extra-elements"
                 title={<span><i className="icon icon-ellipse-h"/><IntlMessages
                   id="sidebar.listType.extras"/></span>}>
          <Menu.Item key="custom-views/extras/pricing-table">
            <AppLink href="/custom-views/extras/pricing-table">
              <IntlMessages
                id="sidebar.extraElements.pricingTable"/></AppLink>
          </Menu.Item>

          <Menu.Item key="custom-views/extras/callouts">
            <AppLink href="/custom-views/extras/callouts">
              <IntlMessages
                id="sidebar.extraElements.callouts"/></AppLink>
          </Menu.Item>
          <Menu.Item key="custom-views/extras/testimonials">
            <AppLink href="/custom-views/extras/testimonials">
              <IntlMessages
                id="sidebar.extraElements.testimonials"/></AppLink>
          </Menu.Item>
        </SubMenu>

      </SubMenu>

    </Menu>

  );
};

HorizontalNav.propTypes = {};

export default HorizontalNav;

