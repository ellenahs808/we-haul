export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const REMOVE_ADDRESS = "REMOVE_ADDRESS";

export const updateAddress = (address) => {
    debugger
 return   {
    type: UPDATE_ADDRESS,
    address
}}

export const removeAddress = () => ({
    type: REMOVE_ADDRESS
})