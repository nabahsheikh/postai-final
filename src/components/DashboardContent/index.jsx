import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.scss";
import { Images } from "../../theme";
import PostGenerationModal from "../PostGenerationModal";
import CaptionGenerationModal from "../CaptionGenerationModal";
import { useState } from "react";
import CustomizedInputModal from "../CustomizedInputModal";
import { useDispatch, useSelector } from "react-redux";
import { getPostsRequest } from "../../redux/slicers/user";
import { USER_POSTS } from "../../constants";
import axios from "axios";

function DashboardContent() {
  const navigate = useNavigate();
  const [customModalOpen, setCustomModalOpen] = useState(false);
  const [postModalOpen, setPostModalOpen] = useState(false);
  const [captionModalOpen, setCaptionModalOpen] = useState(false);
  const handleThird = () => {
    navigate(USER_POSTS);
  };

  //REDUX DATA
  const { data } = useSelector((state) => state.user);

  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "https://api.unsplash.com/search/photos?query=travel&client_id=RUrteUlGjuW2D0NbOC9NRTzR1r1dNCCQSz9gS8_qVDU",
  //     responseType: "stream",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   }).then(function (response) {
  //     console.log(response);
  //   });
  // }, []);

  return (
    <div className="content-wrapper">
      <Row className="dashboard-resp-view" gutter={[10, 15]} type="flex">
        <Col span={24}>
          <div className="banner">
            <p>
              Welcome,
              <br /> {data?.name}.
              <br /> <p className="resp-text">What do you want to do today?</p>
            </p>
            <img src={Images.Banner} className="options-img" />
          </div>
        </Col>
        <Col span={12} className="lone-column">
          <div className="option one" onClick={() => setPostModalOpen(true)}>
            <p>
              Generate
              <br /> Post
            </p>
            <img src={Images.Option1} />
          </div>
        </Col>
        <Col span={12} className="lone-column">
          <div className="option two" onClick={() => setCaptionModalOpen(true)}>
            <p>
              Get <br /> Caption
            </p>
            <img src={Images.Option2} />
          </div>
        </Col>
        <Col span={12} className="lone-column">
          <div className="option three" onClick={handleThird}>
            <p>
              Post <br />
              Performance
            </p>
            <img src={Images.Option3} />
          </div>
        </Col>
        <Col span={12} className="lone-column">
          <div
            className="option four"
            onClick={() => navigate("/scheduled-posts")}
          >
            <p>
              Scheduled <br />
              Posts
            </p>
            <img src={Images.Option4} className="option-four-img" />
          </div>
        </Col>
      </Row>
      <PostGenerationModal
        open={postModalOpen}
        handleClose={() => setPostModalOpen(false)}
        handleCustom={() => {
          setPostModalOpen(false);
          setCustomModalOpen(true);
        }}
      />
      <CustomizedInputModal
        open={customModalOpen}
        handleClose={() => setCustomModalOpen(false)}
      />
      <CaptionGenerationModal
        open={captionModalOpen}
        handleClose={() => setCaptionModalOpen(false)}
      />
    </div>
  );
}

export default DashboardContent;
