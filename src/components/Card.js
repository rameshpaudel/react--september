import React from 'react'

export default function Card(props) {
    return (
        <div className="card-container">
            <img src={props.image || "https://placeimg.com/800/200"} />
            <div className="card-content">
                <h3>{props.heading || "Dummy Heading Replace with your own"}</h3>
                <p>{props.description || "This is placeholder for description"}</p>
                <a href={props.link || "#"}>{props.buttonText || "Click Here"}</a>
            </div>
        </div>
    )
}
