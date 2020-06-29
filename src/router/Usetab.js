import React,{useState} from "react"

const content = [
    {
        tab:"section 1",
        content:"I'm the content of the Section 1",
        id:1
    },
    {
        tab:"section 2",
        content:"I'm the content of the Section 2",
        id:2
    }
]
  
const useTab=(initialTab,allTabs)=>{
    // if(!allTabs || !Array.isArray(allTabs)){
    //     return;
    // }

    const [currentIndex,setCurrentIndex] = useState(initialTab)

    return {
        currentItem : allTabs[currentIndex],
        changeItem:setCurrentIndex
    }
}

const Usetab=()=>{
    const {currentItem,changeItem} = useTab(0,content)
    return(
        <div className="container">
            <h3>USE TAB</h3>
            {content.map((section,index)=>(
                <button key={section.id} onClick={()=>changeItem(index)}>{section.tab}</button>
            ))}
            <div>{currentItem.content}</div>
        </div>
    )
}

export default Usetab;