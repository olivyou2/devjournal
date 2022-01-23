import Footer from "../components/index/footer"
import Header from "../components/index/header"
import Posts from "../components/index/posts"
import SubHeader from "../components/index/subheader"

export default () => {
    return (
        <div>
            <style jsx global>{`
                body {
                    margin: 0px;
                    padding: 0px;
                }
            `}</style>
            
            <Header/>
            <SubHeader/>
            
            <Posts/>
            <Footer/>
        </div>
    )
}