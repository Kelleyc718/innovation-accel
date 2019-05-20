// import "./LandingText.css";
// import React from "react";
//
// const LandingText = () => {
//   return (
//     <div className="landing-text">
//       <div className="slide1">
//         <p>Harnessing Advanced</p>
//         <p>Analytics</p>
//       </div>
//       <div className="slide2">
//         <p>Condition-Based</p>
//         <p>Maintenance</p>
//       </div>
//       <div className="slide3">
//         <p>Improving Your</p>
//         <p>Efficiency</p>
//       </div>
//     </div>
//   );
// };
//
// export default LandingText;
//

import "./LandingText.css";
import React from "react";

const LandingText = () => {
  return (
    <div className="content-slider">
      <div className="slider">
        <div className="mask">
          <ul>
            <li className="anim1">
              <div className="quote">Securing Your Insights</div>
            </li>
            <li className="anim2">
              <div className="quote">Harnessing Advanced Analytics</div>
            </li>
            <li className="anim3">
              <div className="quote">Condition-based Maintenance</div>
            </li>
            <li className="anim4">
              <div className="quote">Improving Your Efficiency</div>
            </li>
            <li className="anim5">
              <div className="quote">Log in with the link above</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingText;
