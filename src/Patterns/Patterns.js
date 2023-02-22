//Write a React component for the Patterns page that will contain a form with the following field:
//Categories (multiple select dropdown with options: Mood, stress)

//This form will make a request to a correlations API, specifying a date range and the Categories selected. 
//The API result will have a "text" parameter that will be used to write a description
//The API result will have a "data" parameter that will contain data groups, which we will graph with react-charts with symptoms in red.
//The API will return a JSON object with the following structure:
//{
//    "text": "This is the description of the data's patterns and correlations",
//    "data": [
//        [
//            "symptom1":["2019-01-01","2020-01-01","2021-01-01"],
//            "category1": ["2019-01-01","2020-01-01","2021-01-01"],
//            "category2":["2019-01-02","2020-01-02","2021-01-02"]
//        ],
//        [
//            "symptom2":["2019-01-02","2020-01-02","2021-01-02"],
//            "category1": ["2019-01-01","2020-01-01","2021-01-01"],
//            "category2":["2019-01-02","2020-01-02","2021-01-02"]
//        ],
//    ]
//}

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import SelectSymptoms from '../SelectSymptoms/SelectSymptoms';
import './Patterns.css';
import { findPatterns } from '../actions/patterns';
import { symptom_path } from '../constants';
import { useAuth0 } from "@auth0/auth0-react";
import Popup from '../Ailyssa/Popup/Popup';


function Patterns(props) {

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [symptom, setSymptom] = useState('');
    const [categories, setCategories] = useState([]);
    const [data, setData] = useState([]);
    const { user, isAuthenticated } = useAuth0();
    const [userID, setUserID] = useState(user ? user.sub : null);

    function handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        if(name === "categories"){
          const options = e.target.options;
          const selectedCategories = [];
          for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
              selectedCategories.push(options[i].value);
            }
          }
          setCategories(selectedCategories);
        }else if (name === "startDate") {
          setStartDate(e.target.value);
        } else if (name === "endDate") {
          setEndDate(e.target.value);
        } 
    }

    useEffect(() => {
        getData();
      }, []);

    function getData(){
        findPatterns({startDate, endDate, symptom, categories, userID})
        .then(data => {
            let result = [];
            data = data["data"]
            for (let key in data) {
                let obj = {};
                obj.name = key;
                obj.data = data[key].map(item => ({
                    x: item,
                    y: 1,
                  }));
                result.push(obj);
            }
            setData(result);
        })
        .catch(err => {
            setData({ error: err.message })
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        getData()
    }

    function handleSymptomChange(symptom) {
        setSymptom(symptom);
      }

    return (
            <div className="patterns-container">
                <div className="patterns-header">
                    <h1>Patterns</h1>
                    <Link to={symptom_path}><button>Add a Symptom</button></Link>
                </div>

                <form onSubmit={handleSubmit}>
                    <label>Start Date:</label>
                    <input type="date" name="startDate" onChange={handleChange} />

                    <label>End Date:</label>
                    <input type="date" name="endDate" onChange={handleChange} />

                    <label>Categories:</label>
                    <select name="categories" multiple onChange={handleChange}>
                        <option value="mood">Mood</option>
                        <option value="stress">Stress</option>
                        <option value="food">Food</option>
                        <option value="medications">Medications</option>
                        <option value="exercise">Exercise</option>
                        <option value="sleep">Sleep</option>
                    </select>
                    <SelectSymptoms  handleSymptomChange={handleSymptomChange}/>

                    <button type="submit">Submit</button>
                </form>

                {/* {this.state.data.length > 0 ? ( */}
                {Object.keys(data).length > 1 ? (
                    <div className="patterns-graph">
                    <LineChart
      width={600}
      height={300}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="x" />
      <YAxis domain={[0,1.5]} dataKey="y" />
      <Tooltip />
      <Legend />
      {data.map((entry, index) => (
        <Line key={index} name = {entry.name} type="monotone" dataKey={"y"} data={entry.data} stroke={`#${Math.floor(Math.random()*16777215).toString(16)}`} />
      ))}
    </LineChart>
  </div>
) : (
                    <div className="patterns-graph">No Data</div>
                )}

                {Object.keys(data).length > 1 ? (
                    <div className="patterns-description">
                        <h2>Description</h2>
                        <p>{data.text}</p>
                        <Popup data={data}/>
                    </div>
                ) : null}
            </div>
        )
    }

    export default Patterns;