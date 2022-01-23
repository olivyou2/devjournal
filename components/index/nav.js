import NavCss from "../../styles/components/index/nav.module.css"

const Nav = (props) => (
    <div className={NavCss.Nav}>
        {props.children}
    </div>
);

export default Nav;