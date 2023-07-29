import { Button, Col, Modal, Row, Upload, Form } from "antd";
import React, { useState } from "react";
import "./styles.scss";
import { CloseCircleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Images } from "../../theme";
import { ClipLoader } from "react-spinners";
import { FileUploader } from "react-drag-drop-files";
import { useCustomDispatch } from "../../helpers/useCustomDispatch";
import {
  setUploadedImage,
  uploadImageRequest,
} from "../../redux/slicers/general";
import { documentValidation, toastAlert } from "../../services/utils";
import { ALERT_TYPES } from "../../constants";
import { useDispatch } from "react-redux";

function CaptionGenerationModal({ open, handleClose }) {
  //STATES
  const [file, setFile] = useState(null);
  const [fileName, setfileName] = useState(null);
  const [inputFile, setInput] = useState(false);

  //CONST VALS
  const navigate = useNavigate();
  const { Dragger } = Upload;
  const fileTypes = ["png", "jpg", "jpeg"];
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  //CUSTOM DISPATCH
  const [uploadImage, uploadLoading] = useCustomDispatch(uploadImageRequest);

  //HELPERS
  const setErrorToggle = (error) => {
    toastAlert(error, ALERT_TYPES.ERROR);
  };
  const reader = new FileReader();
  //HANDLERS
  const handleChange = (file) => {
    if (documentValidation(file, setErrorToggle)) {
      const data = new FormData();
      setInput(true);
      data.append("file", file);
      console.log(file, "filesss");
      uploadImage({
        payload: data,
        logic(res) {
          console.log(res, "image");
          setFile(res.data.file);
          setfileName(res.data.file);
          dispatch(setUploadedImage(URL.createObjectURL(file)));
        },
      });
    }
  };

  const closeHandler = () => {
    setFile(null);
    setfileName(null);
    handleClose();
    setInput(false);
  };

  return (
    <Modal
      className="caption-generation-modal"
      open={open}
      closeIcon={<CloseCircleFilled className="close-icon" />}
      onCancel={() => {
        closeHandler();
      }}
      title="Caption Generation"
      centered={true}
      footer={false}
      width="460px"
    >
      <Row gutter={[10, 10]}>
        <Col span={"24"} className="image-dragger-wrapper">
          {/* <img src={URL.createObjectURL(new Blob(inputFile))} /> */}
          <Form form={form}>
            <Form.Item>
              <div className={`upload-doc-box ${file ? "active" : ""}`}>
                {uploadLoading ? (
                  <ClipLoader size={14} height="100%" />
                ) : (
                  <>
                    <FileUploader
                      classes="drop_area"
                      handleChange={handleChange}
                      name="file"
                      types={fileTypes}
                    />
                    <div className="content">
                      <Images.Upload />
                      <p>{fileName ?? "Drag and Drop File From Computer"}</p>
                    </div>
                  </>
                )}
              </div>
            </Form.Item>
          </Form>
        </Col>
        <Col span={"24"}>
          <Button
            type="primary"
            className="posts-btn"
            onClick={() => {
              if (inputFile) {
                closeHandler();
                navigate("/generated-captions");
              } else {
                toastAlert("Please Upload a file", ALERT_TYPES.error);
              }
            }}
            disabled={uploadLoading}
          >
            Generate Caption
          </Button>
        </Col>
      </Row>
    </Modal>
  );
}

export default CaptionGenerationModal;
