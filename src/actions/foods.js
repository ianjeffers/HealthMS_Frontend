import axios from 'axios';
import { backend_host, food_path } from '../constants';


export const addFood = async (food) => {
    return await axios.post(backend_host + food_path, {
        "name":food.name,
        "calories":food.calories,
        "cuisine":food.cuisine,
        "time":food.time,
        "type":food.type,
        "notes":food.notes,
        "date":food.date,
        "userID":food.userID,
})
    .then(response => {
        addFoodSuccess(response.data)
    })
    .catch(error => {
        throw(error);
    });
};

export const addFoodSuccess = (data) => {
    return {
        type: 'ADD_FOOD_SUCCESS',
        payload: {
            _id: data._id,
            name: data.name,
            calories: data.calories,
            cuisine: data.cuisine,
            time: data.time,
            type: data.type,
            date: data.date,
            notes: data.notes
        }
    }
};