import React, { useState } from "react";
import { Col, Row, Button, Input, Table, Space, Tag } from "antd";
import { SearchOutlined } from "@ant-design/icons";

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
    const [searchText, setsearchText] = useState("");
    const [searchedColumn, setsearchedColumn] = useState("");
    console.log("searchText", searchText, searchedColumn);

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: "block" }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : "",
    });

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setsearchText([0]);
        setsearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setsearchText("");
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            ...getColumnSearchProps("name"),
        },
        {
            title: "NIC number",
            dataIndex: "nic",
            ...getColumnSearchProps("nic"),
            sorter: (a, b) => a.nic - b.nic,
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Email",
            dataIndex: "email",
            ...getColumnSearchProps("email"),
        },
        {
            title: "Mobile Number",
            dataIndex: "phoneNumber",
            ...getColumnSearchProps("phoneNumber"),
        },
        {
            title: "Email Status",
            dataIndex: "emailStatus",
            filters: [
                {
                    text: "Suncess",
                    value: "Suncess",
                },
                {
                    text: "Failed",
                    value: "Failed",
                },
            ],
            onFilter: (value, record) => record.emailStatus.startsWith(value),
            filterSearch: true,
            width: "10%",
            render: (emailStatus, data) => (
                <>
                    {data.emailStatus === "Suncess" ? (
                        <Tag color={"green"} key={"Suncess"}>
                            Suncess
                        </Tag>
                    ) : (
                        <Tag color={"volcano"} key={"Failed"}>
                            Failed
                        </Tag>
                    )}
                </>
            ),
        },
        {
            title: "SMS Status",
            dataIndex: "smsStatus",
            filters: [
                {
                    text: "Suncess",
                    value: "Suncess",
                },
                {
                    text: "Failed",
                    value: "Failed",
                },
            ],
            onFilter: (value, record) => record.smsStatus.startsWith(value),
            filterSearch: true,
            width: "10%",
            render: (smsStatus, data) => (
                <>
                    {data.smsStatus === "Suncess" ? (
                        <Tag color={"green"} key={"Suncess"}>
                            Suncess
                        </Tag>
                    ) : (
                        <Tag color={"volcano"} key={"Failed"}>
                            Failed
                        </Tag>
                    )}
                </>
            ),
        },
        {
            title: "Date",
            dataIndex: "date",
            ...getColumnSearchProps("date"),
        },
    ];
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
