import React, { useState, useEffect } from 'react';
import './StatusBar.css';
import { Avatar } from '@mui/material';

import axios from 'axios';
import config from '../../config';

const StatusBar = () => {
    const [statusList, setStatusList] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get(`${config.baseUrl}/advertisements`).then(value => {
            setStatusList(value.data);
        })

    };

    return (
        <div

        >
            <div className="statusbar__container">
                {statusList.map((item, index) => (

                    <div
                        style={{
                            cursor: "pointer"
                        }}
                        onClick={(e) => {
                            window.location.href = item.visitLink
                        }}
                        className="status"
                        key={index}>
                        <Avatar className="statusbar__status" src={item.imageUrl} />
                    </div>

                ))}
            </div>
        </div>
    );
};

export default StatusBar;
