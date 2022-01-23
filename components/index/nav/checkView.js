import CheckViewCss from "../../../styles/components/index/nav/checkView.module.css"

const CheckView = (props) => (
    <div>
        <div className={CheckViewCss.CheckViewToday}>
            Today: {props.today}
        </div>

        <div className={CheckViewCss.CheckViewTotal}>
            Total: {props.total}
        </div>
    </div>
)

export default CheckView;