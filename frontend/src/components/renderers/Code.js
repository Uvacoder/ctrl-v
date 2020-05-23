import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneLight, ascetic, atomOneDark, dracula, ocean } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import styled from 'styled-components'

export const THEMES = Object.freeze({
    'atom': atomOneLight,
    'atom dark': atomOneDark,
    'plain': ascetic,
    'dracula': dracula,
    'ocean': ocean,
})

export const LANGS = Object.freeze({
    'bash': 'bash',
    'c': 'c',
    'c++': 'cpp',
    'c#': 'cs',
    'css': 'css',
    'docker': 'dockerfile',
    'go': 'go',
    'haskell': 'haskell',
    'html': 'html',
    'java': 'java',
    'js': 'javascript',
    'latex': 'latex',
    'lisp': 'lisp',
    'makefile': 'makefile',
    'markdown': 'markdown',
    'php': 'php',
    'python': 'python',
    'raw': 'text',
    'ruby': 'ruby',
    'scala': 'scala',
    'yaml': 'yaml'
})

const StyledPre = styled.pre`
  padding: 0 !important;
  margin: 0;
`

const CodeBlock = styled.div`
  width: 100%;
  font-size: 0.8em;
  padding: calc(0.8em - 1px) !important;
  border-radius: 3px;
  border: 1px solid #565656;
  outline: none;
  margin: 1.7em 0;
`

const CodeRenderer = React.forwardRef((props, ref) => {

    const Pre = (props) => {
        return (
            <StyledPre {...props} ref={ref} />
        );
    }

    return (
        <CodeBlock className="lt-shadow">
            <SyntaxHighlighter
                ref={ref}
                language={props.lang}
                style={THEMES[props.theme]}
                showLineNumbers
                PreTag={Pre}>
                {props.content}
            </SyntaxHighlighter>
        </CodeBlock>
    );
});

export default CodeRenderer