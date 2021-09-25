import React, { useState } from "react";
import { Col, Row, Button, Select, Divider, TimePicker } from "antd";
import DatePicker from "react-multi-date-picker";
const { Option } = Select;

let ScheduleGreetings = (props) => {
    const [isSpecialDay, setSpecialDays] = useState(false);
    const [values, setValues] = useState(new Date());

    const selectSpecialDates = (value) => {
        console.log("value.......", value);
        if (value === "specialDates") setSpecialDays(true);
        else setSpecialDays(false);
    };
    console.log("isSpecialDay.......", isSpecialDay);
    return (
        <div>
            <Row className="input-wrapper-small margin-top margin-bottom ">
                <b>Current schedulers</b>
            </Row>
            <Row className="input-wrapper-small">
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
            <Row>
                <Divider />
            </Row>
            <Row className="input-wrapper-small margin-top margin-bottom ">
                <b>Add new scheduler</b>
            </Row>
            <Row className="input-wrapper-small">
                <Col xl={6} lg={12} xs={24} className="lable-padding">
                    Greeting
                </Col>
                <Col xl={8} lg={12} xs={24}>
                    <Select defaultValue="birthdays" style={{ width: "100%" }}>
                        <Option value="birthdays">Birthday</Option>
                        <Option value="newyear">New year</Option>
                        <Option value="christmas">Christmas</Option>
                    </Select>
                </Col>
            </Row>
            <Row className="input-wrapper-small">
                <Col xl={6} lg={12} xs={24} className="lable-padding">
                    Execute
                </Col>
                <Col xl={8} lg={12} xs={24}>
                    <Select
                        defaultValue="everyDay"
                        style={{ width: "100%" }}
                        onChange={(e) => {
                            selectSpecialDates(e);
                        }}
                    >
                        <Option value="everyDay">Every day</Option>
                        <Option value="onceaweek">Once a week</Option>
                        <Option value="onceamonth">Once a month</Option>
                        <Option value="specialDates">Custom dates</Option>
                    </Select>
                </Col>
            </Row>
            {isSpecialDay ? (
                <Row className="input-wrapper-small">
                    <Col xl={6} lg={12} xs={24} className="lable-padding">
                        Select dates
                    </Col>
                    <Col xl={10} lg={12} xs={24}>
                        <DatePicker value={values} multiple={true} style={{ width: "190%" }} onChange={setValues} />
                    </Col>
                </Row>
            ) : null}
            <Row className="input-wrapper-small">
                <Col xl={6} lg={12} xs={24} className="lable-padding">
                    Execute time
                </Col>
                <Col xl={8} lg={12} xs={24}>
                    <TimePicker use12Hours format="h:mm:ss A" onChange={() => {}} style={{ width: "100%" }} />
                </Col>
            </Row>

            <Row className="input-wrapper-small">
                <Col xl={15} lg={24} xs={24} className="align-right">
                    <Button type="primary" htmlType="submit">
                        Add
                    </Button>
                </Col>
            </Row>
        </div>
    );
};
export default ScheduleGreetings;
