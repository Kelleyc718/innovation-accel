import "../css/Visualizations.css";
import React from "react";
import { Link } from "react-router-dom";

import DVGraph from "./VisualizationsHelpers/DVGraph/DVGraph";

const Visualizations = props => {
  return (
    <div className="pageLayout">
      <div className="viz">
        <DVGraph path="/users/manta/Oil " activeTab="7" showFilter={false} />
      </div>

      <div className="viz2">
        <DVGraph path="/users/manta/Oil " activeTab="8" showFilter={false} />
      </div>
      <Link to="/refineries">Vizual</Link>
    </div>
  );
};

// class Visualizations extends React.Component {
//   componentDidMount() {
//     this.thisIsViz();
//   }
//
//   thisIsViz = () => {
//     return (
//       <div className="viz">
//         <DVGraph path="/users/manta/Oil " activeTab="7" showFilter={false} />
//       </div>
//     );
//   };
//
//   render() {
//     return <div>{this.thisIsViz}</div>;
//   }
// }

export default Visualizations;
