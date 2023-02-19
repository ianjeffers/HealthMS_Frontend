import axios from 'axios';
import { backend_host, symptoms_path, symptom_path } from '../constants';


export const addSymptom = async (symptom) => {
    return await axios.post(backend_host + symptom_path, {
        "symptom":symptom.name,
        "description":symptom.description,
        "category":symptom.category, 
        "notes":symptom.notes,
        "date":symptom.date,
        "userID":symptom.userID,
})
    .then(response => {
        addSymptomSuccess(response.data)
    })
    .catch(error => {
        throw(error);
    });
};

export const addSymptomSuccess = (data) => {
    return {
        type: 'ADD_SYMPTOM_SUCCESS',
        payload: {
            _id: data._id,
            symptom: data.symptom,
            date: data.date,
            notes: data.notes
        }
    }
};

//Write the fetchSymptoms function for the above code. It will connect to the API located at http://127.0.0.1:5000/symptom, and will provide the parameter 'userID' to the API.
export const fetchSymptoms = async (userId) => {
    try {
      const response = await axios.post(backend_host + symptoms_path, {
        userID: userId
      });
      return response.data.symptoms;
    } catch (error) {
      throw error;
    }
  };
