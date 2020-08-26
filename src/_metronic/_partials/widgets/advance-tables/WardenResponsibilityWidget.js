/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
import React from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../../_helpers";
import { CircularStatic } from "../Forms/Circle";

export function WardenResponsibilityWidget({ className }) {
  return (
      <div className={`card card-custom ${className}`}>
        {/* Head */}
        <div className="card-header border-0 py-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label font-weight-bolder text-dark">Warden Responsibilities</span>
            <span className="text-muted mt-3 font-weight-bold font-size-sm">22 Wardens are available</span>
          </h3>
          <div className="card-toolbar">
            <a href="#" className="btn btn-danger font-weight-bolder font-size-sm">Assign Duties</a>
          </div>
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
                <tr>
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
                        <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Wajahat Malik</a>
                        <span className="text-muted font-weight-bold d-block"></span>
                      </div>
                    </div>
                  </td>
                  <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        17
                      </span>
                    <span className="text-muted font-weight-bold">
                        Grade
                      </span>
                  </td>
                  <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        Traffic Officer
                      </span>
                    <span className="text-muted font-weight-bold">
                        Designation
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
                <tr>
                  <td className="pl-0 py-0">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-50 symbol-light mr-4">
                        <span className="symbol-label">
                          <span className="svg-icon h-75 align-self-end">
                            <SVG src={toAbsoluteUrl("/media/svg/avatars/018-girl-9.svg")}/>
                          </span>
                        </span>
                      </div>
                      <div>
                        <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Subiyal Malik</a>
                        <span className="text-muted font-weight-bold d-block"></span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      18
                    </span>
                    <span className="text-muted font-weight-bold">
                      Grade
                    </span>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      District Officer
                    </span>
                    <span className="text-muted font-weight-bold">
                      Designation
                    </span>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      G5
                    </span>
                    <span className="text-muted font-weight-bold">
                     
                    </span>
                  </td>
                  <td>
                   <CircularStatic/> <span className="text-muted font-weight-bold d-block font-size-sm">
                   50%
                    </span>
                  </td>
                  
                </tr>
                <tr>
                  <td className="pl-0 py-8">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-50 symbol-light mr-4">
                        <span className="symbol-label">
                          <span className="svg-icon h-75 align-self-end">
                            <SVG src={toAbsoluteUrl("/media/svg/avatars/047-girl-25.svg")}/>
                          </span>
                        </span>
                      </div>
                      <div>
                        <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">
                          Ruman Baloch
                        </a>
                        <span className="text-muted font-weight-bold d-block"></span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      G10
                    </span>
                    <span className="text-muted font-weight-bold">
                     Grade
                    </span>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                     Area Manager
                    </span>
                    <span className="text-muted font-weight-bold">
                      Designation
                    </span>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      G9
                    </span>
                    <span className="text-muted font-weight-bold">
                      
                    </span>
                  </td>
                  <td>
                   <CircularStatic/> <span className="text-muted font-weight-bold d-block font-size-sm">
                   50%
                    </span>
                  </td>
                 
                </tr>
                <tr>
                  <td className="pl-0 py-0 ">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-50 symbol-light mr-4">
                        <span className="symbol-label">
                          <span className="svg-icon h-75 align-self-end">
                            <SVG src={toAbsoluteUrl("/media/svg/avatars/014-girl-7.svg")}/>
                          </span>
                        </span>
                      </div>
                      <div>
                        <a href="#" className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg">
                          Mustafa Dar
                        </a>
                        <span className="text-muted font-weight-bold d-block"></span>
                      </div>
                    </div>
                  </td>
                  <td className="text-left pr-0">
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      F6
                    </span>
                    <span className="text-muted font-weight-bold">
                      Grade
                    </span>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      Area Manager
                    </span>
                    <span className="text-muted font-weight-bold">
                      Designation
                    </span>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      F10
                    </span>
                    <span className="text-muted font-weight-bold">
                    
                    </span>
                  </td>
                  <td>
                   <CircularStatic/> <span className="text-muted font-weight-bold d-block font-size-sm">
                   50%
                    </span>
                  </td>
             
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  );
}
