import IndividualGreetings from "../containers/greetings/individualGreetings";

export const COMPONENT_MAP = [
    {
        key: "1",
        sub: "Customers",
        title: "Update",
        component: (props) => {
            <IndividualGreetings {...props} />;
        },
    },
    {
        key: "2",
        sub: "Customers",
        title: "List",
        component: (props) => {
            <IndividualGreetings {...props} />;
        },
    },
    {
        key: "5",
        sub: "Bank Details",
        title: "Update Branchs",
        component: (props) => {
            <IndividualGreetings {...props} />;
        },
    },
    {
        key: "6",
        sub: "Bank Details",
        title: "Branck List",
        component: (props) => {
            <IndividualGreetings {...props} />;
        },
    },
    {
        key: "9",
        sub: "Greetings",
        title: "Greetings",
        component: (props) => {
            <IndividualGreetings {...props} />;
        },
    },
    {
        key: "10",
        sub: "Greetings",
        title: "Send Bulk Greeting",
        component: (props) => {
            <IndividualGreetings {...props} />;
        },
    },
    {
        key: "11",
        sub: "Greetings",
        title: "Schedule Greetings",
        component: (props) => {
            <IndividualGreetings {...props} />;
        },
    },
    {
        key: "12",
        sub: "Greetings",
        title: "History",
        component: (props) => {
            <IndividualGreetings {...props} />;
        },
    },
];
