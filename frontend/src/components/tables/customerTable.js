import React from "react";
import { Table } from "antd";

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
        title: "Date of birth",
        dataIndex: "birthDay",
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
        title: "Address",
        dataIndex: "address",
    },
];

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
    return (
        <>
            <Table columns={columns} dataSource={data} />
        </>
    );
};
export default CustomerTable;
