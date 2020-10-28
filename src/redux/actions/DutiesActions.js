export const createDuty = (Duty) => {
    return(dispatch , getstate , {getFirebase , getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection("VardenDuties").add({
        ...Duty

    }).then(()=>{
        dispatch({ type: "ADD_Duty", Duty});
        }).catch((err)=>{
            dispatch({ type: "ADD_Duty_Error", err});
      
        })
    
}
}