import React from "react";

function Greetings() {
  var t = new Date();
  var h = t.getHours();
  var time;
  var textColor;
  if (h <= 12) {
    time = "morning";
    textColor = { color: "red" };
  } else if (h >= 18) {
    time = "evening";
    textColor = { color: "green" };
  } else {
    time = "afternoon";
    textColor = { color: "blue" };
  }

  return <p style={textColor}>Good {time}</p>;
}

export default Greetings;
