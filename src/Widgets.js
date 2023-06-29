import React from "react";
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>

            {newsArticle("Built anything with React!", "Top news - 9099 readers")}
            {newsArticle("Coronavirus: India updates", "Top news - 886 readers")}
            {newsArticle("Tesla hits new highs", "Cars & auto - 300 readers")}
            {newsArticle("Bitcoin Breaks $22k", "Crypto - 8000 readers")}
            {newsArticle("Is Redux too good?", "Code - 123 readers")}
            {newsArticle("Latest updates with React", "Top news - 6503 readers")}
        </div>
    )
}
