import React, { useState, Suspense } from "react";
import { Layout, Menu, Breadcrumb, Empty } from "antd";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons";

import { MENU_MAP } from "./constants";
import { COMPONENT_MAP } from "./componentMap";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

let LayoutComponent = (props) => {
    const [subMenuItem, setSubMenu] = useState("Greetings");
    const [menuItem, setSMenu] = useState("9");
    const [menuItemTitle, setSMenuTitle] = useState("Send Individual Greeting");

    const setSMenuItem = (val) => {
        const obj = MENU_MAP.find((a) => a.key === val);

        if (obj) {
            setSMenu(val);
            setSubMenu(obj.sub);
            setSMenuTitle(obj.title);
        }
    };

    const renderComponent = () => {
        if (COMPONENT_MAP[menuItem]) return COMPONENT_MAP[menuItem]();

        return <Empty />;
    };
    console.log();
    return (
        <Layout>
            <Header className="header">
                <div className="logo"></div>
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]}>
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">Customer Care</Menu.Item>
                    <Menu.Item key="3">About</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={["9"]}
                        defaultOpenKeys={["sub3"]}
                        style={{ height: "100%", borderRight: 0 }}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined />} title="Customers">
                            <Menu.Item
                                onClick={() => {
                                    setSMenuItem("1");
                                }}
                                key="1"
                            >
                                Update
                            </Menu.Item>
                            <Menu.Item
                                key="2"
                                onClick={() => {
                                    setSMenuItem("2");
                                }}
                            >
                                List
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined />} title="Bank Details">
                            <Menu.Item
                                key="5"
                                onClick={() => {
                                    setSMenuItem("5");
                                }}
                            >
                                Update Branchs
                            </Menu.Item>
                            <Menu.Item
                                key="6"
                                onClick={() => {
                                    setSMenuItem("6");
                                }}
                            >
                                Brank List
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="Greetings">
                            <Menu.Item
                                key="9"
                                onClick={() => {
                                    setSMenuItem("9");
                                }}
                            >
                                Send Individual Greeting
                            </Menu.Item>
                            <Menu.Item
                                key="10"
                                onClick={() => {
                                    setSMenuItem("10");
                                }}
                            >
                                Send Bulk Greeting
                            </Menu.Item>
                            <Menu.Item
                                key="11"
                                onClick={() => {
                                    setSMenuItem("11");
                                }}
                            >
                                Schedule Greetings
                            </Menu.Item>
                            <Menu.Item
                                key="12"
                                onClick={() => {
                                    setSMenuItem("12");
                                }}
                            >
                                History
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: "0 24px 24px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>Customer Care</Breadcrumb.Item>
                        <Breadcrumb.Item>{subMenuItem}</Breadcrumb.Item>
                        <Breadcrumb.Item>{menuItemTitle}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <Suspense>{renderComponent()}</Suspense>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default LayoutComponent;
