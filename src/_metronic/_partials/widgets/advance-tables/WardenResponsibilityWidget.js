/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
import React from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../../_helpers";
import { CircularStatic } from "../Forms/Circle";
import {Button} from "react-bootstrap";
import AssignDutiesModal from "./AssignDutiesModal";

export function WardenResponsibilityWidget(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const {Duties} = props
  return (
      <div className={`card card-custom card-stretch gutter-b`}>
        {/* Head */}
        <div className="card-header border-0 py-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label font-weight-bolder text-dark">Warden Responsibilities</span>
            <span className="text-muted mt-3 font-weight-bold font-size-sm">{Duties.length} Wardens are Assigned at the momment</span>
          </h3>
          <div className="card-toolbar">
          <Button variant="btn btn-danger font-weight-bolder font-size-sm" onClick={() => setModalShow(true)}>
        Assign Duties
      </Button>
      <AssignDutiesModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />  </div>
        </div>
        {/* Body */}
        <div className="card-body pt-0 pb-3">
          <div className="tab-content">
            <div className="table-responsive">
              <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
                <thead>
                <tr className="text-left text-uppercase">
                  <th className="pl-7" style={{minWidth: "250px"}}><span className="text-dark-75">Wardens</span></th>
                  <th style={{minWidth: "100px"}}>Start Time</th>
                  <th style={{minWidth: "100px"}}>End Time</th>
                  <th style={{minWidth: "100px"}}>Assigned Area</th>
                  <th style={{minWidth: "130px"}}>Current Congestion</th>
   
                </tr>
                </thead>
                <tbody>
                {Duties && Duties.map(Duty => {
                  return(
                    <tr key={Duty.id}>
                    <td className="pl-0 py-8">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-50 symbol-light mr-4">
                            <span className="symbol-label">
                              <span className="svg-icon h-75 align-self-end">
                                <SVG src={toAbsoluteUrl("/media/svg/avatars/001-boy.svg")}/>
                              </span>
                            </span>
                        </div>
                        <div>
                  <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">{Duty.FirstName}</a>
                          <span className="text-muted font-weight-bold d-block"></span>
                        </div>
                      </div>
                    </td>
                    <td>
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          10
                        </span>
                      <span className="text-muted font-weight-bold">
                          00 am
                        </span>
                    </td>
                    <td>
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          05
                        </span>
                      <span className="text-muted font-weight-bold">
                          00 pm
                        </span>
                    </td>
                    <td>
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          F7
                        </span>
                      <span className="text-muted font-weight-bold">
                          
                        </span>
                    </td>
                    <td>
                    
                    <CircularStatic/>
                      <span className="text-muted font-weight-bold d-block font-size-sm">
                          50%
                        </span>
                    </td>
                    
                  </tr>
                               );
                              })}

                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  );
}
