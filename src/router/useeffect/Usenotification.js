import React, { useEffect } from "react"

const useNotification=(title,options)=>{
    if(!("Notification" in window)){
        return;
    }
    const fireNotif=()=>{
        if(Notification.permission!=="granted"){
            Notification.requestPermission().then(permission =>{
                if(permission=="granted"){
                    new Notification(title,options)
                }
                else{
                    return
                }
            })
        }
        else{
            new Notification(title,options)
        }   
    }
    return fireNotif
}

const Usenotification=()=>{
    const triggerNotif = useNotification("You clicked button!",{body:"clicked button!!!!!!!!!!!"})
    return(
        <div className="container">
            <h3>Usenotification</h3>
            <button className="btns" onClick={triggerNotif}>Click!</button>
        </div>
    )
}
// https://developer.mozilla.org/ko/docs/Web/API/notification
export default Usenotification