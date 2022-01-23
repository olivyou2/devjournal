import React, { useEffect, useState } from "react";
import WriteCSS from "../../styles/components/post/write.module.css";

let timer = null;

const Write = (props) => {
    let [height, setHeight] = useState(50);
    let [text, setText] = useState("");
    let [ctrl, setCtrl] = useState(false);
    let [shift, setShift] = useState(false);
    let [isCode, setIsCode] = useState(false);
    let textAreaRef = React.createRef();
    
    useEffect(() => {
        if (props.onImediateUpdate){
            props.onImediateUpdate(text);
        }

        let isCodeVar = false;

        let slices = text.slice(0, textAreaRef.current.selectionStart).split("\n");
        
        for (let line of slices){
            if (line.startsWith("~~~~")){
                if (isCodeVar){
                    isCodeVar = false;
                }else{
                    isCodeVar = true;
                }
            }
        };

        setIsCode(isCodeVar);
    }, [text]);

    return (
        <div className={WriteCSS.write}>
            <div className={WriteCSS.writeHeader}>
                Write
            </div>
            
            <textarea 
                ref={textAreaRef}
                type={"text"} 
                className={WriteCSS.writeInput} 
                onKeyDown={
                    (e) => {
                        //console.log(e.key);

                        if (e.key === "Tab"){
                            e.preventDefault();

                            if (shift){
                                let slices = e.target.value.split("\n");
                                let selection = e.target.selectionStart;
                                let doTable = {};
                                let firstDeletecount = -1;

                                let selectStart = e.target.selectionStart;
                                let selectEnd = e.target.selectionEnd;

                                for (let select = selectStart; select <= selectEnd; select ++){
                                    let portionSlices = e.target.value.slice(0, select).split("\n");

                                    if (doTable[portionSlices.length]){
                                        continue;
                                    }
                                    
                                    doTable[portionSlices.length] = true;
                                    let lastSlice = slices[portionSlices.length - 1];
    
                                    let spaces = 0;
                                    for (let letter of lastSlice){
                                        if (letter !== " "){
                                            break;
                                        }else{
                                            spaces ++;
                                        }
                                    }
    
                                    let deleteCount = spaces >= 4 ? 4 : spaces;
                                    if (firstDeletecount === -1) {
                                        firstDeletecount = deleteCount;
                                    }
                                    
                                    console.log(deleteCount);
                                    
                                    let modify = lastSlice.slice(deleteCount);
                                    console.log(modify);
                                    slices[portionSlices.length - 1] = modify;
                                    e.target.value = slices.join("\n");
    
                                    setText(e.target.value);
                                }
    
                                e.target.selectionStart = selection-firstDeletecount;
                                e.target.selectionEnd = selection-firstDeletecount;
                                
                                

                            }else{
                                if (e.target.selectionStart !== e.target.selectionEnd){
                                    let selection = e.target.selectionStart;
                                    let slices = e.target.value.split("\n");

                                    let doTable = {};

                                    for (let select=e.target.selectionStart; select<=e.target.selectionEnd; select++){
                                        let portionSlices = e.target.value.slice(0, select).split("\n");

                                        if (doTable[portionSlices.length]){
                                            continue;
                                        }

                                        doTable[portionSlices.length] = true;

                                        let lastSlice = slices[portionSlices.length-1];
                                        slices[portionSlices.length-1] = "    " + lastSlice;
                                    }

                                    e.target.value = slices.join("\n");
                                    setText(e.target.value);

                                    e.target.selectionStart = selection + 4;
                                    e.target.selectionEnd = selection + 4;
                                }else{
                                    let pre = e.target.value.slice(0, e.target.selectionStart);
                                    let after = e.target.value.slice(e.target.selectionStart);

                                    let selection = e.target.selectionStart;

                                    e.target.value = pre + "    " + after;
                                    setText(e.target.value);

                                    e.target.selectionStart = selection + 4;
                                    e.target.selectionEnd = selection + 4;
                                }
                            }
                        }

                        if (e.ctrlKey || e.metaKey){

                            var code = e.which || e.keyCode;//Get key code

                            switch (code) {
                                case 83://Block Ctrl+S
                                case 87://Block Ctrl+W -- Not work in Chrome and new Firefox
                                    e.preventDefault();
                                    e.stopPropagation();

                                    if (props.onSave){
                                        props.onSave(text);
                                    }
                                    break;
                            }
                        }

                        if (isCode){
                            if (e.key === "}"){
                                let slices = e.target.value.slice(0, e.target.selectionStart).split("\n");
                                let lastSlice = slices[slices.length - 1];
                                let after = e.target.value.slice(e.target.selectionStart);

                                let spaces = 0;
                                let spaceOnly = true;

                                for (let letter of lastSlice){
                                    if (letter !== " "){
                                        spaceOnly = false;
                                        break;
                                    }else{
                                        spaces ++;
                                    }
                                }

                                if (spaceOnly && (spaces % 4 === 0) && (spaces > 0)){
                                    let selection = e.target.selectionStart;

                                    lastSlice = lastSlice.slice(4);
                                    slices[slices.length - 1] = lastSlice;
                                    
                                    e.target.value = slices.join("\n") + "}" + after;
                                    setText(e.target.value);

                                    e.target.selectionStart = selection - 3;
                                    e.target.selectionEnd = selection - 3;

                                    e.preventDefault();
                                }
                            }

                            if (e.key === "Backspace"){
                                let slices = e.target.value.slice(0, e.target.selectionStart).split("\n");
                                let lastSlice = slices[slices.length - 1];
                                let spaces = 0;
                                let spaceOnly = true;

                                for (let letter of lastSlice){
                                    if (letter !== " "){
                                        spaceOnly = false;
                                        break;
                                    }else{
                                        spaces ++;
                                    }
                                }
                                
                                if (spaceOnly && (spaces%4 === 0) && (spaces > 0)){
                                    let nowSelection = e.target.selectionStart;
                                    let pre = e.target.value.slice(0, e.target.selectionStart-4);
                                    let after = e.target.value.slice(e.target.selectionStart);

                                    e.target.value = pre + after;
                                    setText(e.target.value);
                                    e.target.selectionStart = nowSelection - 4;
                                    e.target.selectionEnd = nowSelection - 4;

                                    e.preventDefault();
                                }
                            }

                            if (e.key === "Shift"){
                                setShift(true);
                            }

                            if (e.key === "Enter"){
                                let slices = e.target.value.slice(0, e.target.selectionStart).split("\n");
                                let lastSlice = slices[slices.length - 1];
                                let spaces = 0;
                                
                                for (let letter of lastSlice){
                                    if (letter !== " "){
                                        break;
                                    }else{
                                        spaces ++;
                                    }
                                }

                                if (spaces % 4 === 0){
                                    let selection = e.target.selectionStart;

                                    let pre = e.target.value.slice(0, e.target.selectionStart);
                                    let after = e.target.value.slice(e.target.selectionStart);

                                    if ((pre[pre.length-1] === "{") || (pre[pre.length-1] === ":")){
                                        spaces += 4;
                                    }

                                    if (spaces !== 0){
                                        pre += "\n" + " ".repeat(spaces);

                                        e.target.value = pre + after;
                                        setText(pre + after); 

                                        e.target.selectionStart = selection + spaces + 1;
                                        e.target.selectionEnd = selection + spaces + 1;

                                        e.preventDefault();
                                    }
                                }
                            }
                        }
                    }
                }
                onKeyUp={(e) => {
                    if (e.key === "Shift"){
                        setShift(false);
                    }

                    if (e.key === "Meta" || e.key === "Control"){
                        setCtrl(false);
                    }
                }}
                onChange={
                    (e) => {
                        if (timer !== null){
                            clearTimeout(timer);
                        }

                        timer = setTimeout(() => {
                            if (props.onUpdate){
                                props.onUpdate(e.target.value);
                            }
                        }, 200);

                        e.target.style.height = (e.target.scrollHeight-4) + "px";
                        setHeight(e.target.scrollHeight);

                        setText(e.target.value);
                    }
                }
            ></textarea>
        </div>
    )
}

export default Write;