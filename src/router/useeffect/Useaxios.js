import React, { useState, useEffect } from "react"
import defaultAxios from "axios";

const useAxios=(option,axiosInstance=defaultAxios)=>{
    const [state,setState]=useState({
        loading:true, error:null, data:null
    })
    // console.log("state:  ",state)
    if(!option.url){
        return
    }
    useEffect(()=>{
        axiosInstance(option)
            .then(data=>{
                setState({
                    ...state,
                    loading:false,
                    data
                })
            })
            .catch(error=>{
                setState({...state,loading:false,error})
            })
    },[])
    return state
}

const Useaxios=()=>{
    const {loading,error,data} = useAxios({url:"https://yts.am.api/v2/list_movies.json"})
    console.log(`Loading : ${loading}\nError : ${error}\nData : ${data}`)
    return(
        <div className="container">
            <h3>Useaxios</h3>
        </div>
    )
}

export default Useaxios