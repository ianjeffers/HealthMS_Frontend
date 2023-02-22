import axios from 'axios';
import { backend_host, illness_path } from '../constants';

export const addIllness = async (illness) => {
    return await axios.post(backend_host + illness_path, {
        "userID": illness.userID, 
        "type": illness.type, 
        "name": illness.name, 
        "date": illness.date, 
        "notes": illness.notes})
    .then(response => {
        addIllnessSuccess(response.data)
    })
    .catch(error => {
        throw(error);
    });
};

export const addIllnessSuccess = (data) => {
    return {
        type: 'ADD_ILLNESS_SUCCESS',
        payload: {
            _id: data._id,
            type: data.type,
            name: data.name,
            date: data.date,
            notes: data.notes
        }
    }
};