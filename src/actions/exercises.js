import axios from 'axios';
import { backend_host, exercise_path } from '../constants';

export const addExercise = async (exercise) => {
    return await axios.post(backend_host + exercise_path, {
        "userID": exercise.userID, 
        "exercise": exercise.exercise, 
        "volume": exercise.volume, 
        "date": exercise.date, 
        "notes": exercise.notes})
    .then(response => {
        addExerciseSuccess(response.data)
    })
    .catch(error => {
        throw(error);
    });
};

export const addExerciseSuccess = (data) => {
    return {
        type: 'ADD_EXERCISE_SUCCESS',
        payload: {
            _id: data._id,
            exercise: data.exercise,
            dosage: data.dosage,
            date: data.date,
            notes: data.notes
        }
    }
};