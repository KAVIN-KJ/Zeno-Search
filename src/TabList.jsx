import React, { createContext, useContext, useState } from "react";
import Tab from './Tab'
import './Styles/TabList.css'
import { BrowserRouter, Link } from "react-router-dom";
export const tabListContext = createContext();
function TabList(props){
    const [act,setAct] = useState()
    const [tablist,setTabList] = useState(props.list)
    function createNewTab(){
        setTabList([...tablist,{active:false }])
    }
function handleInput(event){
    setAct(!act)
}
    return(
        <>
            <tabListContext.Provider value={{ tablist, setTabList, act, setAct}}>
            <div className="tabs">
                <div className="closedTabs" title="closedTabs">
                <i class="fa-solid fa-circle-chevron-down"/>
                </div>
                <div className="openTabs">
                   { tablist.map((tablist,i) =><div id="Tab"> 
                   {/* <BrowserRouter> */}
                                <Tab index={i} onClick={handleInput} active={act} title={tablist.title}/>
                   {/* </BrowserRouter> */}
                    </div>
                    )
                }
                <i onClick={createNewTab} id="addTab" class="fa-solid fa-square-plus"/>
                </div>
            </div>
            </tabListContext.Provider>
        </>
    )
}
TabList.defaultProps = {
    list: [{text:"New Tab",active:true}],
}

export default TabList;