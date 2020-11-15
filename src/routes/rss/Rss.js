import React, { useState } from "react";

import "./rss.css";

const Rss = ({ news, editorName }) => {
  const [rssIndex, setRssIndex] = useState({
    arrIndex: 0,
    name: String(editorName),
  });

  const setEditorName = (beforeName) => {
    console.log(beforeName);
    let editor = "";
    if (beforeName === "hangyeong") {
      editor = "한국경제";
    } else if (beforeName === "chosun") {
      editor = "조선비즈";
    } else if (beforeName === "yonhap") {
      editor = "연합뉴스";
    } else if (beforeName === "donga") {
      editor = "동아일보";
    }

    return editor;
  };

  const handleMoveEditor = (e) => {
    const target = e.target;
    const direction = target.dataset.direction;
    if (direction === "left") {
      let minus = rssIndex.arrIndex - 1;
      if (rssIndex.arrIndex === 0) {
        minus = 4 - 1;
      }

      const editorName = Object.keys(news[minus]);

      setRssIndex({ arrIndex: minus, name: editorName[0] });
    } else if (direction === "right") {
      let plus = rssIndex.arrIndex + 1;
      if (rssIndex.arrIndex === 3) {
        plus = 0;
      }
      const editorName = Object.keys(news[plus]);

      setRssIndex({ arrIndex: plus, name: editorName[0] });
    }
  };
  return (
    <div className="rss-body">
      <header>
        <span>
          <i
            className="fas fa-arrow-left"
            data-direction="left"
            onClick={handleMoveEditor}
          ></i>
        </span>
        <div className="editors">{setEditorName(rssIndex.name)}</div>
        <span>
          <i
            className="fas fa-arrow-right"
            data-direction="right"
            onClick={handleMoveEditor}
          ></i>
        </span>
      </header>

      <div className="news-contents">
        {news[rssIndex.arrIndex][rssIndex.name].map((news, i) => {
          const editor = rssIndex.name;
          const title = news.title["_cdata"];
          let link = news.link["_text"];
          let img = "";
          if (editor === "hangyeong") {
            img = news["image"]["_cdata"];
          } else if (editor === "chosun") {
            const description = news["description"]["_cdata"];
            const arr = description.split(">");
            if (arr.length === 8) {
              const tmp = arr[3].split("<");
              const tmp2 = tmp[1].split('"');
              img = tmp2[1];
            }
          } else if (editor === "yonhap") {
          } else if (editor === "donga") {
            const description = news["description"]["_cdata"];
            const arr = description.split("<");

            if (arr.length === 2) {
              const tmp2 = arr[1].split("'");
              img = tmp2[1];
            }
          }
          if (link === undefined) {
            link = news.link["_cdata"];
          }
          return (
            <div key={i} className="headline">
              <a href={link}>
                {img !== "" ? <img src={img} /> : <div></div>}
                <span className="headline-title">{title}</span>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rss;

/*

<div className="news-contents">
              {broadCastNews.map((news, i) => {
                const keys = Object.keys(news);
                const title = news.title["_cdata"];
                let link = news.link["_text"];
                let img = "";
                if (editor === "한국경제") {
                  img = news["image"]["_cdata"];
                } else if (editor === "조선비즈") {
                  const description = news["description"]["_cdata"];
                  const arr = description.split(">");
                  if (arr.length === 8) {
                    const tmp = arr[3].split("<");
                    const tmp2 = tmp[1].split('"');
                    img = tmp2[1];
                  }
                } else if (editor === "연합뉴스") {
                } else if (editor === "동아일보") {
                  const description = news["description"]["_cdata"];
                  const arr = description.split("<");

                  if (arr.length === 2) {
                    const tmp2 = arr[1].split("'");
                    img = tmp2[1];
                  }
                }
                if (link === undefined) {
                  link = news.link["_cdata"];
                }
                return (
                  <>
                    <div key={i} className="headline">
                      <a href={link}>
                        {img !== "" ? <img src={img} /> : <div></div>}
                        <span className="headline-title">{title}</span>
                      </a>
                    </div>
                  </>
                );
              })}
            </div>
*/
