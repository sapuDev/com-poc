import React from "react";
import { Col, Row, Button, Input, Select } from "antd";
const { Option } = Select;

let ScheduleGreetings = (props) => {
    console.log("props.............", props);

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <div>
            <Row className="input-wrapper-small margin-top">
                <Col xl={2} lg={12} xs={24} className="lable-padding">
                    Greeting
                </Col>
                <Col xl={4} lg={12} xs={24}>
                    <Select defaultValue="birthdays" style={{ width: "100%" }}>
                        <Option value="birthdays">Birthday</Option>
                        <Option value="newyear">New year</Option>
                        <Option value="christmas">Christmas</Option>
                    </Select>
                </Col>
                <Col xl={2} lg={12} xs={24} className="lable-padding">
                    Check
                </Col>
                <Col xl={4} lg={12} xs={24}>
                    <Select defaultValue="everyDay" style={{ width: "100%" }}>
                        <Option value="everyDay">Every day</Option>
                        <Option value="onceaweek">Once a week</Option>
                        <Option value="onceamonth">Once a month</Option>
                    </Select>
                </Col>
                <Col xl={6} lg={12} xs={24} className="lable-padding">
                    <Button type="primary">Change</Button>
                    <Button>Delete</Button>
                </Col>
            </Row>
            <Row className="input-wrapper-small">
                <Col xl={2} lg={12} xs={24} className="lable-padding">
                    Greeting
                </Col>
                <Col xl={4} lg={12} xs={24}>
                    <Select defaultValue="newyear" style={{ width: "100%" }}>
                        <Option value="birthdays">Birthday</Option>
                        <Option value="newyear">New year</Option>
                        <Option value="christmas">Christmas</Option>
                    </Select>
                </Col>
                <Col xl={2} lg={12} xs={24} className="lable-padding">
                    Check
                </Col>
                <Col xl={4} lg={12} xs={24}>
                    <Select defaultValue="onceayear" style={{ width: "100%" }}>
                        <Option value="everyDay">Every day</Option>
                        <Option value="onceaweek">Once a week</Option>
                        <Option value="onceamonth">Once a month</Option>
                        <Option value="onceayear">Once a year</Option>
                    </Select>
                </Col>
                <Col xl={6} lg={12} xs={24} className="lable-padding">
                    <Button type="primary">Change</Button>
                    <Button>Delete</Button>
                </Col>
            </Row>
        </div>
    );
};
export default ScheduleGreetings;
