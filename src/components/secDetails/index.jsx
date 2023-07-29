import React from "react";
import "./styles.scss";
const SecDetail = ({
  title = "",
  description = "",
  isScndTitle = false,
  scndTitle = "",
  isDescription = false,
  isLeft = false,
}) => {
  const splitTitle = title.includes("/b") ? title.split("/b") : title;
  const splitSecTitle = scndTitle.includes("/b")
    ? scndTitle.split("/b")
    : scndTitle;
  return (
    <section
      className="title-wrapper"
      style={{ textAlign: isLeft ? "left" : "center" }}>
      {title.includes("/b") ? (
        <h2 className="sec-title" data-aos="fade-up">
          {splitTitle[0]}
          <span>{splitTitle[1]}</span>
          {splitTitle[2]}
        </h2>
      ) : (
        <h2 className="sec-title" data-aos="fade-up">
          {title}
        </h2>
      )}
      {isScndTitle && (
        <>
          {scndTitle.includes("/b") ? (
            <h2 className="sec-title" data-aos="fade-up">
              {splitSecTitle[0]}
              <span>{splitSecTitle[1]}</span>
              {splitSecTitle[2]}
            </h2>
          ) : (
            <h2 className="sec-title" data-aos="fade-up">
              {scndTitle}
            </h2>
          )}
        </>
      )}
      {isDescription && (
        <p className="sec-description" data-aos="fade-up">
          {description}
        </p>
      )}
    </section>
  );
};
export default SecDetail;
