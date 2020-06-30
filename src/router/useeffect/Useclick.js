import React,{useEffect,useRef} from "react"

const useClick = (onClick=>{
    const element = useRef();
    useEffect(()=>{
        if(typeof onClick !== "function"){
            return
        }
        if(element.current){
            element.current.addEventListener("click",onClick)
        }
        return ()=>{
            if(element.current){
                element.current.removeEventListner("click",onClick)
            }
        }
    },[])
    return element
})

const Useclick=()=>{
    const sayHello=()=>{console.log("hi")}
    const title = useClick(sayHello)
    return(
        <div className="container">
            <h3>Useclick</h3>
            <button ref={title}>click me!</button>
        </div>
    )
}

export default Useclick;