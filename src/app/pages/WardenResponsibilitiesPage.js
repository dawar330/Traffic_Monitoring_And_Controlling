import React from "react";
import {useSubheader} from "../../_metronic/layout";
import { WardenResponsibilityWidget } from "../../_metronic/_partials/widgets";

export const WardenResponsibilitiesPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("My Custom title");

  return (
    <div className="row">
    <div className="col-lg-12">
                    <WardenResponsibilityWidget className="card-stretch gutter-b" />
                </div>
                </div>
  );
};
