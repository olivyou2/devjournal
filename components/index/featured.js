import React, { useEffect } from "react";
import FeaturedCSS from "../../styles/components/index/featured.module.css";

const FeaturedPost = (props) => {
    
    return (
        <div>
            <div className={FeaturedCSS.Header}>
                <div className={FeaturedCSS.HeaderWrapper}>
                    Spotlight
                </div>
            </div>
            
            <div className={FeaturedCSS.Featured}>
                <div className={FeaturedCSS.ImgWrapper}>
                    <img src={`${props.bannerImage}`} className={FeaturedCSS.FeaturedImg}/>
                </div>

                <div className={FeaturedCSS.FeaturedInner}>
                    {props.title}
                    <div className={FeaturedCSS.Subtitle}>
                        {props.subtitle}
                    </div>
                </div>
            </div>

            <div className={FeaturedCSS.Author}>
                {props.author}
            </div>
        </div>
    )
}

export default FeaturedPost;