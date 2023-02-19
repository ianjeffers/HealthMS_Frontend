import axios from 'axios';
import { backend_host, stress_path } from '../constants';


export const addStress = async (stress) => {
    return await axios.post(backend_host + stress_path, {
        "stressLevel":stress.stressLevel,
        "notes":stress.notes,
        "date":stress.date,
        "userID":stress.userID,
})
    .then(response => {
        addStressSuccess(response.data)
    })
    .catch(error => {
        throw(error);
    });
};

export const addStressSuccess = (data) => {
    return {
        type: 'ADD_STRESS_SUCCESS',
        payload: {
            _id: data._id,
            stressLevel: data.stressLevel,
            date: data.date,
            notes: data.notes
        }
    }
};