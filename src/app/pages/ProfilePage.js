import React from "react";
import {AdvanceTablesWidget4} from "../../_metronic/_partials/widgets";
import {connect} from 'react-redux';
import firebase from "../../config/fbConfig";
import { compose } from "redux";


function  ProfilePage () {

  const [Vardens, setVardens] = React.useState([])

 React.useEffect(()=>{
   const fetchData = async () => {
   const data = await firebase.firestore().collection("Vardens").get()
   const x = (data.docs.map(doc => ({...doc.data(),id:doc.id})))
   setVardens(x)
    
   }
   fetchData()
  },[])
 

return (<div className="row">
    <div className="col-lg-12">
                  <AdvanceTablesWidget4 Vardens={Vardens} className="card-stretch gutter-b" />
                
              </div>
              </div>);
};
const mapStateToProps = (state) => {
  return {
    profiles: state.firestore.ordered.Vardens
    
  }
}
export default compose(
  
  connect(mapStateToProps)
)
(ProfilePage)