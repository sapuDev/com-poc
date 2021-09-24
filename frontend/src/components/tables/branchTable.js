import React from "react";
import { Table } from "antd";

const columns = [
    {
        title: "Branch",
        dataIndex: "branch",
    },
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
        title: "Position",
        dataIndex: "position",
    },
    {
        title: "Email",
        dataIndex: "email",
    },
    {
        title: "Mobile Number",
        dataIndex: "phoneNumber",
    },
];

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
    return (
        <>
            <Table columns={columns} dataSource={data} />
        </>
    );
};
export default BranchTable;
