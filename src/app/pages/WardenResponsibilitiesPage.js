import React from "react";
import {useSubheader} from "../../_metronic/layout";
import { WardenResponsibilityWidget } from "../../_metronic/_partials/widgets";
import {connect} from 'react-redux';
import firebase from "../../config/fbConfig";
import { compose } from "redux";


 const WardenResponsibilitiesPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("My Custom title");
  
  const [VardenDuties, setVardenDuties] = React.useState([])

 React.useEffect(()=>{
   const fetchData = async () => {
   const data = await firebase.firestore().collection("VardenDuties").get()
   const x = (data.docs.map(doc => ({...doc.data(),id:doc.id})))
   setVardenDuties(x)
    
   }
   fetchData()
  },[])
  return (
    <div className="row">
    <div className="col-lg-12">
                    <WardenResponsibilityWidget Duties={VardenDuties} className="card-stretch gutter-b" />
                </div>
                </div>
  );
}
const mapStateToProps = (state) => {
  return {
    Duties: state.firestore.ordered.VardenDuties
    
  }
}
export default compose(
  
  connect(mapStateToProps)
)
(WardenResponsibilitiesPage)
