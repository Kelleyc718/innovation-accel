// import "../css/Visualizations.css";
// import React from "react";
// import { Link } from "react-router-dom";
//
// import DVGraph from "./VisualizationsHelpers/DVGraph/DVGraph";

// const Visualizations = props => {
//   return (
//     <div className="pageLayout">
//       <div className="viz">
//         <DVGraph
//           path="/users/manta/Oil  copy"
//           activeTab="11"
//           showFilter={false}
//         />
//       </div>
//
//       <div className="viz2">
//         <DVGraph
//           path="/users/manta/Oil  copy"
//           activeTab="14"
//           showFilter={false}
//         />
//       </div>
//       <Link to="/refineries">Vizual</Link>
//     </div>
//   );
// };
//
// export default Visualizations;

// ************************************

// import "../css/Visualizations.css";
// import React from "react";
// // import Navbar from "./Navbar";
// import { Button } from "semantic-ui-react"; //
// import DVGraph from "./VisualizationsHelpers/DVGraph/DVGraph";
//
// class Visualizations extends React.Component {
//   // Set user in Local Storage
//   componentDidMount() {
//     // This is forcing the page to reload when the page first renders in order to
//     // load the visualizations the next time somebody navigates to this tab
//     // **Current workaround to load visualizations on other tabs**
//     if (window.localStorage) {
//       if (!localStorage.getItem("firstLoad")) {
//         localStorage.setItem("firstLoad", true);
//         window.location.reload();
//       } else {
//         localStorage.removeItem("firstLoad");
//       }
//     }
//   }
//
//   render() {
//     console.log("THis is the vis component");
//     return (
//       <div className="pageLayout">
//         <div className="topSection">
//           <div className="viz1">
//             <div className="vizTitle">Net Loss by Year</div>
//             <DVGraph
//               path="/users/manta/Oil  copy"
//               activeTab="18"
//               showFilter={false}
//             />
//           </div>
//
//           <div className="viz2">
//             <div className="vizTitle">Public and Private Costs since 2018</div>
//             <DVGraph
//               path="/users/manta/Oil  copy"
//               activeTab="19"
//               showFilter={false}
//             />
//           </div>
//           <div className="vizBtns">
//             <Button
//               className="btn-link"
//               href="/sensors"
//               basic
//               inverted
//               color="red"
//             >
//               Sensors
//             </Button>
//             <Button
//               className="btn-link"
//               href="/refineries"
//               basic
//               inverted
//               color="red"
//             >
//               Refineries
//             </Button>
//           </div>
//         </div>
//
//         <div className="bottomSection">
//           <div className="leftVizSection">
//             <div className="viz3">
//               <div className="vizTitle">Spill Counts</div>
//               <DVGraph
//                 path="/users/manta/Oil  copy"
//                 activeTab="11"
//                 showFilter={false}
//               />
//             </div>
//
//             <div className="viz4">
//               <div className="vizTitle">Net Loss by Liquid Type</div>
//               <DVGraph
//                 path="/users/manta/Oil  copy"
//                 activeTab="17"
//                 showFilter={false}
//               />
//             </div>
//           </div>
//
//           <div className="rightVizSection">
//             <div className="viz5">
//               <DVGraph
//                 path="/users/manta/Oil  copy"
//                 activeTab="14"
//                 showFilter={false}
//               />
//             </div>
//
//             <div className="viz6">
//               <DVGraph
//                 path="/users/manta/Oil  copy"
//                 activeTab="15"
//                 showFilter={false}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default Visualizations;

// import "../css/Visualizations.css";
import React from "react";

class Visualizations extends React.Component {
  render() {
    return (
      <iframe
        className="modelFrame"
        src="http://127.0.0.1:54520/"
        title="Landing Frame"
      />
    );
  }
}

export default Visualizations;
