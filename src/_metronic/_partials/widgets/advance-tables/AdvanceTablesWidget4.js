/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
import React from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../../_helpers";
import {Button} from "react-bootstrap";
import CreateWardenModal from "./CreateWardenModal";




export function AdvanceTablesWidget4(props) {


  const {Vardens} = props
  
  const [modalShow, setModalShow] = React.useState(false);

  return (
   
      <div className={`card card-custom card-stretch gutter-b}`}>
        {/* Head */}
        <div className="card-header border-0 py-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label font-weight-bolder text-dark"> Warden </span>
          </h3>
          <div className="card-toolbar">
          <Button variant="btn btn-danger font-weight-bolder font-size-sm" onClick={() => setModalShow(true)}>
        Create Warden 
      </Button>
      
      <CreateWardenModal
        show={modalShow}
        onHide={() => setModalShow(false)}

      />
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
                  <th style={{minWidth: "100px"}}>Rank</th>
                  <th style={{minWidth: "100px"}}></th>
                  <th style={{minWidth: "100px"}}>Age</th>
                  <th style={{minWidth: "130px"}}>rating</th>
   
                </tr>
                </thead>
                <tbody>
                {Vardens && Vardens.map(Varden => {
              return (
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
                        <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">{Varden.Name}</a>
                        <span className="text-muted font-weight-bold d-block"></span>
                      </div>
                    </div>
                  </td>
                  <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        {Varden.Rank}
                      </span>
                    <span className="text-muted font-weight-bold">
                        Grade
                      </span>
                  </td>
                  <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        {Varden.Designation}
                      </span>
                    <span className="text-muted font-weight-bold">
                        Designation
                      </span>
                  </td>
                  <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        {Varden.Age}
                      </span>
                    <span className="text-muted font-weight-bold">
                        
                      </span>
                  </td>
                  <td>
                    <img src={toAbsoluteUrl("/media/logos/stars.png")} alt="image" style={{width: "5.5rem"}}/>
                    <span className="text-muted font-weight-bold d-block font-size-sm">
                        Best Rated
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

export default (AdvanceTablesWidget4)