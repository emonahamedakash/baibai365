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
    // const routeChange = (path) =>{
    //     navigate(path);
    // }

    useEffect( () => {
        fetchUsers().then();
    }, []);

    const fetchUsers = async ()=> {
        await axios.get(`${BASE_URL}/api/v1/user/list`, {
            params: {
                "access_token": localStorage.getItem("accessToken")
            }
        }).then((response) => {
            console.log(response.data);
            let temp = [];
            response.data.forEach((item) => {
                let data = item;
                temp.push(data);
                console.log(item.id);
            })
            setUsers(temp);
        });
    }
  return (
    <div  className=''>
        <div className='profile container'>
            {/* <div className='col-3 profile'>
                {
                    users.filter(each => each.username === "akash")
                    .map((user)=>
                    <h3>Hello, {user.username}</h3>
                    )
                } */}
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                    <Row>
                        <Col sm={3}>
                        <ListGroup>
                            <ListGroup.Item action href="#link1">
                            Edit Profile
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2">
                            Orders
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link3">
                            Wallet
                            </ListGroup.Item>
                        </ListGroup>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#link1">
                            <EditProfile/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                            <Orders/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link3">
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