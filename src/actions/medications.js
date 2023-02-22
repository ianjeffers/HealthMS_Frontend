import axios from 'axios';
import { backend_host, medication_path } from '../constants';

export const addMedication = async (medication) => {
    return await axios.post(backend_host + medication_path, {
        "userID": medication.userID, 
        "medication": medication.medication, 
        "dosage": medication.dosage, 
        "date": medication.date, 
        "notes": medication.notes})
    .then(response => {
        addMedicationSuccess(response.data)
    })
    .catch(error => {
        throw(error);
    });
};

export const addMedicationSuccess = (data) => {
    return {
        type: 'ADD_MEDICATION_SUCCESS',
        payload: {
            _id: data._id,
            medication: data.medication,
            dosage: data.dosage,
            date: data.date,
            notes: data.notes
        }
    }
};