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

let Bulk = (props) => {
    const [selectedRowKeys, setselectedRowKeys] = useState([]);
    const [loading, setloading] = useState(false);

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const start = () => {
        setloading(true);

        setTimeout(() => {
            setselectedRowKeys([]);
            setloading(false);
        }, 1000);
    };

    const onSelectChange = (selectedRowKeys) => {
        console.log("selectedRowKeys changed: ", selectedRowKeys);
        setselectedRowKeys(selectedRowKeys);
    };

    const hasSelected = selectedRowKeys && selectedRowKeys.length > 0 ? true : false;
    return (
        <>
            <Row className="input-wrapper-without-margin margin-top">
                <Col xl={6} lg={12} xs={24}>
                    Greeting
                </Col>
                <Col xl={8} lg={12} xs={24}>
                    <Select defaultValue="birthdays" style={{ width: "100%" }} onChange={handleChange}>
                        <Option value="birthdays">Birthday</Option>
                        <Option value="New year">New year</Option>
                        <Option value="christmas">Christmas</Option>
                    </Select>
                </Col>
            </Row>
            <Row className="input-wrapper-without-margin">
                <Col xl={24} lg={24} xs={24}>
                    Select Customers
                </Col>
            </Row>
            <Row className="input-wrapper-without-margin">
                <Col xl={24} lg={24} xs={24}>
                    <div>
                        <div style={{ marginBottom: 16 }}>
                            <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                                Reload
                            </Button>
                            <span style={{ marginLeft: 8 }}>
                                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
                            </span>
                        </div>
                        <Table
                            rowSelection={{
                                selectedRowKeys,
                                onChange: () => {
                                    onSelectChange();
                                },
                            }}
                            columns={columns}
                            dataSource={data}
                        />
                    </div>
                </Col>
            </Row>
            <Row className="input-wrapper-without-margin">
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
            <Row className="input-wrapper-without-margin">
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
            <Row className="input-wrapper-without-margin margin-top">
                <Col xl={6} lg={12} xs={24}></Col>
                <Col xl={8} lg={12} xs={24} className="align-right">
                    <Button type="primary">Send</Button>
                </Col>
            </Row>
        </>
    );
};
export default Bulk;

// import React from "react";
// import ReactDOM from "react-dom";
// import "antd/dist/antd.css";
// import "./index.css";
// import { Table, Input, Button, Space } from "antd";
// import Highlighter from "react-highlight-words";
// import { SearchOutlined } from "@ant-design/icons";

// const data = [
//     {
//         key: "1",
//         name: "John Brown",
//         age: 32,
//         address: "New York No. 1 Lake Park",
//     },
//     {
//         key: "2",
//         name: "Joe Black",
//         age: 42,
//         address: "London No. 1 Lake Park",
//     },
//     {
//         key: "3",
//         name: "Jim Green",
//         age: 32,
//         address: "Sidney No. 1 Lake Park",
//     },
//     {
//         key: "4",
//         name: "Jim Red",
//         age: 32,
//         address: "London No. 2 Lake Park",
//     },
// ];

// class App extends React.Component {
//     state = {
//         searchText: "",
//         searchedColumn: "",
//     };

//     getColumnSearchProps = (dataIndex) => ({
//         filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
//             <div style={{ padding: 8 }}>
//                 <Input
//                     ref={(node) => {
//                         this.searchInput = node;
//                     }}
//                     placeholder={`Search ${dataIndex}`}
//                     value={selectedKeys[0]}
//                     onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
//                     onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
//                     style={{ marginBottom: 8, display: "block" }}
//                 />
//                 <Space>
//                     <Button
//                         type="primary"
//                         onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
//                         icon={<SearchOutlined />}
//                         size="small"
//                         style={{ width: 90 }}
//                     >
//                         Search
//                     </Button>
//                     <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
//                         Reset
//                     </Button>
//                     <Button
//                         type="link"
//                         size="small"
//                         onClick={() => {
//                             confirm({ closeDropdown: false });
//                             this.setState({
//                                 searchText: selectedKeys[0],
//                                 searchedColumn: dataIndex,
//                             });
//                         }}
//                     >
//                         Filter
//                     </Button>
//                 </Space>
//             </div>
//         ),
//         filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />,
//         onFilter: (value, record) =>
//             record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : "",
//         onFilterDropdownVisibleChange: (visible) => {
//             if (visible) {
//                 setTimeout(() => this.searchInput.select(), 100);
//             }
//         },
//         render: (text) =>
//             this.state.searchedColumn === dataIndex ? (
//                 <Highlighter
//                     highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
//                     searchWords={[this.state.searchText]}
//                     autoEscape
//                     textToHighlight={text ? text.toString() : ""}
//                 />
//             ) : (
//                 text
//             ),
//     });

//     handleSearch = (selectedKeys, confirm, dataIndex) => {
//         confirm();
//         this.setState({
//             searchText: selectedKeys[0],
//             searchedColumn: dataIndex,
//         });
//     };

//     handleReset = (clearFilters) => {
//         clearFilters();
//         this.setState({ searchText: "" });
//     };

//     render() {
//         const columns = [
//             {
//                 title: "Name",
//                 dataIndex: "name",
//                 key: "name",
//                 width: "30%",
//                 ...this.getColumnSearchProps("name"),
//             },
//             {
//                 title: "Age",
//                 dataIndex: "age",
//                 key: "age",
//                 width: "20%",
//                 ...this.getColumnSearchProps("age"),
//             },
//             {
//                 title: "Address",
//                 dataIndex: "address",
//                 key: "address",
//                 ...this.getColumnSearchProps("address"),
//                 sorter: (a, b) => a.address.length - b.address.length,
//                 sortDirections: ["descend", "ascend"],
//             },
//         ];
//         return <Table columns={columns} dataSource={data} />;
//     }
// }
