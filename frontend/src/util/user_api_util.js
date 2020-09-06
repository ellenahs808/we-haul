import axios from 'axios';


export const updateUser = userData => {
    return axios.patch(`/api/users/${userData._id}`, userData)
}



export const getUser = (id) => {
  return axios.get(`/api/users/${id}`);
};