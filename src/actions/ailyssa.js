import axios from 'axios';
import { medical_advisor } from '../Ailyssa/prompts/prompts';
import { backend_host, ailyssa_path } from '../constants';

export const generateResponse = async (data) => {
    return await axios.post(backend_host + ailyssa_path, {
        "userID": data.userID, 
        "prompt": medical_advisor + data.data
        })
    .then(response => {
        return response.data.text.choices[0].text.trim();
    })
    .catch(error => {
        throw(error);
    });
};