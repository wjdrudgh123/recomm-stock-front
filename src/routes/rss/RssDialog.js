import React from "react";

const RssDialog = ({ title, description }) => {
  return (
    <div className="rss-dialog">
      <div className="rss-dialog_title">
        <h2>{title}</h2>
      </div>
      <div className="rss-dialog_description">
        <p>{description}</p>
        <br />
        <br />
      </div>
    </div>
  );
};

export default RssDialog;
