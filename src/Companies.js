import React from "react";

const pop = (event) => {
  const allow = event.target;
  const ul = allow.nextSibling;
  if (allow.innerText === "∧") {
    allow.innerText = "∨";
    ul.className = "company__news";
  } else if (allow.innerText === "∨") {
    allow.innerText = "∧";
    ul.className += "on";
  }
};

const Companies = ({ name, boxPrice, news }) => {
  const { firstBox, secBox } = boxPrice;

  return (
    <div className="companies">
      <div className="companies__company">
        <div className="company__title">
          <h3>{name}</h3>
          <ul>
            <li>
              <span>1차: {`${firstBox[0]} ~ ${firstBox[1]}`}</span>
            </li>
            <li>
              <span>2차: {`${secBox[0]} ~ ${secBox[1]}`}</span>
            </li>
          </ul>
        </div>
        <div className="company__news_allow" onClick={pop}>
          ∨
        </div>
        <ul className="company__news">
          {news.length === 0 ? (
            <li>
              <div>뉴스 없음</div>
            </li>
          ) : (
            news.map(({ newsTitle, newsLink }, index) => {
              const splitLink = newsLink.split("/");
              const splitUrl_1 = splitLink[splitLink.length - 1].split("=");
              const newsCode = splitUrl_1[1].split("&");
              const officeCode = splitUrl_1[2].split("&");
              const itemCode = splitUrl_1[3].split("&");
              return (
                <li key={index} className="news">
                  <a
                    href={`https://m.stock.naver.com/item/main.nhn#/stocks/${itemCode[0]}/news/${newsCode[0]}/office/${officeCode[0]}`}
                  >
                    <h4>{newsTitle}</h4>
                  </a>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
};

export default Companies;
