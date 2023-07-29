import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DashboardContent,
  PostCard,
  PostingModal,
  SideBar,
} from "../../../components";
import { POST_DATA } from "../../../constants";
import { Images } from "../../../theme";
import "./styles.scss";
import { useCustomDispatch } from "../../../helpers/useCustomDispatch";
import {
  getGeneratedPostListRequest,
  getScheduledPostsListRequest,
} from "../../../redux/slicers/posts";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { getCurrentPageAccessToken } from "../../../services/utils";
const GeneratedPosts = () => {
  //STATES
  const [selected, setSelected] = useState("");
  const [postingModalOpen, setPostingModalOpen] = useState(false);
  const [postList, setPostList] = useState(POST_DATA);
  const [isDataLoading, setLoading] = useState(true);

  //CUSTOM DISPATCH
  const [getGeneratedPosts, postLoader] = useCustomDispatch(
    getGeneratedPostListRequest
  );
  const [getScheduledPosts, scheduledLoader] = useCustomDispatch(
    getScheduledPostsListRequest
  );
  //CONST VALS
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isScheduled = pathname === "/scheduled-posts";
  const isLoading = postLoader || scheduledLoader;

  //REDUX DATA
  const { selectedPageCategory } = useSelector((state) => state.pages);
  const { list } = useSelector((state) => state.posts);
  const keyword = useSelector(({ user }) => user.keyword);
  const scheduledList = useSelector(({ user }) => user.ScheduledList);
  console.log(pathname, "name");
  //HOOKS
  useEffect(() => {
    if (pathname === "/customized-posts") {
      let clone = POST_DATA.filter(
        (item) => item.hashtag.toLowerCase() === keyword.toLowerCase()
      );
      setPostList(clone);
    } else if (pathname === "/scheduled-posts") {
      setPostList(scheduledList);
      console.log({ postList });
    } else {
      setPostList(POST_DATA);
    }
  }, [keyword, pathname, scheduledList]);

  useEffect(() => {
    setLoading(true);
    if (!isScheduled) {
      const queryParams = keyword
        ? { genre: keyword }
        : { genre: selectedPageCategory };
      axios({
        method: "get",
        url: `https://api.unsplash.com/search/photos?query=${
          keyword ? keyword : selectedPageCategory
        }&per_page=5&page=1&client_id=RUrteUlGjuW2D0NbOC9NRTzR1r1dNCCQSz9gS8_qVDU`,
        responseType: "stream",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
      }).then(function (response) {
        console.log(response);
        getGeneratedPosts({
          payload: response,
          queryParams,
          logic(res) {
            setLoading(false);
          },
        });
      });
    } else {
      const queryParams = {
        fields: "attachments,scheduled_publish_time",
        access_token: getCurrentPageAccessToken(),
      };
      getScheduledPosts({
        queryParams,
        logic(res) {
          setLoading(false);
        },
      });
    }
  }, [keyword, pathname]);
  return (
    <div className="generated-posts-wrapper">
      <SideBar />
      <div className="generated-posts-content-wrapper">
        <Row gutter={[15, 15]} type="flex">
          <Col span={24} className="generated-title">
            <img src={Images.Back} onClick={() => navigate(-1)} />
            {pathname === "/scheduled-posts" ? (
              <h4>Scheduled Posts</h4>
            ) : (
              <h4>Generated Posts</h4>
            )}
          </Col>
          {isDataLoading ? (
            <div className="post-loader">
              <ClipLoader size={80} />
              <h3>
                Please wait while we are generating your posts. This may take a
                while
              </h3>
            </div>
          ) : (
            <>
              <Col span={24}>
                {keyword !== "" && pathname === "/customized-posts" && (
                  <p className="post-count-text">
                    Here are {list?.length} posts regarding "
                    {keyword.toUpperCase()}"
                  </p>
                )}
              </Col>
              {list?.map((item, i) => (
                <Col
                  lg={{ span: 8 }}
                  md={{ span: 12 }}
                  sm={{ span: 24 }}
                  xs={{ span: 24 }}
                >
                  <PostCard
                    hashtags={item.genre ?? item.scheduledTime}
                    image={item.image ?? item.media}
                    caption={item.caption}
                    id={item.id}
                    selected={selected?.id}
                    handleClick={() => {
                      setSelected(item);
                      setPostingModalOpen(true);
                    }}
                  />
                </Col>
              ))}
            </>
          )}
        </Row>
      </div>
      {!isScheduled && (
        <PostingModal
          open={postingModalOpen}
          handleClose={() => {
            setSelected("");
            setPostingModalOpen(false);
          }}
          image={selected?.image ?? selected?.media}
          hashtag={selected?.genre}
          caption={selected?.caption}
        />
      )}
    </div>
  );
};

export default GeneratedPosts;
