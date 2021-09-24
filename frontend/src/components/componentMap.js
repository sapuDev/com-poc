import IndividualGreetings from "../containers/greetings/individualGreetings";
import Bulk from "../containers/greetings/bulk";
import History from "../containers/greetings/history";

export const COMPONENT_MAP = {
    1: (props) => <IndividualGreetings {...props} />,

    2: (props) => <IndividualGreetings {...props} />,

    5: (props) => <IndividualGreetings {...props} />,

    6: (props) => <IndividualGreetings {...props} />,

    9: (props) => <IndividualGreetings {...props} />,

    10: (props) => <Bulk {...props} />,

    11: (props) => <IndividualGreetings {...props} />,

    12: (props) => <History {...props} />,
};
