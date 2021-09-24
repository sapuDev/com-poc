import React, { useState } from "react";
import { Table, Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        nic: 99333123234 + i,
        birthDay: `1990/01/01`,
        email: `edwardking${i}@gmail.com`,
        phoneNumber: 31243231331,
        address: `London, Park Lane no. ${i}`,
    });
}
let CustomerTable = () => {
    const [searchText, setsearchText] = useState("");
    const [searchedColumn, setsearchedColumn] = useState("");

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
            title: "Date of birth",
            dataIndex: "birthDay",
            ...getColumnSearchProps("birthDay"),
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
            title: "Address",
            dataIndex: "address",
        },
    ];
    return (
        <>
            <Table columns={columns} dataSource={data} />
        </>
    );
};
export default CustomerTable;
