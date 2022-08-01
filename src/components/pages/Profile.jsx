import React, { useState, useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { BASE_URL } from '../../baseUrl'
import axios from 'axios'
import './Profile.css'
import EditProfile from '../account/EditProfile'
import Orders from '../account/Orders'
import Wallet from '../account/Wallet'
import Navbar from '../home/header/Navbar'
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
export const Profile = () => {
    const {signOut} = useAuth();
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const { currentUser } = useAuth();
  return (
    <div  className=''>
        <div className='profile container'>
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#edit-profile">
                    <Row>
                        <Col sm={3}>
                        <ListGroup>
                            <ListGroup.Item action href="#edit-profile">
                            Edit Profile
                            </ListGroup.Item>
                            <ListGroup.Item action href="#orders">
                            Orders
                            </ListGroup.Item>
                            <ListGroup.Item action href="#wallet">
                            Wallet
                            </ListGroup.Item>
                        </ListGroup>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#edit-profile">
                            <EditProfile/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#orders">
                            <Orders/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#wallet">
                            <Wallet/>
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </div>

  )
}
export default Profile;