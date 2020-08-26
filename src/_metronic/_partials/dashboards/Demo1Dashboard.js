import React from "react";
import {
    MixedWidget1,
    MixedWidget6,
    MixedWidget14,
    StatsWidget11,
    StatsWidget12,

    
} from "../widgets";


export function Demo1Dashboard() {
    return (<>
            <div className="row">
    
                <div className="col-lg-6 col-xxl-4">
                    <MixedWidget1 className="card-stretch gutter-b"/>
                </div>
                

                <div className="col-lg-6 col-xxl-4">
                    <StatsWidget11 className="card-stretch card-stretch-half gutter-b"/>
                    <StatsWidget12 className="card-stretch card-stretch-half gutter-b"/>
                </div>

                <div className="col-lg-4">
                    <MixedWidget14 className="card-stretch gutter-b" />
                </div>
                
            </div>
            <div className="row">
            <div className="col-lg-6">
                    <MixedWidget6 className="card-stretch gutter-b" />
                </div>
                
            </div>

    </>);
}
