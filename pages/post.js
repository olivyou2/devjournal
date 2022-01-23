import React, { useState } from "react"; 

import PostCSS from "../styles/pages/post.module.css";

import Header from "../components/index/header";
import Preview from "../components/post/preview";
import Write from "../components/post/write";
import PostHeader from "../components/post/header";

export default () => { 
    let [source, setSource] = useState("");
    let [savedTime, setSavedTime] = useState(null);
    
    return ( 
        <div> 
            <style jsx global>{`
                body {
                    margin: 0px;
                    padding: 0px;
                }
            `}</style>

            <Header/>
            <PostHeader savedTime={savedTime}/>

            <div className={PostCSS.MenuWrapper}>

                <Write 
                    onImediateUpdate={(value) => {
                        if (value){
                            setSource(value);
                        }else{
                            setSource("### 글을 작성해주세요!")
                        }
                    }}

                    onSave={(content) => {
                        console.log("save");
                        console.log(content);

                        setSavedTime(Date.now());
                    }}
                />

                <Preview source={source}/>


            </div>
        </div> 
    ) 
};
