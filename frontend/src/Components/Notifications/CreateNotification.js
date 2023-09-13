import React, { useState } from 'react';
import { Form, Input, Button, Card } from 'antd';
import NavBar from '../NavBar/NavBar';
import Title from 'antd/es/typography/Title';
const CreateNotification = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try {

            form.resetFields();
        } catch (error) {
            // Handle error case (e.g., show a message)
        }
        setLoading(false);
    };

    return (
        <div
            style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
        >
            <NavBar>

            </NavBar>
            <Title>Create Notfication</Title>
            <div
                style={{ wdth: "800px" }}
            >
                <Card>

                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Title"
                            name="title"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter a title',
                                },
                            ]}
                        >
                            <Input placeholder="Enter title" />
                        </Form.Item>

                        <Form.Item
                            label="Description"
                            name="description"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter a description',
                                },
                            ]}
                        >
                            <Input.TextArea placeholder="Enter description" />
                        </Form.Item>

                        <Form.Item
                            label="Link"
                            name="link"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter a link',
                                },
                            ]}
                        >
                            <Input placeholder="Enter link" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" loading={loading}>
                                Create Notification
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>

            </div>
        </div>
    );
};

export default CreateNotification;

