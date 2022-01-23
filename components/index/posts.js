import PostsCSS from "../../styles/components/index/posts.module.css";
import FeaturedPost from "./featured";

const Posts = (prop) => {
    return (
        <div>
            <div className={PostsCSS.PostWrapper}>
                <FeaturedPost
                    title = "AlexNet 을 활용한 암호화폐 가격 예측하기. 1"
                    subtitle = "CNN - 1"
                    bannerImage = "https://public.bnbstatic.com/image/cms/article/body/zendesk_en_115002995711/ZD6tc5NbS5LxXTiCQbgvkA%3D%3D.png"
                    author = "Olivyou2"
                />
            </div>
        </div>
    )
}

export default Posts;