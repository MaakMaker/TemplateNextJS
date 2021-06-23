import dynamic from 'next/dynamic';
import CircularProgress from "../app/components/CircularProgress";
import React from "react";

export default function asyncComponent(importComponent) {

  return dynamic(importComponent,
    {
      loading: () => <CircularProgress/>
    });
}
