import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

function roundHalf(num) {
  return Math.round(num * 2) / 2;
}

function calcRate(rates) {
  var len = rates.length;
  var total = 0;
  for (let i = 0; i < len; i++) {
    total += rates[i];
  }
  return roundHalf(total / len);
}

function showRate(rate) {
  let plainStars = Math.floor(rate);
  const halfStar = rate - plainStars !== 0;
  let whiteStar = 5 - rate;
  let starSize = 20;
  var count = 1;

  if (halfStar) whiteStar -= 1;

  const stars = [];

  for (let i = 0; i < plainStars; i++) {
    stars.push(
      <BsStarFill
        className="star-rate"
        size={starSize}
        data-id={count}
        onMouseOver={colorizePreviousStars}
      />
    );
    count++;
  }

  if (halfStar) {
    stars.push(
      <BsStarHalf
        className="star-rate"
        size={starSize}
        data-id={count}
        onMouseOver={colorizePreviousStars}
      />
    );
    count++;
  }

  for (let i = 0; i < whiteStar; i++) {
    stars.push(
      <BsStar
        className="star-rate"
        size={starSize}
        data-id={count}
        onMouseOver={colorizePreviousStars}
      />
    );
    count++;
  }

  return stars.map((value) => {
    return <> {value} </>;
  });
}

function colorizePreviousStars(e) {
  var stars = document.getElementsByClassName("star-rate");
  let idHover = e.target.getAttribute("data-id");
  // console.log()
  if (idHover == null) {
    console.log(idHover);
    Array.from(stars).forEach((star) => {
        star.classList.remove("orange-star");
        star.removeAttribute("title");
    });
  } else {
      e.target.setAttribute("title", "Donnez la note de " + idHover + "/5 pour cette devinette");
    Array.from(stars).forEach((star) => {
      if (star.getAttribute("data-id") <= idHover) {
        star.classList.add("orange-star");
      }
    });
  }
}

const Rate = (props) => {
  return <div className="yellowstars">{showRate(calcRate(props.rates))}</div>;
};

export default Rate;
