import SubHeaderCss from "../../styles/components/index/subheader.module.css";

const SubHeader = () => {
    return (
        <div className={SubHeaderCss.SubHeader}>
            <div className={SubHeaderCss.SubHeaderInside}>
                Welcome!
            </div>
        </div>
    );
}

export default SubHeader;