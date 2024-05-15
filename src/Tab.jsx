import React, { useState } from "react";
import './Styles/Tab.css'
import { tabListContext } from "./TabList";
import { useContext } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Tab(props){
    const { tablist, setTabList, closeTab }  = useContext(tabListContext);
    const [active,activate] = useState(false)
    var index = props.index
    function handleCloseTab() {
        console.log(props.index)
        if(tablist.length===1) return
        const newTabList = tablist.filter((_, i) => (i !== props.index));
        setTabList(newTabList);
      }
      function setActive(){
        activate(!active)
      }
    return(
        <>
            
            <Link style={{textDecoration:"none",color:"black"}} to='/Home'>
                <div onClick={setActive} className={active ? "tabcontainerActive" : "tabcontainerActive"}>
                    <i class="fa-solid fa-bolt"></i>                    
                    <div className="Title" >{props.title}</div>
                    <i onClick={handleCloseTab} id="close" class="fa-solid fa-circle-xmark"/>
                </div>
            </Link>
        </>
    )
}
Tab.defaultProps = {
    title : "New Tab",
    active: (false)
}
export default Tab