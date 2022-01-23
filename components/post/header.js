import { useEffect, useState } from "react";
import HeaderCSS from "../../styles/components/post/header.module.css";

const PostHeader = (props) => {
    let [t, setT] = useState(0);
    let [text, setText] = useState("아직 저장되지 않았습니다.");

    useEffect(() => {
        
    }, [props.savedTime]);

    useEffect(() => {
        setTimeout(() => {
            setT(t+1);

            let timeDuration = Math.floor((Date.now() - props.savedTime) / 1000);

            if (timeDuration < 60){
                text = `${timeDuration} 초 전 저장됨`;
            }else if (timeDuration < 3600){
                let minute = Math.floor(timeDuration / 60);
                text = `${minute} 분 전 저장됨`;
            }else if (timeDuration < 3600 * 24){
                let hour = Math.floor(timeDuration / 3600);
                text = `${hour} 시간 전 저장됨`;
            }else{
                let days = hour / 86400;
                text = `${days} 일 전 저장됨`;
            }

            setText(text);
        }, 100)
    })

    return (
        <div className={HeaderCSS.PostHeader}>
            <div className={HeaderCSS.HeaderWrapper}>
                <div className={HeaderCSS.PostSaved}>
                    {text}
                </div>
                <div className={HeaderCSS.PostUpload}>
                    <div>
                        Upload
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostHeader;