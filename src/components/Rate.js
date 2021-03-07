import React from "react";

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
  var rating = "<div>";
  for (let i = 1; i <= 5; i++) {
    if (i === rate) {
      console.log("OKKKK");
      let whiteStar = i;
      let yellowStar = 5 - i;
      for (let j = 0; j <= yellowStar; j++) {
        rating += "Y";
      }
      for (let j = 0; j <= whiteStar; j++) {
        rating += "W";
      }
      break;
    }
    if (i < rate && rate < i + 1) {
      let whiteStar = 5 - (i + 1);
      let yellowStar = i;

      for (let j = 1; j <= yellowStar; j++) {
        rating += "<i className='fa fa-star' aria-hidden='true'></i>";
      }
      rating += "H";
      for (let j = 1; j <= whiteStar; j++) {
        rating += "W";
      }
      break;
    }
  }

  rating += "</div>";
  const displayRate = () => {
    return <div>rating</div>;
  };
}

const Rate = (props) => {
  return (
    <div>
      <script
        src="https://kit.fontawesome.com/f4f546feb0.js"
        crossorigin="anonymous"
      ></script>
      {showRate(calcRate(props.rates))}
    </div>
  );
};

export default Rate;
