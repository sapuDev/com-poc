import React from "react";
import {Col, Row, Button, Input, Select, Form} from "antd";
import { sendMessages } from "../../../middlewares";
const {Option} = Select;

let IndividualGreetings = props => {
  console.log("props.............", props);

  const handleChange = value => {
    console.log(`selected ${value}`);
  };
  const onFinish = (values: any) => {
    sendMessages(values)
  };
  return (
    <Form
    onFinish={onFinish}>
      <Row className="input-wrapper margin-top">
        <Col xl={6} lg={12} xs={24}>
          Greeting
        </Col>
        <Col xl={8} lg={12} xs={24}>
        <Form.Item
            name="type"
            rules={[{required: false, message: "Please select template!"}]}
          >
          <Select
            defaultValue="birthdays"
            style={{width: "100%"}}
            onChange={handleChange}
          >
            <Option value="birthdays">Birthday</Option>
            <Option value="New year">New year</Option>
            <Option value="christmas">Christmas</Option>
          </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row className="input-wrapper">
        <Col xl={6} lg={12} xs={24}>
          Customer email
        </Col>
        <Col xl={8} lg={12} xs={24}>
          <Form.Item
            name="email"
            rules={[{required: false, message: "Please input your Email!"}]}
          >
            <Input placeholder="Email address" />
          </Form.Item>
        </Col>
      </Row>
      <Row className="input-wrapper">
        <Col xl={6} lg={12} xs={24}>
          Customer mobile number
        </Col>
        <Col xl={8} lg={12} xs={24}>
        <Form.Item
            name="to"
            rules={[{required: false, message: "Please input your mobile!"}]}
          >
          <Input placeholder="mobile number" />
          </Form.Item>
        </Col>
      </Row>
      <Row className="input-wrapper">
        <Col xl={6} lg={12} xs={24}>
          Branch
        </Col>
        <Col xl={8} lg={12} xs={24}>
        <Form.Item
            name="from"
            rules={[{required: false, message: "Please select branch!"}]}
          >
          <Select
            defaultValue="Colombo"
            style={{width: "100%"}}
            onChange={handleChange}
          >
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
          <Select
            defaultValue="samanperera@gmail.com"
            style={{width: "100%"}}
            onChange={handleChange}
          >
            <Option value="samanperera@gmail.com">Saman perera</Option>
            <Option value="Jagathfernando@gmail.com">Jagath fernando</Option>
            <Option value="Sadundarshana@gmail.com" disabled>
              Sadun darshana
            </Option>
            <Option value="gayashan.galagedara@1billiontech.com">
              Gayashan sameera
            </Option>
            <Option value="sapumal.thepuangoda@1billiontech.com">
              Sapumal thepulangoda
            </Option>
          </Select>
        </Col>
      </Row>
      <Row className="input-wrapper margin-top">
        <Col xl={6} lg={12} xs={24} />
        <Col xl={8} lg={12} xs={24} className="align-right">
          <Button
            type="primary"
            htmlType="submit"
          >
            Send
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
export default IndividualGreetings;
