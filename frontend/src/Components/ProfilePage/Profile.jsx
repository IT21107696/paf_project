import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Button, TextField } from '@mui/material';
import CircleAvatar from './CircleAvatar';
import User from '../../model/User';
import Loading from '../Loading';
import NavBar from '../NavBar/NavBar';
import "./Profile.css"
import { Col, Row } from 'antd';
const Profile = () => {
    const [user, setUser] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
   
    const id = localStorage.getItem('uid');

    useEffect(() => {
        axios.get(`http://localhost:8080/api/users/${id}`)
            .then(response => {
                setUser(response.data);
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
                setAddress(response.data.address);
                setMobileNumber(response.data.mobileNumber);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedUser = new User(user.id, user.username, email, firstName, lastName, user.profilePictureImageUrl, address, mobileNumber);
        axios.put(`http://localhost:8080/api/users/${id}`, updatedUser)
            .then(response => {
                setUser(response.data);
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
                setAddress(response.data.address);
                setMobileNumber(response.data.mobileNumber);
                alert('User data updated successfully');
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleDelete = () => {
        axios.delete(`http://localhost:8080/api/users/${id}`)
            .then(response => {
                alert('User data deleted successfully');
                localStorage.clear();
                window.location.replace("/")
            })
            .catch(error => {
                console.log(error);
            });
    };

    if (!user) {
        return <Loading />;
    }

    return (
        <>
            <NavBar />
            <div

                className="profile-container">
                <Card className="profile-card">
                    <CardContent
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            width: "100%"
                        }}
                    >
                        <div className="avatar-container">
                            <CircleAvatar imageUrl={user.profilePictureImageUrl} size={100} />
                        </div>
                        <Typography variant="h5" component="h2">
                            {user.firstName} {user.lastName}
                        </Typography>
                        <Typography color="textSecondary">
                            {user.email}
                        </Typography>
                        <Typography color="textSecondary">
                            {user.address}
                        </Typography>
                        <Typography color="textSecondary">
                            {user.mobileNumber}
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col span={12}>
                                    <TextField
                                        label="First Name"
                                        value={firstName}
                                        onChange={(event) => setFirstName(event.target.value)}
                                        className="profile-input"
                                        fullWidth
                                    />
                                </Col>
                                <Col>
                                    <TextField
                                        label="Last Name"
                                        value={lastName}
                                        onChange={(event) => setLastName(event.target.value)}
                                        className="profile-input"
                                        fullWidth
                                    />
                                </Col>

                            </Row>

                            <Row>
                                <Col span={12}>
                                    <TextField
                                        label="Email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        className="profile-input"
                                        fullWidth
                                    />
                                </Col>
                                <Col span={12}>
                                    <TextField
                                        label="Address"
                                        value={address}
                                        onChange={(event) => setAddress(event.target.value)}
                                        className="profile-input"
                                        fullWidth
                                    />
                                </Col>
                            </Row>


                            <TextField
                                label="Mobile Number"
                                value={mobileNumber}
                                onChange={(event) => setMobileNumber(event.target.value)}
                                className="profile-input"
                                fullWidth
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className="profile-submit-btn"
                                fullWidth
                            >
                                Update
                            </Button>
                            <Button
                                onClick={handleDelete}
                                variant="outlined"
                                
                                className="profile-delete-btn"
                                fullWidth
                            >
                                Delete
                            </Button>
                        </form>

                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default Profile;