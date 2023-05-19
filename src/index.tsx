import React from 'react'
import ReactDOM from 'react-dom/client'

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

const App = () => {
    return ( <div><h1>Hello App component</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate ad, cumque, reprehenderit maxime fuga sit id non ipsum quidem pariatur ipsam quam voluptatem consectetur sed accusantium optio ea explicabo cum?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate ad, cumque, reprehenderit maxime fuga sit id non ipsum quidem pariatur ipsam quam voluptatem consectetur sed accusantium optio ea explicabo cum?</p>
    </div> 
    )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>
    <App/>
</React.StrictMode>)
