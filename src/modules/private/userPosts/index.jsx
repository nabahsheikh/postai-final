import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DashboardContent,
  PostCard,
  PostingModal,
  SideBar,
} from "../../../components";
// import { POST_DATA } from "../../../constants" 100819899669056;
import { Images } from "../../../theme";
import "./styles.scss";
import { getPostsRequest } from "../../../redux/slicers/user";
import { useCustomDispatch } from "../../../helpers/useCustomDispatch";
import { getCurrentPageAccessToken } from "../../../services/utils";

const UserPosts = () => {
  const { posts } = useSelector((state) => state.user);
  console.log(posts);
  const dispatch = useDispatch();
  const [getPosts] = useCustomDispatch(getPostsRequest);
  useEffect(() => {
    // dispatch(
    //   getPostsRequest({ responseCallback: (res) => console.log("res") })
    // );
    const queryParams = {
      fields: "attachments,likes",
      access_token: getCurrentPageAccessToken(),
    };
    getPosts({ queryParams });
  }, []);
  const navigate = useNavigate();
  return (
    <div className="user-posts-wrapper">
      <SideBar />
      <div className="generated-posts-content-wrapper">
        <Row gutter={[15, 15]}>
          <Col span={24} className="generated-title">
            <img src={Images.Back} onClick={() => navigate(-1)} />
            <h4>User's Posts</h4>
          </Col>
          {posts?.map((item, i) => (
            <Col
              lg={{ span: 8 }}
              md={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <PostCard
                // hashtags={item.hashtag}
                image={item.media}
                caption={item.caption}
                id={item.id}
                // selected={selected?.id}
                // handleClick={() => {
                //   setSelected(item);
                //   setPostingModalOpen(true);
                // }}
                isList={true}
                likes={item.likes}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default UserPosts;
