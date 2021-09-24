import React, { useState } from "react";
import { Col, Row, Button, Input, Select, Table } from "antd";
const { Option } = Select;

const columns = [
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "NIC number",
        dataIndex: "nic",
        sorter: (a, b) => a.nic - b.nic,
        sortDirections: ["descend", "ascend"],
    },
    {
        title: "Email",
        dataIndex: "email",
    },
    {
        title: "Mobile Number",
        dataIndex: "phoneNumber",
    },
    {
        title: "Email Status",
        dataIndex: "emailStatus",
    },
    {
        title: "SMS Status",
        dataIndex: "smsStatus",
    },
    {
        title: "Date",
        dataIndex: "date",
    },
];

const data = [];
for (let i = 1; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        nic: 99333123234 + i,
        date: `2021/01/01`,
        email: `edwardking${i}@gmail.com`,
        phoneNumber: 31243231331,
        emailStatus: i / 5 === 1 ? "Failed" : "Suncess",
        smsStatus: i / 7 === 1 ? "Failed" : "Suncess",
    });
}

let History = (props) => {
    return (
        <>
            <Row className="input-wrapper-without-margin  margin-top">
                <Col xl={24} lg={24} xs={24}>
                    <Table columns={columns} dataSource={data} />
                </Col>
            </Row>
        </>
    );
};
export default History;
