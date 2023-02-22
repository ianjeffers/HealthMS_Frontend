import axios from 'axios';
import { backend_host, patterns_path } from '../constants';

export const findPatterns = (data) => {
    return axios.post(backend_host + patterns_path, {
        "end":data.endDate,
        "start":data.startDate,
        "symptom":data.symptom,
        "categories":data.categories,
        "userId":data.userID
    })
}