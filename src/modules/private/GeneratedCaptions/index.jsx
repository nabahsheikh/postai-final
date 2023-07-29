import { Col, Image, Row } from "antd";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DashboardContent,
  PostCard,
  PostingModal,
  SideBar,
} from "../../../components";
import { CAPTION_DATA, POST_DATA } from "../../../constants";
import { Images } from "../../../theme";
import "./styles.scss";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useCustomDispatch } from "../../../helpers/useCustomDispatch";
import { getGeneratedCaptionListRequest } from "../../../redux/slicers/posts";
import { FLASK_BASE_URL } from "../../../config/webService";
import { ClipLoader } from "react-spinners";
const GeneratedCaptions = () => {
  const [selected, setSelected] = useState(undefined);
  const [postingModalOpen, setPostingModalOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { uploadedImage, uploadedImageFile } = useSelector(
    (state) => state.general
  );
  const [getCaption, captionLoader] = useCustomDispatch(
    getGeneratedCaptionListRequest
  );
  const { caption } = useSelector((state) => state.posts);
  useEffect(() => {
    setLoading(true);
    getCaption({
      queryParams: { fileName: uploadedImage },
      logic(res) {
        setLoading(false);
      },
    });
  }, [uploadedImage, uploadedImageFile]);
  const imageUrl = `${FLASK_BASE_URL}getImage?filename=${uploadedImage}`;
  return (
    <div className="generated-captions-wrapper">
      <SideBar />
      <div className="generated-captions-content-wrapper">
        <Row gutter={[15, 15]}>
          <Col span={24} className="generated-title">
            <h4>Generated Captions</h4>
          </Col>
          {captionLoader ? (
            <div className="loader-wrapper">
              {" "}
              <ClipLoader size={80} />
              <h3>
                Please wait while we are generating your captions. This may take
                a while
              </h3>
            </div>
          ) : (
            <Col span={24} className="caption-content-wrapper">
              <div className="captions-image">
                <Image src={uploadedImageFile} alt="" />
                <h3>
                  Checkout some interesting captions for your picture based on
                  the following description.
                </h3>
                <h4>{caption?.Description}</h4>
              </div>
              <div className="captions-wrapper">
                {caption?.Captions?.map((item, i) => (
                  <div
                    className={`caption-item ${
                      selected?.id === item?.id && "caption-item-selected"
                    }`}
                    onClick={() => {
                      setPostingModalOpen(true);
                      setSelected(item);
                    }}
                  >
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </Col>
          )}
        </Row>
      </div>
      <PostingModal
        open={postingModalOpen}
        handleClose={() => {
          setSelected(undefined);
          setPostingModalOpen(false);
        }}
        image={imageUrl}
        imageUrl={uploadedImageFile}
        hashtag={caption.genre}
        caption={selected}
      />
    </div>
  );
};

export default GeneratedCaptions;
