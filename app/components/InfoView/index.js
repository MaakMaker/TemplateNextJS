import React, {useEffect} from 'react';
import CircularProgress from "app/components/CircularProgress";
import {message} from 'antd';

import {useDispatch, useSelector} from "react-redux";
import {hideMessage} from "../../../redux/actions/Common";

const InfoView = () => {

  const dispatch = useDispatch();
  const common = useSelector(({common}) => common);
  const {error, loading} = common;
  const displayMessage = common.message;

  useEffect(() => {
    setTimeout(() => {
      dispatch(hideMessage());
    }, 3000);
  },[error, displayMessage]);

  return (
    <>
      {loading && <div className="gx-loader-view gx-loader-position">
        <CircularProgress/>
      </div>}
      {error && message.error(<span id="message-id">{error}</span>)}
      {displayMessage && message.info(<span id="message-id">{displayMessage}</span>)}
    </>
  );
};
export default InfoView;
