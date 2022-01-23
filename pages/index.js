import Header from "../components/index/header";
import Nav from "../components/index/nav";
import Content from "../components/index/content";

// Nav
import Category from "../components/index/nav/category";
import Journal from "../components/index/nav/journal";
import CheckView from "../components/index/nav/checkView";

// Content
import ContentHeader from "../components/index/content/header";
import Comment from "../components/index/content/comment";

import IndexCss from "../styles/pages/index.module.css";

const Index = () => (
    <div>
        <style jsx global>{`
            body {
                margin: 0px;
                padding: 0px;
            }
        `}</style>
        
        <Header></Header>
        <div className={IndexCss.MenuWrapper}>
            <Nav>
                <Category title="개발">
                    <Journal title="devjournal ... 1" view={0}/>
                    <Journal title="devjournal ... 2" view={1}/>
                </Category>

                <Category title="음악">
                    <Journal title="내가 이런걸 만들어버리다니.. 최악이구만" view={3}/>
                </Category>

                <CheckView today={10} total={555}/>
            </Nav>
            <Content>
                <ContentHeader title="마미손 - 내 인생 졸라뻥"/>
                <p>
                    내인생.. 졸라뻥.. 졸라졸라뻥.. 진짜 마미손 god bless you bb 하 화장실 가고싶다 나도 가끔 내가 무슨말을 하는건지 잘 모르겠어 ㅋㅋ 흑흑 가끔 그럴 때 있잖아 없나? 나만그래? ㅋㅋ 그럴수잇지 
                </p>
                <p>
                    댓글
                </p>
                <Comment writer="황해성" content="주말"/>
                <Comment writer="황해성" content="주말"/>
                <Comment writer="황해성" content="주말"/>
                <Comment writer="황해성" content="주말"/>
                <Comment writer="황해성" content="주말"/>
            </Content>
        </div>
    </div>
);
  
export default Index;