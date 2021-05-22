import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContexts'
import { Link, useHistory } from 'react-router-dom'
import Sidebar from './Sidebar'
import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faFileAlt, faFileContract, faFolder, faUserTie, faUsers, faUserCog, faHandsHelping, faUserCircle, faPlayCircle, faEdit, faPlay, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { db } from "../../firebase"

export default function Dashboard() {
    const [error, setError] = useState("")
    const [userName, setUserName] = useState("")
    const [timer, setTimer] = useState(false);
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

    const ref = db.collection("users");
    ref.get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            if (doc.id == currentUser.uid) {
                console.log(doc.id);
                console.log(doc.data().uName);
                setUserName(doc.data().uName);
            }
        });
    });

    function toggleButton(e) {
        console.log(e+ "toggle")
        e.preventDefault();
        if(timer) {
            setTimer(!timer)

        }
        else {
            setTimer(!timer)
        }
    }

    function addTask(e) {
        e.preventDefault()
        console.log(e.target.value + "addtask");
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
                                    <li><a href="javascript:;"><span><span>{userName}</span><span>{currentUser.email}</span></span><FontAwesomeIcon icon={faUserCircle} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-col right-dashboard">
                    <div className="dashboard-content">
                        <div className="cp add-task">
                            <form onSubmit={addTask}>
                                <input type="text" placeholder="What are you working on?" />
                                <div className="action-option">
                                    <div className="action">
                                        <select>
                                            <option>Ashoka</option>
                                            <option>krishna</option>
                                            <option>satish</option>
                                        </select>
                                        <label><FontAwesomeIcon icon={faFolder} /></label>
                                    </div>
                                    <div className="action timer">
                                        <input type="text" placeholder="0:00:00" />
                                    </div>
                                    <div className="action play">
                                    {timer ?
                                        (<button type="submit"><FontAwesomeIcon icon={faEdit} /></button>)
                                        :(<button onClick={toggleButton}><FontAwesomeIcon icon={faPlayCircle} /></button>)}
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="task-list-all">
                            <div className="cp this-week">
                                <p>This week: 0:00:00</p>
                            </div>
                            <div className="cp projects-progress-bar">
                                <div className="project-progress-bar">
                                    <p>ASHOKA</p>
                                    <span className="cprogress-bar"></span>
                                </div>
                            </div>
                            <div className="task-lists">
                                <div className="task-list">
                                    <div className="day-actions bg-cust-white">
                                        <div className="cust-date-p">
                                            <p>Tue, 11 May</p>
                                        </div>
                                        <div className="cust-time-p total-time">
                                            <div className="cust-time">
                                                <p>0:00:00</p>
                                            </div>
                                            <div className="task-hover-c bulk-action">
                                                <FontAwesomeIcon icon={faEdit} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="day-task bg-cust-white">
                                        <div className="task-description">
                                            <p>Ashoka Changes (Our head of Department section make carousel all website)</p>
                                        </div>
                                        <div className="task-project">
                                            <p>Ashoka</p>
                                        </div>
                                        <div className="task-time-p total-time">
                                            <div className="cust-time">
                                                <p>0:00:00</p>
                                            </div>
                                            <div className="task-hover-g d-n timer-btn">
                                                <FontAwesomeIcon icon={faPlay} />
                                            </div>
                                            <div className="task-hover-g d-n task-action-btn">
                                                <FontAwesomeIcon icon={faEllipsisV} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="day-task bg-cust-white">
                                        <div className="task-description">
                                            <p>Ashoka Changes (Our head of Department section make carousel all website)</p>
                                        </div>
                                        <div className="task-project">
                                            <p>Ashoka</p>
                                        </div>
                                        <div className="task-time-p total-time">
                                            <div className="cust-time">
                                                <p>0:00:00</p>
                                            </div>
                                            <div className="task-hover-g d-n timer-btn">
                                                <FontAwesomeIcon icon={faPlay} />
                                            </div>
                                            <div className="task-hover-g d-n task-action-btn">
                                                <FontAwesomeIcon icon={faEllipsisV} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="day-task bg-cust-white">
                                        <div className="task-description">
                                            <p>Ashoka Changes (Our head of Department section make carousel all website)</p>
                                        </div>
                                        <div className="task-project">
                                            <p>Ashoka</p>
                                        </div>
                                        <div className="task-time-p total-time">
                                            <div className="cust-time">
                                                <p>0:00:00</p>
                                            </div>
                                            <div className="task-hover-g d-n timer-btn">
                                                <FontAwesomeIcon icon={faPlay} />
                                            </div>
                                            <div className="task-hover-g d-n task-action-btn">
                                                <FontAwesomeIcon icon={faEllipsisV} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="task-list">
                                    <div className="day-actions bg-cust-white">
                                        <div className="cust-date-p">
                                            <p>Tue, 11 May</p>
                                        </div>
                                        <div className="cust-time-p total-time">
                                            <div className="cust-time">
                                                <p>0:00:00</p>
                                            </div>
                                            <div className="task-hover-c bulk-action">
                                                <FontAwesomeIcon icon={faEdit} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="day-task bg-cust-white">
                                        <div className="task-description">
                                            <p>Ashoka Changes (Our head of Department section make carousel all website)</p>
                                        </div>
                                        <div className="task-project">
                                            <p>Ashoka</p>
                                        </div>
                                        <div className="task-time-p total-time">
                                            <div className="cust-time">
                                                <p>0:00:00</p>
                                            </div>
                                            <div className="task-hover-g d-n timer-btn">
                                                <FontAwesomeIcon icon={faPlay} />
                                            </div>
                                            <div className="task-hover-g d-n task-action-btn">
                                                <FontAwesomeIcon icon={faEllipsisV} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="day-task bg-cust-white">
                                        <div className="task-description">
                                            <p>Ashoka Changes (Our head of Department section make carousel all website)</p>
                                        </div>
                                        <div className="task-project">
                                            <p>Ashoka</p>
                                        </div>
                                        <div className="task-time-p total-time">
                                            <div className="cust-time">
                                                <p>0:00:00</p>
                                            </div>
                                            <div className="task-hover-g d-n timer-btn">
                                                <FontAwesomeIcon icon={faPlay} />
                                            </div>
                                            <div className="task-hover-g d-n task-action-btn">
                                                <FontAwesomeIcon icon={faEllipsisV} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="day-task bg-cust-white">
                                        <div className="task-description">
                                            <p>Ashoka Changes (Our head of Department section make carousel all website)</p>
                                        </div>
                                        <div className="task-project">
                                            <p>Ashoka</p>
                                        </div>
                                        <div className="task-time-p total-time">
                                            <div className="cust-time">
                                                <p>0:00:00</p>
                                            </div>
                                            <div className="task-hover-g d-n timer-btn">
                                                <FontAwesomeIcon icon={faPlay} />
                                            </div>
                                            <div className="task-hover-g d-n task-action-btn">
                                                <FontAwesomeIcon icon={faEllipsisV} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="day-task bg-cust-white">
                                        <div className="task-description">
                                            <p>Ashoka Changes (Our head of Department section make carousel all website)</p>
                                        </div>
                                        <div className="task-project">
                                            <p>Ashoka</p>
                                        </div>
                                        <div className="task-time-p total-time">
                                            <div className="cust-time">
                                                <p>0:00:00</p>
                                            </div>
                                            <div className="task-hover-g d-n timer-btn">
                                                <FontAwesomeIcon icon={faPlay} />
                                            </div>
                                            <div className="task-hover-g d-n task-action-btn">
                                                <FontAwesomeIcon icon={faEllipsisV} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="task-list">
                                    <Card>
                                        <Card.Body>
                                            <h1>Dash Board</h1>
                                            {error && <Alert variant="danger">{error}</Alert>}
                                            <h2><strong>Email: </strong> {currentUser.email}</h2>
                                            <Link to="/updateprofile" className="btn btn-primary mt-2">Update Profile</Link>
                                        </Card.Body>
                                    </Card>
                                    <div className="col-12">
                                        <div className="w-100 mt-2">
                                            <Button onClick={handleLogout} className="btn btn-danger">Log Out</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
