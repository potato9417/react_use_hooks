import React, { useState, useEffect } from "react"
import defaultAxios from "axios";

const useAxios=(option,axiosInstance=defaultAxios)=>{
    const [state,setState]=useState({
        loading:true, error:null, data:null
    })
    // console.log("state:  ",state)
    
    const [trigger,setTrigger]=useState(0)

    const refetch=()=>{
        console.log("clcik")
        setState({
            ...state,
            loading:true
        })
        setTrigger(Date.now())
    }

    useEffect(()=>{
        if(!option.url){
            return
        }
        
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
    },[trigger])
    return {...state,refetch}
}

const Useaxios=()=>{
    const {loading,error,data,refetch} = useAxios({url:"https://yts-proxy.now.sh/list_movies.json"})
    console.log(`Loading : ${loading}\nError : ${error}\nData : ${JSON.stringify(data)}`)
    return(
        <div className="container">
            <h3>Useaxios</h3>
            <p>{loading&&"Loading"}</p>
            <p>{data &&data.status}</p>
            <button onClick={refetch}>Refetch</button>
        </div>
    )
}

export default Useaxios