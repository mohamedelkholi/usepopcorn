import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating
//         color={"blue"}
//         maxRating={10}
//         onMovieRating={setMovieRating}
//       />
//       <p> this movie has rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    {/* 
    <StarRating
      maxRating={5}
      messages={["terrible", "bad", "good", "very good", "amazing"]}
    />
    <StarRating maxRating={5} size={24} color={"red"} defaultRating={2} /> */}

    {/* <Test /> */}
  </React.StrictMode>
);
