import CommentCss from "../../../styles/components/index/content/comment.module.css";

const Comment = (props) => (
    <div className={CommentCss.Comment}>
        <div className={CommentCss.Writer}>{props.writer}</div>
        <div className={CommentCss.Content}> {props.content}</div>
    </div>
)

export default Comment;