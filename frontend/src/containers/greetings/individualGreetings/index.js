import React from "react";
import { Col, Row, Button, Input, Select } from "antd";
const { Option } = Select;

let IndividualGreetings = (props) => {
    console.log("props.............", props);

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <div>
            <Row className="input-wrapper margin-top">
                <Col xl={6} lg={12} xs={24}>
                    Customer email
                </Col>
                <Col xl={8} lg={12} xs={24}>
                    <Input placeholder="Customer email" />
                </Col>
            </Row>
            <Row className="input-wrapper">
                <Col xl={6} lg={12} xs={24}>
                    Customer mobile number
                </Col>
                <Col xl={8} lg={12} xs={24}>
                    <Input placeholder="Customer mobile number" />
                </Col>
            </Row>
            <Row className="input-wrapper">
                <Col xl={6} lg={12} xs={24}>
                    Branch
                </Col>
                <Col xl={8} lg={12} xs={24}>
                    <Select defaultValue="Colombo" style={{ width: "100%" }} onChange={handleChange}>
                        <Option value="Colombo">Colombo</Option>
                        <Option value="Colombo-fort">Colombo fort</Option>
                        <Option value="disabled" disabled>
                            Disabled
                        </Option>
                        <Option value="Kandy">Kandy</Option>
                        <Option value="Galle">Galle</Option>
                    </Select>
                </Col>
            </Row>
            <Row className="input-wrapper">
                <Col xl={6} lg={12} xs={24}>
                    Sender
                </Col>
                <Col xl={8} lg={12} xs={24}>
                    <Select defaultValue="samanperera@gmail.com" style={{ width: "100%" }} onChange={handleChange}>
                        <Option value="samanperera@gmail.com">Saman perera</Option>
                        <Option value="Jagathfernando@gmail.com">Jagath fernando</Option>
                        <Option value="Sadundarshana@gmail.com" disabled>
                            Sadun darshana
                        </Option>
                        <Option value="gayashan.galagedara@1billiontech.com">Gayashan sameera</Option>
                        <Option value="sapumal.thepuangoda@1billiontech.com">Sapumal thepulangoda</Option>
                    </Select>
                </Col>
            </Row>
            <Row className="input-wrapper margin-top">
                <Col xl={6} lg={12} xs={24}></Col>
                <Col xl={8} lg={12} xs={24} className="align-right">
                    <Button type="primary">Send</Button>
                </Col>
            </Row>
        </div>
    );
};
export default IndividualGreetings;
