import React, { useEffect, useState } from "react";
import './Styles/ZenoNews.css'
import axios from 'axios';
import NewsArticle from "./NewsArticle";
import LoadingSplash from "./LoadingSplash";

export default function ZenoNews(){
const [articles,setArticle] = useState([])
const [loading,setLoading] = useState()


const [category,setCategory] = useState("Trending")
        function handleCategory(e){
            setCategory(e.target.value)
            console.log(e.target.value)
        }


    useEffect(() =>{
            const getNews = async () => {
                const options = {
                    method: 'GET',
                    url: 'https://duckduckgo10.p.rapidapi.com/search/news',
                    params: {
                        term: category,
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
            setArticle([])
            const response = await axios.request(options);
            console.log(response.data);
            setArticle(response.data.data)  
            console.log(articles)
        } catch (error) {
            console.error(error);
        }
        finally{
            setLoading(false)
        }
        }
        getNews()},[category])
            
    return(
        <div style={{position:"relative",bottom:"40px"}}>
<div className="Categories">
                    <input defaultChecked={true} onChange={handleCategory} name="categories" id="Trending" type="radio" value={"Trending"}/>
                    <label htmlFor="Trending">Trending</label>
                    <input onChange={handleCategory} name="categories" id="Sports" type="radio" value={"Sports"}/>
                    <label htmlFor="Sports">Sports</label>
                    <input onChange={handleCategory} name="categories" id="Politics" type="radio" value={"Politics"}/>
                    <label htmlFor="Politics">Politics</label>
                    <input onChange={handleCategory} name="categories" id="World" type="radio" value={"World"}/>
                    <label htmlFor="World">World</label>
                    <input onChange={handleCategory} name="categories" id="Science" type="radio" value={"Gaming"}/>
                    <label htmlFor="Science">Gaming</label>
                    <input onChange={handleCategory} name="categories" id="Technology" type="radio" value={"Technology"}/>
                    <label htmlFor="Technology">Technology</label>
                    <input onChange={handleCategory} name="categories" id="Cinema" type="radio" value={"Cinema"}/>
                    <label htmlFor="Cinema">Cinema</label>
                </div>
                <h1 style={{textAlign:"center",textTransform:"uppercase",fontSize:"3em"}}>{category} news</h1>

            {loading && <LoadingSplash/> }
            {
               ( <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>{

                articles.map((item) => (    
                    <div>
                            <div>
                                <NewsArticle data ={item}/>
                            </div>
                        </div>
                     ))
                }
                     
                </div>)
                    }
        </div>
    )
}
