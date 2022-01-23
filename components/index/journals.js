import JournalsCSS from "../../styles/components/index/journals.module.css";

import Journal from "./journal";

const Journals = () => {
    return (
        <div className={JournalsCSS.Journals}>
            <div className={JournalsCSS.HeaderWrapper}>
                <div className={JournalsCSS.Header}>
                    Journals
                </div>
            </div>
            <Journal/>
        </div>
    )
}

export default Journals;