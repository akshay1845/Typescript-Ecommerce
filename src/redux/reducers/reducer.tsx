const intialize:any = {
Apidata:[]
}
const API_Data = (state = intialize , action:any)=>{

    switch(action.type){
        
        case "API_DATA" :
            // console.log(action.payload, "inside reducer")
            return {
                ...state,
                Apidata : action.payload
            }

        case "ADD_TO_CART":
    
            const d = state.Apidata.findIndex((e:any) => e.id === action.payload)
            
            state.Apidata[d].qty += 1

            // console.log(state,"from add to cart")
            
            return {
                ...state
            }

        case "REMOVE_TO_CART":

            const d1 = state.Apidata.findIndex((e:any) => e.id === action.payload)
            
            state.Apidata[d1].qty -= 1

            // console.log(state,"from remove to cart")

            return {
                ...state
            }

        default :
            return state;
    }
}

export default API_Data