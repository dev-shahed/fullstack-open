import React, { Fragment } from "react";

export default function StatisticLine({value, text}) {

  return (
    <Fragment>
      <p>{text}: {value}</p>
    </Fragment>
  );
}
