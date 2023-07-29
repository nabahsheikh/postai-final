import { Col, Row } from "antd";
import React from "react";
import { useState } from "react";
import "./styles.scss";
import { Images } from "../../theme";
function PostCard({
  hashtags,
  image,
  caption,
  selected,
  id,
  handleClick,
  isList = false,
  likes,
}) {
  return (
    <div
      className={`post-card ${selected === id && "post-card-selected"}`}
      onClick={handleClick}
    >
      <Row gutter={[10, 10]}>
        <Col span={24}>
          <div className="hashtag">
            <p>#{hashtags}</p>
          </div>
        </Col>
        <Col span={24}>
          <img src={image} alt="" className="post-card-img" />
        </Col>
        <Col span={24}>
          <p className="caption">{caption}</p>
        </Col>
        {isList && (
          <Col span={24}>
            <Images.Heart /> {likes}
          </Col>
        )}
      </Row>
    </div>
  );
}

export default PostCard;
