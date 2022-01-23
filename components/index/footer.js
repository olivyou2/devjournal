import FooterCSS from "../../styles/components/index/footer.module.css";

import { AiOutlineMail } from "react-icons/ai";
import { ImEarth } from "react-icons/im";
import { BsTelephone } from "react-icons/bs"

const Footer = () => {
    return (
        <div>
            <div className={FooterCSS.Footer}>
                <div className={FooterCSS.FooterInside}>
                    <div className={FooterCSS.Column}>
                        <div className={FooterCSS.Header}>
                            Contact
                        </div>

                        <div className={FooterCSS.Row}>
                            <ul>
                                <li>
                                    <AiOutlineMail/> toolscomfact@gmail.com
                                </li>
                                <li>
                                    <ImEarth/> blog.devjournal.io
                                </li>
                                <li>
                                    <BsTelephone/> +82 010-4166-1683
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={FooterCSS.Column}>
                        <div className={FooterCSS.Header}>
                            About Channel
                        </div>

                        <div className={FooterCSS.Row}>
                            <ul>
                                <li>
                                    오픈 채팅
                                </li>
                                <li>
                                    Github
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={FooterCSS.FooterCopyright}>
                    <div className={FooterCSS.FooterCopyrightInside}>
                        Copyright olivyou2. All rights reserved.
                    </div>
                </div>
        </div>
    )
}

export default Footer;