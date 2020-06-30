import React from "react"

const useConfirm=(message="",callback,rejection)=>{
    if(typeof callback !=="function"){
        return;
    }
    const confirmAction =()=>{
        if(window.confirm(message)){
            callback()
        }
        else{
            rejection()
        }
    }
    return confirmAction
}

const Useconfirm=()=>{
    const deleteWorld =()=>{
        console.log("Deleteing the World..")
    }
    const saveWorld =()=>{
        console.log("Save the World!")
    }
    const confirmDelete= useConfirm("Are you sure?",deleteWorld,saveWorld)
    return(
        <div className="container">
            <h3>useconfirm</h3>
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    )
}

export default Useconfirm