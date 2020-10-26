
const initState = {
    Vardens : [
        {id: 1 , Name : "dawar", Rank : 17 , Designation: "Traffic Officer", Age : 30 },
        {id: 1 , Name : "Ali", Rank : 17 , Designation: "Traffic Officer", Age : 30 },
        {id: 1 , Name : "Bilal", Rank : 17 , Designation: "Traffic Officer", Age : 30 }
    ]
}
  const wardenreducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_Varden':
            console.log("Varden Added", action.Vardens)
            return state;
        case 'ADD_varden_Error':
            console.log("Varden Added error", action.err)
            return state;
        default: 
            return state;

        
    }  

}
export default wardenreducer