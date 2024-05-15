import React, { useEffect } from "react";
import axios from "axios";
export default function BackupSearch(){
    useEffect(() => {
        const fetchData = async () =>{
            const options = {
            method: 'GET',
            url: 'https://duckduckgo10.p.rapidapi.com/search',
            params: {
                term: 'Hello',
                safeSearch: 'off',
                region: 'wt-wt'
            },
            headers: {
                'X-RapidAPI-Key': 'df9c785ademshfa84631e3184d34p166d4djsn6c2950c335c7',
                'X-RapidAPI-Host': 'duckduckgo10.p.rapidapi.com'
            }
            };

            try {
                const response = await axios.request(options);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData()

    })


    return(
        <div></div>
    )

}