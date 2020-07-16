import React, {useState,useEffect} from "react";

const useTitle=(initialTitle)=>{
    const [title,setTitle] = useState(initialTitle)
    const updateTitle=()=>{
        const htmlTitle = document.querySelector("title")
        htmlTitle.innerText=title;
    }
    useEffect(updateTitle,[title])
    return setTitle
}

const Usetitle=()=>{
    const titleUpdater = useTitle("Loading..")
    setTimeout(()=>{
        titleUpdater("UseTitle")
    },3000)
    return(
        <div className="container">
            <h3>usetitle</h3>
            <p>기다리면 타이틀이 변경됩니다~</p>
        </div>
    )
}

export default Usetitle;