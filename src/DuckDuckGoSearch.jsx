import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { queryContext } from './Search';
import SearchResult from './SearchResult';
import LoadingSplash from './LoadingSplash';
const DuckDuckGoSearch = (props) => { 
  const [demoquery,setDemo] = useState(queryContext ? useContext(queryContext): null)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [query, setQuery] = useState();
  const[input, setInput] = useState();
  const handleSearchClick = () => {
    setQuery(input);
    console.log(input)
};

function changeInput(event){
      setInput(event.target.value)
}



useEffect(() => {
    if(query){
      setLoading(true)
      const fetchData = async () =>{
      const options = {
      method: 'GET',
      url: 'https://duckduckgo10.p.rapidapi.com/search',
      params: {
          term: `${query}`,
          safeSearch: 'off',
          region: 'wt-wt'
      },
      headers: {
          'X-RapidAPI-Key': 'df9c785ademshfa84631e3184d34p166d4djsn6c2950c335c7',
          'X-RapidAPI-Host': 'duckduckgo10.p.rapidapi.com'
      }
      };

      try {
          setLoading(true)
          setData([]);
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
   
    return (
      <>
    <div>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <div>
          <input onChange={changeInput} id="searchBar" className="searchBar" type="text" placeholder="Search Zeno or type a URL" />
          <button onClick={handleSearchClick}  className="SearchButton">Search</button>
        </div>
      {loading && <p><LoadingSplash/></p>}
      {error && <p>Error: {error}</p>}
        {data && data.map((item, index) => (
          <SearchResult icon={item.icon} title = {item.title} url ={item.url} desc = {item.description} />
          ))}
      </div>
      <div className='Search'></div>
    </div>
</>
  );
};

export default DuckDuckGoSearch;
