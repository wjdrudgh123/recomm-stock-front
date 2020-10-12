import React from "react";

const pop = (event) => {
  const ul = event.target.nextSibling;
  const title = event.target;
  if (ul.className.indexOf("on") !== -1) {
    ul.className = "company__news";
    title.className = "company__title";
  } else {
    ul.className = "company__news on";
    title.className = "company__title click";
  }
};

const Companies = ({ name, news }) => {
  console.log(name);
  console.log(news);
  return (
    <div className="companies">
      <div className="companies__company">
        <div className="company__title" onClick={pop}>
          <h3>{name}</h3>
          <i className="icon"></i>
        </div>
        <ul className="company__news">
          {news.map(({ title, description, link }, index) => {
            const splitLink = link.split("/");
            const getNewWord = splitLink[4].split("#");
            const newsLink = `${getNewWord[0]}/${getNewWord[1]}/${splitLink[5]}/${splitLink[6]}`;
            console.log(`http://m.finance.daum.net/quotes/${newsLink}`);
            const goLink = () => {
              document.location.href = `http://m.finance.daum.net/quotes/${newsLink}`;
            };
            return (
              <li className="news" key={index} onClick={goLink}>
                <h4>{title}</h4>
                <p>{description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
//
export default Companies;
