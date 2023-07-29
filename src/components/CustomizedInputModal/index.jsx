import { Button, Col, Form, Input, Modal, Row } from "antd";
import React from "react";
import "./styles.scss";
import { CloseCircleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setKeyword } from "../../redux/slicers/user";
import { toastAlert } from "../../services/utils";
import { ALERT_TYPES } from "../../constants";

function CustomizedInputModal({ open, handleClose }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [customForm] = Form.useForm();
  const handleSubmit = () => {
    const values = customForm.getFieldsValue();
    if (values.keyword !== undefined) {
      dispatch(setKeyword(values.keyword));
      navigate("/customized-posts");
      handleClose();
      customForm.resetFields();
    } else {
      toastAlert("Please Enter a Keyword", ALERT_TYPES.error);
    }
  };
  return (
    <Modal
      className="custom-input-modal"
      open={open}
      closeIcon={<CloseCircleFilled className="close-icon" />}
      onCancel={handleClose}
      title="Customized Post"
      centered={true}
      footer={false}
      width="360px"
    >
      <Form form={customForm} onFinish={handleSubmit}>
        <Form.Item name={"keyword"}>
          <Input placeholder="Enter Keyword" />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" type="primary" className="posts-btn">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default CustomizedInputModal;
