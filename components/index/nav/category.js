import CategoryCss from "../../../styles/components/index/nav/category.module.css"

const Category = (props) => (
    <div className={CategoryCss.Category}>
        <div className={CategoryCss.CategoryName}>
            <div className={CategoryCss.CategoryLeft}>
                {props.title}
            </div>
            <div className={CategoryCss.CategoryRight}>
                +
            </div>
        </div>
        {props.children}
    </div>
)

export default Category;