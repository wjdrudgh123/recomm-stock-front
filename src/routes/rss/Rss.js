import React, { useState, useEffect } from "react";
import axios from "axios";
import RssDialog from "./RssDialog";
import "./rss.css";

const handleNewsClick = (evt) => {
  const headlines = document.querySelectorAll(".headline");
  const editors = document.querySelector(".editors");
  const dialogHeader = document.querySelector(".rss-dialog_header");
  const event = evt.target;
  let target = null;

  if (event.className === "headline") {
    target = event;
  } else {
    target = event.parentElement;
  }

  const dialog = target.nextSibling;

  for (let i = 0; i < headlines.length; i++) {
    headlines[i].classList.add("off");
  }
  editors.classList.add("off");
  dialogHeader.classList.add("on");
  dialog.classList.add("on");
};

const handleBackArrow = () => {
  const headlines = document.querySelectorAll(".headline");
  const editors = document.querySelector(".editors");
  const dialogHeader = document.querySelector(".rss-dialog_header");
  const dialog = document.querySelector(".rss-dialog.on");

  for (let i = 0; i < headlines.length; i++) {
    headlines[i].classList.remove("off");
  }
  editors.classList.remove("off");
  dialogHeader.classList.remove("on");
  dialog.classList.remove("on");
};

const Rss = () => {
  const [rss, setRss] = useState({ loading: true, data: null, error: null });

  useEffect(() => {
    axios("http://localhost:4000/rss")
      .then(({ data: { yonhap } }) => {
        setRss({
          loading: false,
          data: yonhap,
        });
      })
      .catch((error) => {
        setRss({
          loading: false,
          error: error,
        });
      });
  }, []);
  return (
    <div className="rss-body">
      {rss.data === null ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="editors">
            <span>연합뉴스</span>
          </div>
          <div className="rss-dialog_header" onClick={handleBackArrow}>
            <i className="fas fa-long-arrow-alt-left"></i>
          </div>
          <div className="headlines">
            {rss.data.map((news, index) => {
              const title = news["title"]._cdata;
              //const link = news["link"]._text;
              const description = news["content:encoded"]._cdata;
              return (
                <>
                  <div className="headline" onClick={handleNewsClick}>
                    <span className="headline-title">{title}</span>
                  </div>
                  <RssDialog title={title} description={description} />
                </>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Rss;
