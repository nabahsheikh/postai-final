import { Button, Col, Modal, Row } from "antd";
import React from "react";
import "./styles.scss";
import { CloseCircleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setKeyword } from "../../redux/slicers/user";

function PostGenerationModal({ open, handleClose, handleCustom }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Modal
      className="post-generation-modal"
      open={open}
      closeIcon={<CloseCircleFilled className="close-icon" />}
      onCancel={handleClose}
      title="Post Generation"
      centered={true}
      footer={false}
      width="360px"
    >
      <Row gutter={[10, 10]}>
        <Col span={"24"}>
          <Button
            type="primary"
            className="posts-btn"
            onClick={() => {
              dispatch(setKeyword(""));
              navigate("/generated-posts");
              handleClose();
            }}
          >
            Auto Generated Posts
          </Button>
        </Col>
        <Col span={"24"}>
          <Button type="primary" className="posts-btn" onClick={handleCustom}>
            Customized Posts
          </Button>
        </Col>
      </Row>
    </Modal>
  );
}

export default PostGenerationModal;
