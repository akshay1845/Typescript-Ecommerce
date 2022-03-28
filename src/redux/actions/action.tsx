export const addToCart = (id:Number) => {
    return {
        type : "ADD_TO_CART",
        payload : id,
    }
}

export const removeToCart = (id:Number) => {
    return {
        type : "REMOVE_TO_CART",
        payload : id
    }
}

export const callApi = {
   type: "FETCH_DATA"
}

export const  setApi = (data:any) => {
    return {
        type:"API_DATA",
        payload: data
    } 
}