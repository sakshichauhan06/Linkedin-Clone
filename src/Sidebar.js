import { Avatar } from "@mui/material";
import React from "react";
import './Sidebar.css';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

export default function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img 
                    src="https://i.pinimg.com/originals/44/fb/25/44fb259d9372fea3988aa56a720ca996.jpg" alt="" 
                />
                <Avatar src={user.photoUrl} className="sidebar__avatar">
                    {user.email}
                    {/* {user.email[0]} */}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,227</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("developer")}
            </div>
        </div>
    );
}
