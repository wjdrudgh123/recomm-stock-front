import React, { useState } from "react";

import "./rss.css";

const Rss = ({ news, editorName }) => {
  const [rssIndex, setRssIndex] = useState({
    arrIndex: 0,
    name: editorName,
  });
  // const setEditorName = (beforeName) => {
  //   let editor = "";
  //   if (beforeName === "hangyeong") {
  //     editor = "한국경제";
  //   } else if (beforeName === "chosun") {
  //     editor = "조선비즈";
  //   } else if (beforeName === "yonhap") {
  //     editor = "연합뉴스";
  //   } else if (beforeName === "donga") {
  //     editor = "동아일보";
  //   }

  //   return editor;
  // };

  // const handleMoveEditor = (e) => {
  //   const target = e.target;
  //   const direction = target.dataset.direction;
  //   if (direction === "left") {
  //     let minus = rssIndex.arrIndex - 1;
  //     if (rssIndex.arrIndex === 0) {
  //       minus = 4 - 1;
  //     }

  //     const editorName = Object.keys(news[minus]);
  //     setRssIndex({ arrIndex: minus, name: editorName[0] });
  //   } else if (direction === "right") {
  //     let plus = rssIndex.arrIndex + 1;
  //     if (rssIndex.arrIndex === 3) {
  //       plus = 0;
  //     }
  //     const editorName = Object.keys(news[plus]);

  //     setRssIndex({ arrIndex: plus, name: editorName[0] });
  //   }
  // };
  const handleClickEditor = (e) => {
    e.stopPropagation();
    const target = e.target;
    const editor = target.dataset.broad;
    let index = 0;
    for (let i = 0; i < news.length; i++) {
      const name = Object.keys(news[i]);
      if (editor === name[0]) {
        index = i;
        break;
      }
    }
    setRssIndex({ arrIndex: index, name: editor });
  };
  return (
    <div className="rss-body">
      <header>
        <ul>
          <li
            data-broad="hangyeong"
            className="editors"
            onClick={handleClickEditor}
          >
            한국경제
          </li>
          <li
            data-broad="chosun"
            className="editors"
            onClick={handleClickEditor}
          >
            조선비즈
          </li>
          <li
            data-broad="yonhap"
            className="editors"
            onClick={handleClickEditor}
          >
            연합뉴스
          </li>
          <li
            data-broad="donga"
            className="editors"
            onClick={handleClickEditor}
          >
            동아경제
          </li>
        </ul>
      </header>

      <div className="news-contents">
        {news[rssIndex.arrIndex][rssIndex.name].map((news, i) => {
          const editor = rssIndex.name;
          const title = news.title["_cdata"];
          let link = news.link["_text"];
          let img = "";
          if (editor === "hangyeong") {
            try {
              img = news["image"]["_cdata"];
            } catch (e) {
              console.log(`E: hangyeong no Img: ${e}`);
            }
          } else if (editor === "chosun") {
            try {
              const description = news["description"]["_cdata"];
              const arr = description.split(">");
              if (arr.length === 8) {
                const tmp = arr[3].split("<");
                const tmp2 = tmp[1].split('"');
                img = tmp2[1];
              }
            } catch (e) {
              console.log(`E: chosun no Img: ${e}`);
            }
          } else if (editor === "yonhap") {
          } else if (editor === "donga") {
            try {
              const description = news["description"]["_cdata"];
              const arr = description.split("<");

              if (arr.length === 2) {
                const tmp2 = arr[1].split("'");
                img = tmp2[1];
              }
            } catch (e) {
              console.log(`E: donga no Img: ${e}`);
            }
          }
          if (link === undefined) {
            link = news.link["_cdata"];
          }
          return (
            <div key={i} className="headline">
              <a href={link}>
                {img !== "" ? <img src={img} alt="img" /> : <div></div>}
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
