import ContentCss from "../../styles/components/index/content.module.css";

const Content = (props) => (
    <div className={ContentCss.Content}>
        {props.children}
    </div>
);

export default Content;