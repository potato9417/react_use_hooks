import React,{useRef, useEffect} from "react";

const useFadeIn=(duration=1,delay)=>{
    
    const element = useRef()
    useEffect(()=>{

    console.log(element.current)
        if(typeof duration!=="number" || typeof delay!=="number"){
            return
        }
        if(element.current){
            const {current} = element

            current.style.transition=`opacity ${duration}s ease ${delay}s`
            current.style.opacity=1
        }
    },[])
    return {ref:element,style:{opacity:0}}
}

const Usefadein=()=>{
    const fadeInH1 = useFadeIn(2,0)
    const fadeInP = useFadeIn(5,1)
    return(
        <div className="container">
            <h3 {...fadeInH1}>usefadein</h3>
            <p {...fadeInP}>Im in here!</p>
        </div>
    )
}

export default Usefadein