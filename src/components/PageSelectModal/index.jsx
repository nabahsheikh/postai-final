import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
import "./styles.scss";
import { useCustomDispatch } from "../../helpers/useCustomDispatch";
import {
  getPageListRequest,
  setSelectedPageToken,
} from "../../redux/slicers/pages";
import { getCurrentAccessToken } from "../../services/utils";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { DASHBOARD_ROUTE } from "../../constants";

function PageSelectModal({ open, handleClose }) {
  //STATES
  const [selectedPage, setSelectedPage] = useState(undefined);
  //CONST VALS
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //CUSTOM DISPATCH
  const [getPageList, pageLoader] = useCustomDispatch(getPageListRequest);
  //REDUX DATA
  const { list } = useSelector((state) => state.pages);
  console.log(list, "list");
  //HOOKS
  useEffect(() => {
    const queryParams = {
      fields: "name,category,access_token,picture",
      access_token: getCurrentAccessToken(),
    };
    getPageList({ queryParams });
  }, []);

  //HANDLER
  const handleSelect = () => {
    dispatch(setSelectedPageToken(selectedPage));
    handleClose();
    navigate(DASHBOARD_ROUTE);
  };

  return (
    <Modal
      className="page-select-modal"
      open={open}
      title="Select Page"
      centered={true}
      footer={false}
      width="460px"
      closable={false}
    >
      {pageLoader ? (
        <ClipLoader size={40} color="#3992ee" />
      ) : (
        <Row gutter={[10, 10]} className="modal-content">
          {list?.map((item, index) => (
            <Col span={24}>
              <div
                className={`page-card-wrapper ${
                  selectedPage === item && "selected-page"
                } `}
                onClick={() => setSelectedPage(item)}
              >
                <img src={item.thumb} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p className="category">Category: {item.category}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      )}
      <div className="modal-footer">
        <Button
          className="footer-btn"
          type="primary"
          onClick={handleSelect}
          disabled={pageLoader || !selectedPage}
        >
          Continue
        </Button>
      </div>
    </Modal>
  );
}

export default PageSelectModal;
