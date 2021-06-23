import React from 'react';
import {ConfigProvider} from 'antd';
import {IntlProvider} from "react-intl";
import {useSelector} from "react-redux";
import AppLocale from "../../../lngProvider";

const LocaleProvider = (props) => {
  const {locale} = useSelector(({settings}) => settings)
  const currentAppLocale = AppLocale[locale.locale];

  return (
    <ConfigProvider locale={currentAppLocale.antd}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}>{props.children}</IntlProvider>
    </ConfigProvider>
  )
}

export default LocaleProvider;
