import React, { useState } from "react";
import { Col, Row, Button, Input, Select, Form, Spin, AutoComplete, Checkbox } from "antd";
import { sendMessages } from "../../../middlewares";
import { LoadingOutlined } from "@ant-design/icons";
import { data } from "./constants";

const { Option } = Select;
const { Option: AutoCompleteOption } = AutoComplete;

let IndividualGreetings = (props) => {
    const [inprogress, setInprogress] = useState(false);
    const [result, setResult] = useState([]);
    const [selecttosend, setselecttosend] = useState([]);

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onFinish = (values) => {
        const { send } = values;
        setInprogress(true);
        console.log("values........", values);

        if (send.includes("sendEmails")) {
            values.name = data.find((domain) => domain.email === values.email)
                ? data.find((domain) => domain.email === values.email).name
                : "Edword";
        } else {
            values.name = data.find((domain) => domain.phoneNumber === values.to)
                ? data.find((domain) => domain.phoneNumber === values.to).name
                : "Edword";
        }

        sendMessages(values, () => {
            setInprogress(false);
        });
    };
    const handleSearch = (value) => {
        let res = [];

        if (!value || value.indexOf("@") >= 0) {
            res = [];
        } else {
            const silt = data.filter((domain) => domain.email.includes(value));
            res = silt.length ? silt.map((a) => `${a.email}`) : [];
        }

        setResult(res);
    };

    const onCheck = (value) => {
        console.log("value", value);
        setselecttosend(value);
    };

    const antIcon = <LoadingOutlined style={{ fontSize: 18, color: "white", paddingRight: "5px" }} spin />;
    const plainOptions = [
        { value: "sendEmails", label: "email" },
        { value: "sendSms", label: "sms" },
        { value: "sendWhatsap", label: "whatsapp" },
    ];
    return (
        <Form onFinish={onFinish}>
            <Row className="input-wrapper margin-top">
                <Col xl={6} lg={12} xs={24}>
                    Greeting
                </Col>
                <Col xl={8} lg={12} xs={24}>
                    <Form.Item name="type" rules={[{ required: false, message: "Please select template!" }]}>
                        <Select defaultValue="selct" style={{ width: "100%" }} onChange={handleChange}>
                            <Option value="selct">Select greeting</Option>
                            <Option value="birthdays">Birthday</Option>
                            <Option value="newyear">New year</Option>
                            <Option value="christmas">Christmas</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row className="input-wrapper">
                <Col xl={6} lg={12} xs={24}>
                    <Form.Item name="send" rules={[{ required: false, message: "Please select template!" }]}>
                        <Checkbox.Group options={plainOptions} onChange={onCheck} />
                    </Form.Item>
                </Col>
            </Row>
            {selecttosend && selecttosend.includes("sendEmails") ? (
                <Row className="input-wrapper">
                    <Col xl={6} lg={12} xs={24}>
                        Customer email
                    </Col>
                    <Col xl={8} lg={12} xs={24}>
                        <Form.Item name="email" rules={[{ required: false, message: "Please input your Email!" }]}>
                            <AutoComplete onSearch={handleSearch} placeholder="input here">
                                {result.map((email) => (
                                    <AutoCompleteOption key={email} value={email}>
                                        {email}
                                    </AutoCompleteOption>
                                ))}
                            </AutoComplete>
                        </Form.Item>
                    </Col>
                </Row>
            ) : null}
            {selecttosend && (selecttosend.includes("sendSms") || selecttosend.includes("sendWhatsap")) ? (
                <Row className="input-wrapper">
                    <Col xl={6} lg={12} xs={24}>
                        Customer mobile number
                    </Col>
                    <Col xl={8} lg={12} xs={24}>
                        <Form.Item name="to" rules={[{ required: false, message: "Please input your mobile!" }]}>
                            <Input placeholder="mobile number" />
                        </Form.Item>
                    </Col>
                </Row>
            ) : null}

            <Row className="input-wrapper">
                <Col xl={6} lg={12} xs={24}>
                    Branch
                </Col>
                <Col xl={8} lg={12} xs={24}>
                    <Form.Item name="branch" rules={[{ required: false, message: "Please select branch!" }]}>
                        <Select defaultValue="selctbranch" style={{ width: "100%" }} onChange={handleChange}>
                            <Option value="selctbranch">Select branch</Option>
                            <Option value="Colombo">Colombo</Option>
                            <Option value="Colombo-fort">Colombo fort</Option>
                            <Option value="disabled" disabled>
                                Disabled
                            </Option>
                            <Option value="Kandy">Kandy</Option>
                            <Option value="Galle">Galle</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row className="input-wrapper">
                <Col xl={6} lg={12} xs={24}>
                    Sender
                </Col>
                <Col xl={8} lg={12} xs={24}>
                    <Form.Item name="from" rules={[{ required: false, message: "Please select branch!" }]}>
                        <Select defaultValue="Saman perera" style={{ width: "100%" }} onChange={handleChange}>
                            <Option value="Saman perera">Saman perera</Option>
                            <Option value="Jagath fernando">Jagath fernando</Option>
                            <Option value="Sadun darshana" disabled>
                                Sadun darshana
                            </Option>
                            <Option value="Gayashan sameera">Gayashan sameera</Option>
                            <Option value="Sapumal thepulangoda">Sapumal thepulangoda</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            {selecttosend && selecttosend.length ? (
                <Row className="input-wrapper margin-top">
                    <Col xl={6} lg={12} xs={24} />
                    <Col xl={8} lg={12} xs={24} className="align-right">
                        {inprogress ? (
                            <Button type="primary" htmlType="submit">
                                <Spin indicator={antIcon} />
                                Sending...
                            </Button>
                        ) : (
                            <Button type="primary" htmlType="submit">
                                Send
                            </Button>
                        )}
                    </Col>
                </Row>
            ) : null}
        </Form>
    );
};
export default IndividualGreetings;
