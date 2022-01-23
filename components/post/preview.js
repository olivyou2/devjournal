import React from "react"; 
import ReactDom from 'react-dom'
import ReactMarkdown from "react-markdown"; 

import PreviewCSS from "../../styles/components/post/preview.module.css";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
//import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'

const Preview = (props) => {     

    return (
        <div className={PreviewCSS.preview}>

            <div className={PreviewCSS.previewHeader}>
                Preview
            </div>
            <div>
                <ReactMarkdown 
                    className={PreviewCSS.previewContent} 
                    children={props.source}
                    components={{
                        code({node, inline, className, children, ...props}) {
                          const match = /language-(\w+)/.exec(className || '')
                          return !inline && match ? (
                            <SyntaxHighlighter
                              children={String(children).replace(/\n$/, '')}
                              
                              language={match[1]}
                              PreTag="div"
                              {...props}
                            />
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          )
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default Preview;