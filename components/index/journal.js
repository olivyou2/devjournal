import JournalCSS from "../../styles/components/index/journal.module.css";

const Journal = (props) => {
    return (
        <div className={JournalCSS.Journal}>
            <div className={JournalCSS.Banner}>
                <div className={JournalCSS.ImageWrapper}>
                    <img src={props.bannerImage} className={JournalCSS.BannerImage}/>
                </div>

                <div className={JournalCSS.Title}>
                    {props.title}
                </div>
                <div className={JournalCSS.Subtitle}>
                    {props.subtitle}
                </div>
            </div>
            <div className={JournalCSS.Author}>
                {props.author}
            </div>
        </div>
    )
}

export default Journal;