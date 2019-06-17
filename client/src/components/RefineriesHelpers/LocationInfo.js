// import "./LocationInfo.css";
// import React from "react";
// import { Link } from "react-router-dom";
// import StatusBar from "./StatusBar";
// import Countdown from "./Countdown";
//
// const LocationInfo = props => {
//   console.log("the forecast is: ", props.forecast);
//
//
//
//   const list = props.refineries.map(refinery => {
//     const {
//       REID,
//       NAME,
//       CITY,
//       STATE,
//       STATUS,
//       serviceDate,
//       maintenanceDate
//     } = refinery;
//     return (
//       <div key={REID} className="locationInfoCard">
//         <Link
//           to={{
//             pathname: `/refineries/${NAME}`,
//             state: {
//               OperatorName: NAME
//             }
//           }}
//           s
//         >
//           <StatusBar calculation={STATUS} />
//           <div className="locationName">
//             <h1 className="locationNameTitle">{NAME}</h1>
//             <h3 className="locationStateTitle">
//               {CITY}, {STATE}
//             </h3>
//           </div>
//
//           <div className="bottomRefBody">
//             <div className="leftSide">
//               <div className="locationBody">D H M S</div>
//               <div className="timeStamps">
//                 <div className="services">
//                   Service: <Countdown deadline={serviceDate} />
//                 </div>
//                 <div className="services">
//                   Maintenance: <Countdown deadline={maintenanceDate} />
//                 </div>
//               </div>
//             </div>
//             <div className="rightSide">
//               <div className="rightContents">
//                 <p>{props.forecast} weeks until service is required</p>
//               </div>
//             </div>
//           </div>
//         </Link>
//       </div>
//     );
//   });
//
//   return <React.Fragment>{list}</React.Fragment>;
// };
//
// export default LocationInfo;

import "./LocationInfo.css";
import React from "react";
import warning from "./warning_yellow.png";
import { Link } from "react-router-dom";
import StatusBar from "./StatusBar";
import Countdown from "./Countdown";

const LocationInfo = props => {
  console.log("the forecast is: ", props.forecast);

  const list = props.refineries.map(refinery => {
    const {
      REID,
      NAME,
      CITY,
      STATE,
      STATUS,
      serviceDate,
      maintenanceDate
    } = refinery;

    const setForecast = () => {
      if (STATUS === "Yellow") {
        console.log("the STATUS is: ", STATUS);
        return (
          <div className="warningContents">
            <img className="circleWarning" src={warning} alt="warning_image" />
            <div className="circleContents">
              <p className="forecastNumber">{props.forecast}</p>
              <p className="warningText">weeks until service required</p>
            </div>
          </div>
        );
      } else {
        return;
      }
    };

    return (
      <div key={REID} className="locationInfoCard">
        <Link
          to={{
            pathname: `/refineries/${NAME}`,
            state: {
              OperatorName: NAME
            }
          }}
          s
        >
          <StatusBar calculation={STATUS} />
          <div className="locationName">
            <h1 className="locationNameTitle">{NAME}</h1>
            <h3 className="locationStateTitle">
              {CITY}, {STATE}
            </h3>
          </div>

          <div className="bottomRefBody">
            <div className="leftSide">
              <div className="locationBody">D H M S</div>
              <div className="timeStamps">
                <div className="services">
                  Service: <Countdown deadline={serviceDate} />
                </div>
                <div className="services">
                  Maintenance: <Countdown deadline={maintenanceDate} />
                </div>
              </div>
            </div>
            <div className="rightSide">
              <div>{setForecast()}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <React.Fragment>{list}</React.Fragment>;
};

export default LocationInfo;
