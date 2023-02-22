import axios from 'axios';
import { backend_host, sleep_path } from '../constants';

export const addSleep = async (sleep) => {
    return await axios.post(backend_host + sleep_path, {
        "userID": sleep.userID, 
        "sleepHours": sleep.sleepHours, 
        "date": sleep.date, 
        "notes": sleep.notes})
    .then(response => {
        addSleepSuccess(response.data)
    })
    .catch(error => {
        throw(error);
    });
};

export const addSleepSuccess = (data) => {
    return {
        type: 'ADD_SLEEP_SUCCESS',
        payload: {
            _id: data._id,
            sleep: data.sleepHours,
            date: data.date,
            notes: data.notes
        }
    }
};