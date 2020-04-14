import React, {useState, useEffect} from 'react';
import NasaCard from './NasaCard';
import Axios from '../../node_modules/axios';


const NasaList= ()=>{

    // Step 1: declare const
    const [nasa,setNasa]= useState([]);

    // Step 2: create useEffect to get the data & console.log it to see it
    useEffect(()=>{
        Axios
            .get("https://api.nasa.gov/planetary/apod?api_key=hEemaeay3hhGx3cAH8pvJckK2ha2HIBEFYdbA4p7")
            .then(resp => {
                console.log(resp)
                setNasa([resp.data])

            })
            .catch(err => console.log("error " + err));
    }, []);

    return(
        <>
            {nasa.map((dataz,index) =>{
                return (
                    <NasaCard 
                    key={index}
                    url={dataz.url}
                    title={dataz.title}
                    explanation={dataz.explanation}
                    date={dataz.date}
                    />
                )
            })}
            </>
    )
}
export default NasaList