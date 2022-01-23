import JournalCss from "../../../styles/components/index/nav/journal.module.css"

const Journal = (props) => (
    <div className={JournalCss.Journal}>
        {props.title} ({props.view})
    </div>
)

export default Journal;