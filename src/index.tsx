import React from 'react'
import ReactDOM from 'react-dom/client'

// React Element
const title = React.createElement(`h1`, { id: `title` }, `Hello React`)

// JSX

const app = (
    <div>
        <h1 id="text">Hello App</h1>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            earum alias? Earum nihil esse aspernatur harum magni corporis, sequi
            delectus minima ipsum rem debitis excepturi natus, sunt ex maxime
            cum.
        </p>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{app}</React.StrictMode>)
