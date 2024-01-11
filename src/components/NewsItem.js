import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ModeContext from '../context/mode/ModeContext'

function NewsItem(props) {

    const a = useContext(ModeContext);

    return (
        <div className={`card my-3 ${a.mode === "dark" ? "text-light bg-dark border-white" : "text-dark bg-light"}`}>
            <img src={`${props.image_url}`} className={`card-img-top ${a.mode === "dark" ? "border-bottom border-white" : ""}`} alt="img" style={{ height: '175px' }} />
            <div className={`card-body ${a.mode === "dark" ? "text-light bg-dark" : "text-dark bg-light"}`}>
                <h5 className="card-title">{props.title}</h5>
                <span className="card-text">{props.description}</span>
                <span><Link to={`${props.link}`} className="text-decoration-none"> Read more</Link></span>
                <p className="card-text my-1 "><small className={`${a.mode === "dark" ? "text-white-50" :"text-body-secondary"}`}>Published on {props.pubDate}</small></p>
                <p className="card-text"><small className={`${a.mode === "dark" ? "text-white-50" :"text-body-secondary"}`}>Author: {props.creator}</small></p>
            </div>
        </div>
    )
}

export default NewsItem
