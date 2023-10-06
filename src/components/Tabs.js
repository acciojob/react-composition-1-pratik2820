import React,{useState} from "react";

const Tabs = ({tabs}) =>{

    const [currentTab, setCurrentTab] = useState('Tab 1');

    return (
        <div className="tabs">
            <ul>
                <li onClick={()=>setCurrentTab('Tab 1')}>Tab 1</li>
                <li onClick={()=>setCurrentTab('Tab 2')}>Tab 2</li>
                <li onClick={()=>setCurrentTab('Tab 3')}>Tab 3</li>
            </ul>
            {currentTab && 
                <p>This is the content for {currentTab}.</p>
            } 
        </div>
    )
    
        
    
}

export default Tabs;