import React from 'react';
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
    return (
        <div className="header">
            <div className="Header__icons">
                {/* All Icons here */}
                <div className="Header__icon Header__icon--active">
                <HomeIcon />
                <p>Home</p>
                </div>
                <div className="Header__icon">
                <FlashOnIcon />
                <p>Trending</p>
                </div>
                <div className="Header__icon">
                <LiveTvIcon />
                <p>Verified</p>
                </div>
                <div className="Header__icon">
                <VideoLibraryIcon />
                <p>Collections</p>
                </div>
                <div className="Header__icon">
                <SearchIcon />
                <p>Search</p>
                </div>
                <div className="Header__icon">
                <PersonOutlineIcon />
                <p>Account</p>
                </div>
               
                
            </div>
            <img
                src="https://www.suplari.com/wp-content/uploads/2019/09/hulu-logo-white.png"
                alt=""
            />
        </div>
    )
}

export default Header
