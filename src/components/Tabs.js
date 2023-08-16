import React,{useState} from "react";

const Tabs = ({tabs}) =>{

    let [tabClicked,SetTabClicked] = useState("");

    function handleClick(content){
        SetTabClicked(content);

    }
   
    return(
        <div>
            <ul>
            {
                tabs.map((value)=>
                    <li onClick={()=>handleClick(value.content)}>{value.title}</li>
                )
            }
            </ul>
            {
                // tabClicked !==""?<p>This is the content for {tabClicked}</p>:""

                tabClicked && <p>This is the content for {tabClicked}</p>
            }
        </div>
    )
}

export default Tabs;