import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContexts'
import { Link, useHistory } from 'react-router-dom'
import Sidebar from './Sidebar'
import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faFileAlt, faFileContract, faFolder, faUserTie, faUsers, faUserCog, faHandsHelping, faUserCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'

export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Failed to Logout")
        }
    }

    return (
        <>
            <section className="dashboard">
                <div className="left-col left-nav">
                    <div className="sidebar">
                        <div className="sidebar-inner">
                            <ul className="logo">
                                <li><span>Toggl</span><FontAwesomeIcon icon={faBell} /></li>
                            </ul>
                            <div className="common-menu reports mt-4">
                                <p className="sub-heading">Analyze</p>
                                <ul className="list-menu">
                                    <li><a href="javascript:;"><FontAwesomeIcon icon={faFileAlt} /><span>Reports</span></a></li>
                                    <li><a href="javascript:;"><FontAwesomeIcon icon={faFileContract} /><span>Insights</span></a></li>
                                </ul>
                            </div>
                            <div className="common-menu manage mt-4">
                                <p className="sub-heading">Manage</p>
                                <ul className="list-menu">
                                    <li><a href="javascript:;"><FontAwesomeIcon icon={faFolder} /><span>Projects</span></a></li>
                                    <li><a href="javascript:;"><FontAwesomeIcon icon={faUserTie} /><span>Clients</span></a></li>
                                    <li><a href="javascript:;"><FontAwesomeIcon icon={faUsers} /><span>Teams</span></a></li>
                                    <li><a href="javascript:;"><FontAwesomeIcon icon={faUserCog} /><span>Settings</span></a></li>
                                    <li><a href="javascript:;"><FontAwesomeIcon icon={faHandsHelping} /><span>Helps</span></a></li>
                                </ul>
                            </div>
                            <div className="common-menu user-menu mt-4">
                                <p className="sub-heading">Workspace</p>
                                <ul className="list-menu">
                                    <li><a href="javascript:;"><span><span>Satish Kumar</span><span>satishkumar180495@gmail.com</span></span><FontAwesomeIcon icon={faUserCircle} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-col right-dashboard">
                    <div className="dashboard-content">
                        <div className="add-task">
                            <form action="">
                                <input type="text" placeholder="What are you working on?" />
                                <div className="action-option">
                                    <div className="action">
                                        <FontAwesomeIcon icon={faFolder} />
                                    </div>
                                    <div className="action timer">
                                        <input type="text" placeholder="0:00:00" />
                                    </div>
                                    <div className="action play">
                                        <button><FontAwesomeIcon icon={faPlayCircle} /></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="task-list">
                            <div className="this-week">
                                <p>This week 0:00:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mt-5">
                        <div className="row">
                            <div className="col-12">
                                <Card>
                                    <Card.Body>
                                        <h1>Dash Board</h1>
                                        { error && <Alert variant="danger">{error}</Alert> }
                                        <h2><strong>Email: </strong> {currentUser.email}</h2>
                                        <Link to="/updateprofile" className="btn btn-primary mt-2">Update Profile</Link>
                                    </Card.Body>
                                </Card>
                                <div className="w-100 mt-2">
                                    <Button onClick={handleLogout} className="btn btn-danger">Log Out</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
