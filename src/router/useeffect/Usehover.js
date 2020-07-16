import React,{useEffect,useRef} from "react"

const useHover = (onHover=>{
    const element = useRef();
    useEffect(()=>{
        if(typeof onHover !== "function"){
            return
        }
        if(element.current){
            element.current.addEventListener("mouseenter",onHover)
        }
        return ()=>{
            if(!element.current){
                element.current.removeEventListner("mouseenter",onHover)
            }
        }
    },[])
    return element
})

const Usehover=()=>{
    const sayHello=()=>{alert("hover")}
    const title = useHover(sayHello)
    return(
        <div className="container">
            <h3>Usehover</h3>
            <p className="hover" ref={title}>Mouse Enter!</p>
        </div>
    )
}

export default Usehover;