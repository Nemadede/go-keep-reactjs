import React from 'react'
import keepImg from '../assets/349px-Google_Keep_icon_(2020).svg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSearch,
    faRedo,
    faCog,
    faEllipsisV,
    faPen, faInbox,
    faUserPlus,
    faPallet,

} from '@fortawesome/free-solid-svg-icons'
import { faLightbulb, faBell, faTrashAlt, faImage } from '@fortawesome/free-regular-svg-icons'


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
                        <span><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></span>
                        <input type="search" placeholder="Search" />
                    </div>
                </div>

                <div className="header-item right-menu1">
                    <span><FontAwesomeIcon icon={faRedo}></FontAwesomeIcon></span>
                    <span className="menu">
                        <span></span>
                        <span></span>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faCog} />
                    </span>
                </div>
                <div className="header-item right-menu2">
                    <span id="g-menu">
                        <FontAwesomeIcon icon={faEllipsisV} />
                        <FontAwesomeIcon icon={faEllipsisV} />
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </span>
                    <span id="g-account">n</span>
                </div>
            </div>
            <div id="body">
                <div className="side-nav">
                    <nav className="nav">
                        <ul>
                            <li className="active">
                                <FontAwesomeIcon icon={faLightbulb} />
                                Notes</li>
                            <li>
                                <FontAwesomeIcon icon={faBell} />

                                Reminders</li>
                            <li>
                                <FontAwesomeIcon icon={faPen} />

                                Edit Labels</li>
                            <li>
                                <FontAwesomeIcon icon={faInbox} />

                                Archive</li>
                            <li>
                                <FontAwesomeIcon icon={faTrashAlt} />


                                Trash</li>
                        </ul>
                    </nav>
                    <h2>Open-source licenses</h2>
                </div>


            </div>
        </div>
    )
}

export default Layout
