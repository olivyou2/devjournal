import { useEffect, useState } from "react";
import JournalsCSS from "../../styles/components/index/journals.module.css";

import Journal from "./journal";

const Journals = () => {
    let [templateArray, setTemplateArray] = useState([]);

    useEffect(() => {
        setTemplateArray([
            {
                bannerImage: "https://github.blog/wp-content/uploads/2021/12/GitHub-code-search_banner.png?fit=1200%2C630",
                title: "Github",
                subtitle: "코드관리",
                author: "Olivyou2"
            },

            {
                bannerImage: "https://github.githubassets.com/images/modules/site/codespaces/illo-codespaces-desktop.png",
                title: "VS CODE",
                subtitle: "여러 모듈을 갖춘 범용 코드에디터",
                author: "Olivyou2"
            },
            
            {
                bannerImage: "https://t4.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/7E8/image/-ffZfjm3mItO4-sWhmLq91LTd10.png",
                title: "MNIST DATASET 으로 VGG19 배우기",
                subtitle: "근데 이거 처리하려고 VGG19를 쓴다고?",
                author: "Olivyou2"
            },

            {
                bannerImage: "https://tech.kakao.com/files/employment.jpg",
                title: "카카오 공채 후기",
                subtitle: "코테 하나맞춤 ㅋㅋ",
                author: "Olivyou2"
            },

            {
                bannerImage: "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/ZN57TKGGQFKXW73VI4TCO6ABPI.png",
                title: "네이버 공채 후기",
                subtitle: "너무 어려워서 면접관 멱살잡고 끌려나옴",
                author: "Olivyou2"
            },

            {
                bannerImage: "https://tumblbug-pci.imgix.net/59e4705fa23235cff63a8ffd4eced13035809d9a/58956bbb04994c33a4f4d196c426032ca7f8a22b/c4707d781fc23ffd2e7446043d1f47a7e2604c5d/427683fd-503c-4913-b7f1-90e0399247a3.png?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=4adf151ae0a15826ba000bdda70eeb0a",
                title: "마일드티니의 흥망성쇠",
                subtitle: "끝없는 나락",
                author: "Terishe"
            }
            
        ])
    }, []);

    //https://github.githubassets.com/images/modules/site/codespaces/illo-codespaces-desktop.png
   
    return (
        <div className={JournalsCSS.Journals}>
            <div className={JournalsCSS.HeaderWrapper}>
                <div className={JournalsCSS.Header}>
                    Journals
                </div>
            </div>
            <div className={JournalsCSS.JournalGrid}>
                {
                    templateArray.map(
                        (template, ind) => (
                            <Journal
                                bannerImage={template.bannerImage}
                                title={template.title}
                                subtitle={template.subtitle}
                                author={template.author}
                            />
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Journals;