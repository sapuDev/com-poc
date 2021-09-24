import React from "react";
import { Row } from "antd";
import UploadFile from "../../../components/fileUploader";

let UpdateBranchData = () => {
    return (
        <Row className="input-wrapper margin-top">
            <UploadFile
                messages={`Support for xlsx/xls/csv upload to update branch details. Strictly prohibit from uploading company
                    data or other band files`}
            />
        </Row>
    );
};

export default UpdateBranchData;
