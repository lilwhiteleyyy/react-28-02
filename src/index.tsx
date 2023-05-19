import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

// React Element
const title = React.createElement(`h1`, { id: `title` }, `Hello React`)

// JSX

// const app = (
//     <div>
//         <h1 id="text">Hello App</h1>
//         <p>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
//             earum alias? Earum nihil esse aspernatur harum magni corporis, sequi
//             delectus minima ipsum rem debitis excepturi natus, sunt ex maxime
//             cum.
//         </p>
//     </div>
// )

const Title = () => {
    return <h1>Hello App component</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p className= "red"> 
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Cupiditate ad, cumque, reprehenderit maxime fuga sit id non
                ipsum quidem pariatur ipsam quam voluptatem consectetur sed
                accusantium optio ea explicabo cum?
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quibusdam nobis quos iste odit dolorem possimus explicabo
                exercitationem magni quam sed!
            </p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
