const heading1=React.createElement('h1',{
    style:{
        color:"yellow"
    },
},"Header One")

const heading2 = React.createElement('h2',{},"Header Two")

const heading3= React.createElement('h3',{
    class:"hello"
},"Header Three")

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render([heading1,heading2,heading3])