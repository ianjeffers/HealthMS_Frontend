import axios from 'axios';
import { backend_host, mood_path } from '../constants';


export const addMood = async (mood) => {
    return await axios.post(backend_host + mood_path, {
        "mood":mood.mood,
        "notes":mood.notes,
        "date":mood.date,
        "userID":mood.userID,
})
    .then(response => {
        addMoodSuccess(response.data)
    })
    .catch(error => {
        throw(error);
    });
};

export const addMoodSuccess = (data) => {
    return {
        type: 'ADD_MOOD_SUCCESS',
        payload: {
            _id: data._id,
            mood: data.mood,
            date: data.date,
            notes: data.notes
        }
    }
};