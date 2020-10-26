import React from "react";
import {AdvanceTablesWidget4} from "../../_metronic/_partials/widgets";
import {connect} from 'react-redux';


 const ProfilePage = (props) => {
  const {profiles} = props;


return (<div className="row">
    <div className="col-lg-12">
                  <AdvanceTablesWidget4 Vardens={profiles} className="card-stretch gutter-b" />
                
              </div>
              </div>);
};
const mapStateToProps = (state) => {
  return {
    profiles: state.profiles.Vardens
  }
}
export default connect(mapStateToProps)(ProfilePage);