import React from "react";
import {AdvanceTablesWidget2
} from "../../_metronic/_partials/widgets";
import firebase from "../../config/fbConfig";


export function SugestionsPage() {
    
  const [Suggestions, setSuggestions] = React.useState([])

  React.useEffect(()=>{
    const fetchData = async () => {
    const data = await firebase.firestore().collection("Suggestions").get()
    const x = (data.docs.map(doc => ({...doc.data(),id:doc.id})))
    setSuggestions(x)
    
     
    }
    fetchData()
   },[])
    return (<>
            <div className="row">
                <div className="col-xxl-12 order-2 order-xxl-1">
                    <AdvanceTablesWidget2 Suggestions={Suggestions}className="card-stretch gutter-b"/>
                </div>
         
            </div>

    </>);
}
