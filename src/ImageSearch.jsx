import React, { useEffect, useState } from "react";
import axios from "axios";
import './Styles/ImageSearch.css'
import Logo from './assets/Logo.png'
import LoadingSplash from "./LoadingSplash";
export default function ImageSearch(){

    const [loading,setLoading] = useState(false)
    const [query,setQuery] = useState()
    const [input,setInput] = useState()
    const [data,setData] = useState([])

    useEffect(() => {
        if(query){
        const fetchData = async () =>{
            const options = {
                method: 'GET',
                url: 'https://duckduckgo10.p.rapidapi.com/search/images',
                params: {
                  term: query,
                  region: 'in-en',
                  safeSearch: 'off'
                },
                headers: {
                  'X-RapidAPI-Key': 'df9c785ademshfa84631e3184d34p166d4djsn6c2950c335c7',
                  'X-RapidAPI-Host': 'duckduckgo10.p.rapidapi.com'
                }
              };
              
              try {
                  setLoading(true)
                  setData([])
                  const response = await axios.request(options);
                  console.log(response.data);
                  setData(response.data.data)
              } catch (error) {
                  console.error(error);
              }
              finally{
                setLoading(false)
              }
        }
        fetchData()
    }
    },[query])
    
    return(
        <>
        <div className="Search-container">
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>

            <img className="Logo" src={Logo}c />
            <div>
                <input onChange={(e) => {setInput(e.target.value)}} className="InputField" type="text" placeholder="Search for an image"/>
                <button onClick={() => {setQuery(input)}} className="search-image" >Search</button>
            </div>
            </div>
        </div>
        {loading&& <LoadingSplash/>}
        <div className="images-container" style={{display:"flex",flexWrap:"wrap"}}>

        { 
            data.map((item) => (
                <div>
                    <a href={item.image} target="blank">
                        <img className="image-result" loading="lazy" style={{height:"auto",maxWidth:"300px",margin:"5px"}} src={item.image} />
                    </a>
                </div>
            ))    
        }
        </div>
        </>
    )

}