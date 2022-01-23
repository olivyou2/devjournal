import FooterCSS from "../../styles/components/index/footer.module.css"

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
                                    E-mail - toolscomfact@gmail.com
                                </li>
                                <li>
                                    Web - blog.devjournal.io
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