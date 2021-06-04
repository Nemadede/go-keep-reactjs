import React from 'react'
import keepImg from '../assets/349px-Google_Keep_icon_(2020).svg.png'



function Layout() {
    return (
        <div>
            <div className="header">
                <div className="header-item head-sidenav-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="header-item icon-container">

                    <img src={keepImg} alt='keep icon' />
                    <span>Keep</span>
                </div>
                <div className="header-item search-bar">
                    <div id="search">
                        <span>icon</span>
                        <input type="search" placeholder="search" />
                    </div>
                </div>

                <div className="header-item right-menu1">
                    <span>reload</span>
                    <span>view</span>
                    <span>settings</span>
                </div>
                <div className="header-item right-menu2">
                    <span id="g-menu">menu</span>
                    <span id="g-account">n</span>
                </div>
            </div>
            <div id="body">
                <div className="side-nav">
                    <nav className="nav">
                        <ul>
                            <li className="active">Notes</li>
                            <li>Reminders</li>
                            <li>Edit Labels</li>
                            <li>Archive</li>
                            <li>Trash</li>
                        </ul>
                    </nav>
                    <h2>Open-source licenses</h2>
                </div>


            </div>
        </div>
    )
}

export default Layout
