import React, { useState, useEffect } from 'react';
import { List, Avatar, Space, Typography } from 'antd';
import { NotificationOutlined } from '@ant-design/icons';



const Notifications = () => {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: 'New friend request',
            description: 'John Doe sent you a friend request.',
            link: '/friend-request/1',
        },
        {
            id: 2,
            title: 'New comment on your post',
            description: 'Jane Doe commented on your post.',
            link: '/post/1#comment-5',
        },
        {
            id: 3,
            title: 'New event invitation',
            description: 'You have been invited to the Annual Charity Event.',
            link: '/event/1',
        },
    ]);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {

            } catch (error) {
                // Handle error case (e.g., show a message)
            }
        };

        fetchNotifications();
    }, []);

    return (
        <div>
            <Typography.Title level={3}>
                <Space>
                    <NotificationOutlined />
                    Notifications
                </Space>
            </Typography.Title>
            <List
                itemLayout="horizontal"
                dataSource={notifications}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar icon={<NotificationOutlined />} />}
                            title={<a href={item.link}>{item.title}</a>}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};
export default Notifications;
