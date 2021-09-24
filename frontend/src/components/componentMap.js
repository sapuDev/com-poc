import UpdateCustomerData from "../containers/customer/update";
import CustomerList from "../containers/customer/list";
import UpdateBranchData from "../containers/branch/update";
import BranchList from "../containers/branch/list";
import IndividualGreetings from "../containers/greetings/individualGreetings";
import Bulk from "../containers/greetings/bulk";
import ScheduleGreetings from "../containers/greetings/scheduled";
import History from "../containers/greetings/history";

export const COMPONENT_MAP = {
    1: (props) => <UpdateCustomerData {...props} />,

    2: (props) => <CustomerList {...props} />,

    5: (props) => <UpdateBranchData {...props} />,

    6: (props) => <BranchList {...props} />,

    9: (props) => <IndividualGreetings {...props} />,

    10: (props) => <Bulk {...props} />,

    11: (props) => <ScheduleGreetings {...props} />,

    12: (props) => <History {...props} />,
};
