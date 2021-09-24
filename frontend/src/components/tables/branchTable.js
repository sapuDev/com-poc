import React, { useState } from "react";
import { Table, Input, Button, Space, Modal, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const data = [];
const branches = ["Kandy", "Colombo", "Gampaha", "Galle", "Hambanthota"];
for (let i = 1; i < 46; i++) {
    data.push({
        key: i,
        branch: branches[i % 5],
        name: `Edward King ${i}`,
        nic: 99333123234 + i,
        position: `Manager`,
        email: `edwardking${i}@gmail.com`,
        phoneNumber: 31243231331,
    });
}
let BranchTable = () => {
    const [searchText, setsearchText] = useState("");
    const [searchedColumn, setsearchedColumn] = useState("");
    const [visible, setvisible] = useState(false);
    const [editEmail, seteditEmail] = useState(null);

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

    const handleEdit = (datam) => {
        console.log("email", datam.email);
        seteditEmail(datam.email);
        setvisible(true);
    };

    const columns = [
        {
            title: "Branch",
            dataIndex: "branch",
            ...getColumnSearchProps("branch"),
        },
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
            title: "Position",
            dataIndex: "position",
            ...getColumnSearchProps("position"),
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
            title: "Edit",
            dataIndex: "edit",
            render: (edit, data) => (
                <Button type="primary" onClick={() => handleEdit(data)} size="small" style={{ width: 90 }}>
                    Edit
                </Button>
            ),
        },
    ];
    return (
        <>
            {visible ? (
                <Modal
                    visible={visible}
                    title="Update Information"
                    onOk={() => {
                        setvisible(false);
                    }}
                    onCancel={() => {
                        setvisible(false);
                    }}
                    footer={[
                        <Button
                            key="back"
                            onClick={() => {
                                setvisible(false);
                            }}
                        >
                            Return
                        </Button>,
                        <Button
                            key="submit"
                            type="primary"
                            onClick={() => {
                                setvisible(false);
                            }}
                        >
                            Submit
                        </Button>,
                    ]}
                >
                    <Row className="row-padding">
                        <Col xl={12} lg={12} xs={24}>
                            Email
                        </Col>
                        <Col xl={12} lg={12} xs={24}>
                            <Input placeholder="Customer email" value={data.find((a) => a.email === editEmail).email} />
                        </Col>
                    </Row>
                    <Row className="row-padding">
                        <Col xl={12} lg={12} xs={24}>
                            Name
                        </Col>
                        <Col xl={12} lg={12} xs={24}>
                            <Input placeholder="Customer email" value={data.find((a) => a.email === editEmail).name} />
                        </Col>
                    </Row>
                    <Row className="row-padding">
                        <Col xl={12} lg={12} xs={24}>
                            NIC
                        </Col>
                        <Col xl={12} lg={12} xs={24}>
                            <Input placeholder="Customer email" value={data.find((a) => a.email === editEmail).nic} />
                        </Col>
                    </Row>
                    <Row className="row-padding">
                        <Col xl={12} lg={12} xs={24}>
                            Mobile
                        </Col>
                        <Col xl={12} lg={12} xs={24}>
                            <Input
                                placeholder="Customer email"
                                value={data.find((a) => a.email === editEmail).phoneNumber}
                            />
                        </Col>
                    </Row>
                    <Row className="row-padding">
                        <Col xl={12} lg={12} xs={24}>
                            Branch
                        </Col>
                        <Col xl={12} lg={12} xs={24}>
                            <Input
                                placeholder="Customer email"
                                value={data.find((a) => a.email === editEmail).branch}
                            />
                        </Col>
                    </Row>
                    <Row className="row-padding">
                        <Col xl={12} lg={12} xs={24}>
                            Position
                        </Col>
                        <Col xl={12} lg={12} xs={24}>
                            <Input
                                placeholder="Customer email"
                                value={data.find((a) => a.email === editEmail).position}
                            />
                        </Col>
                    </Row>
                </Modal>
            ) : null}
            <Table columns={columns} dataSource={data} />
        </>
    );
};
export default BranchTable;
