import axios from 'axios';
import { backend_host, allergy_path } from '../constants';

export const addAllergy = async (allergy) => {
    return await axios.post(backend_host + allergy_path, {
        "userID": allergy.userID, 
        "type": allergy.type, 
        "category": allergy.category, 
        "intensity": allergy.intensity, 
        "date": allergy.date, 
        "notes": allergy.notes})
    .then(response => {
        addAllergySuccess(response.data)
    })
    .catch(error => {
        throw(error);
    });
};

export const addAllergySuccess = (data) => {
    return {
        type: 'ADD_ALLERGY_SUCCESS',
        payload: {
            _id: data._id,
            type: data.type,
            category: data.category,
            intensity: data.intensity,
            date: data.date,
            notes: data.notes
        }
    }
};