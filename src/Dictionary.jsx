import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from './assets/Logo.png'
import LoadingSplash from "./LoadingSplash";
import './Styles/Dictionary.css'
function Dictionary() {
  const [input, setInput] = useState();
  const [word, setWord] = useState();
    const [result,setResult] = useState();
    const [loading,setLoading] = useState()
    const [resultArray,setResultArray] = useState([])
  useEffect(() => {
    setResultArray([])
    if (word) {
        console.log(word)
        const fetchDictionary = async () => {
            const options = {
                method: 'GET',
                url: 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary',
                params: { word: word },
                headers: {
                    'X-RapidAPI-Key': 'df9c785ademshfa84631e3184d34p166d4djsn6c2950c335c7',
                    'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
                }
            };
            
            try {
                setLoading(true)
                const response = await axios.request(options);
                console.log(response.data);
                setResult(response.data)
                if(response.data.definition && response.data.valid){
                    const definitionsArray = response.data.definition.split(';').filter(Boolean);
                    setResultArray(definitionsArray);
                    setLoading(false)
                    if(response.data.valid===false){
                      setLoading(false)
                      setResultArray(['No relevant Synonyms found'])
                    }
                }
            } catch (error) {
                console.error(error);
            }
        };
        
    fetchDictionary();
}
}, [word]);


  return (
    
    <div className="dictionary">
        <img className='image' src={logo} alt="logo" title="Zeno"/>
        <label className="label" htmlFor="image">Unleashing Words, Defining Worlds with Zeno Word</label>
        <div className="search">
        <input
            id="searchBar"
            onChange={(e) => setInput(e.target.value)}
            className="searchBar"
            type="text"
            placeholder="Search Zeno Word "
            />
        <button onClick={() => setWord(input)} className="SearchButton">
            Search
        </button>
        </div>
        {loading && <LoadingSplash/>}
      {result && 
      <p>{resultArray ? resultArray.map((item) => ( <div className="unolist">
        <div>{item}</div>
      </div>  )) : "No Proper Meaning found"}</p>
}
    </div>
  );
}

export default Dictionary;
