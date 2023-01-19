import React from "react";
import ReactDOM from "react-dom/client"

const heading1=React.createElement('h1',{
    style:{
        color:"yellow"
    },
},"Header One")

const heading2 = React.createElement('h2',{},"Header Two")

const heading3= React.createElement('h3',{
    className:"hello"
},"Header Three")

const div=React.createElement('div',{},[heading1,heading2,heading3])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(div)