import ContentHeaderCss from "../../../styles/components/index/content/contentHeader.module.css";

const ContentHeader = (props) => (
    <div className={ContentHeaderCss.TitleText}>
        {props.title}
    </div>
)

export default ContentHeader;