import { Button, Col, Input, Modal, Row, Tooltip } from "antd";
import React from "react";
import "./styles.scss";
import {
  CloseCircleFilled,
  EditOutlined,
  SendOutlined,
  ScheduleOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useEffect } from "react";
import { getCurrentPageAccessToken, toastAlert } from "../../services/utils";
import { ALERT_TYPES } from "../../constants";
import { DatePicker, Space } from "antd";
import { useDispatch } from "react-redux";
import { setScheduledList } from "../../redux/slicers/user";
import { useCustomDispatch } from "../../helpers/useCustomDispatch";
import { createPostRequest } from "../../redux/slicers/pages";
import moment from "moment";
import { ClipLoader } from "react-spinners";
import { savePostRequest } from "../../redux/slicers/posts";

function PostingModal({
  open,
  handleClose,
  image,
  hashtag,
  caption,
  imageUrl,
}) {
  const [captionValue, setCaptionValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isSchedule, setIsSchedule] = useState(false);
  const dispatch = useDispatch();

  //CUSTOM DISPATCH
  const [createPost, createPostLoader] = useCustomDispatch(createPostRequest);
  const [savePost] = useCustomDispatch(savePostRequest);

  const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };

  const onOk = (value) => {
    const dateTime = moment(value._d).toISOString();
    const queryParams = {
      url: image,
      caption: caption,
      published: false,
      scheduled_publish_time: moment(dateTime).unix().valueOf(),
      access_token: getCurrentPageAccessToken(),
    };
    createPost({
      queryParams,
      logic(res) {
        savePost({
          payload: {
            id: res.id,
            caption: caption,
            image: image,
            postDate: dateTime,
            genre: hashtag,
            isScheduled: true,
          },
        });
        if (res)
          toastAlert("Posted Scheduled Successfully", ALERT_TYPES.success);
      },
    });
    setIsEdit(false);
    setIsSchedule(false);
    const payload = [{ hashtag: hashtag, image: image, caption: captionValue }];
    dispatch(setScheduledList(payload));
    handleClose();
  };

  const handlePost = () => {
    const queryParams = {
      url: image,
      caption: captionValue,
      access_token: getCurrentPageAccessToken(),
    };
    createPost({
      queryParams,
      logic(res) {
        if (res) {
          savePost({
            payload: {
              id: res.post_id,
              caption: captionValue,
              image: image,
              postDate: new Date(),
              genre: hashtag,
              isScheduled: false,
            },
          });
          toastAlert("Posted Successfully", ALERT_TYPES.success);
          setIsEdit(false);
          setIsSchedule(false);
          handleClose();
        }
      },
    });
  };
  const handleSchedule = () => {
    setIsSchedule(!isSchedule);
  };

  const handleEdit = () => {
    if (!isEdit) {
      setCaptionValue(caption);
      setIsEdit(!isEdit);
    } else {
      setCaptionValue(captionValue);
      setIsEdit(!isEdit);
    }
  };

  useEffect(() => {
    setCaptionValue(caption);
  }, [caption]);
  return (
    <Modal
      className="posting-modal"
      open={open}
      closeIcon={<CloseCircleFilled className="close-icon" />}
      onCancel={() => {
        setIsEdit(false);
        setIsSchedule(false);
        handleClose();
      }}
      centered={true}
      footer={false}
      width="360px"
    >
      <Row gutter={[10, 10]}>
        <Col span={24}>
          <div className="hashtag">
            <p>#{hashtag}</p>
          </div>
        </Col>
        <Col span={24}>
          <img className="post-image" src={imageUrl ?? image} alt="" />
        </Col>
        <Col span={24}>
          {isEdit ? (
            <Input.TextArea
              value={captionValue}
              onChange={(e) => setCaptionValue(e.target.value)}
              autoSize={{ minRows: 2, maxRows: 5 }}
            />
          ) : (
            <p className="caption">{captionValue}</p>
          )}
        </Col>
        <Col span={24} className="posting-btn-wrapper">
          <Button type="primary" className="posting-btn" onClick={handleEdit}>
            {isEdit ? (
              <Tooltip title="Finish Editing" placement="bottom">
                <CheckOutlined className="posting-icons" />
              </Tooltip>
            ) : (
              <Tooltip title="Edit Post" placement="bottom">
                <EditOutlined className="posting-icons" />
              </Tooltip>
            )}
          </Button>
          <Button
            type="primary"
            className="posting-btn"
            onClick={handleSchedule}
            disabled={isEdit}
          >
            <Tooltip title="Schedule Post" placement="bottom">
              <ScheduleOutlined className="posting-icons" />
            </Tooltip>
          </Button>
          <Button
            type="primary"
            className="posting-btn"
            onClick={handlePost}
            disabled={isEdit}
          >
            <Tooltip title="Post Now" placement="bottom">
              {createPostLoader ? (
                <ClipLoader color="#fff" size={15} />
              ) : (
                <SendOutlined className="posting-icons" />
              )}
            </Tooltip>
          </Button>
        </Col>
        {isSchedule && (
          <Col span={24}>
            <span className="scheduler">
              <DatePicker
                showTime={{ format: "HH:mm A", use12Hours: true }}
                onChange={onChange}
                onOk={onOk}
              />
            </span>
          </Col>
        )}
      </Row>
    </Modal>
  );
}

export default PostingModal;
