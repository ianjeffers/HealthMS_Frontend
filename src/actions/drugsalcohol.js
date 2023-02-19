import axios from 'axios';
import { backend_host, drugsalcohol_path } from '../constants';

export const addDrugsAlcohol = async (drugsalcohol) => {
    return await axios.post(backend_host + drugsalcohol_path, {
        "userID": drugsalcohol.userID, 
        "type": drugsalcohol.type, 
        "name": drugsalcohol.name, 
        "quantity": drugsalcohol.quantity, 
        "unit": drugsalcohol.unit, 
        "date": drugsalcohol.date, 
        "notes": drugsalcohol.notes})
    .then(response => {
        addDrugsAlcoholSuccess(response.data)
    })
    .catch(error => {
        throw(error);
    });
};

export const addDrugsAlcoholSuccess = (data) => {
    return {
        type: 'ADD_DRUGSALCOHOL_SUCCESS',
        payload: {
            _id: data._id,
            type: data.type,
            name: data.name,
            quantity: data.quantity,
            unit: data.unit,
            date: data.date,
            notes: data.notes
        }
    }
};