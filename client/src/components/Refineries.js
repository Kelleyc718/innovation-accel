import "../css/Refineries.css";
import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import LocationInfo from "./RefineriesHelpers/LocationInfo";

const API_URL = "http://localhost:5000/refs";

class Refineries extends React.Component {
  state = {
    refineries: []
  };

  componentDidMount() {
    this.fetchUrl();
  }

  fetchUrl = async () => {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();
      this.handleResults(json);
    } catch (err) {
      console.log(err);
    }
  };

  handleResults = refineries => {
    this.setState({
      refineries
    });
  };

  render() {
    console.log("the refineries are: ", this.state.refineries);

    return (
      <div className="pageLayout">
        <Navbar />
        <Link to="/refineries/texas">Vizssss</Link>

        <div className="refineriesCanvas">
          <LocationInfo refineries={this.state.refineries} />
        </div>
      </div>
    );
  }
}

export default Refineries;

// import "../css/Refineries.css";
// import React from "react";
// import Navbar from "./Navbar";
// import { Link } from "react-router-dom";
// import Spinner from "../helpers/Spinner";
// import LocationInfo from "./RefineriesHelpers/LocationInfo";
//
// const API_URL = "http://localhost:5000/refs";
//
// class Refineries extends React.Component {
//   state = {
//     isLoading: true,
//     refineries: []
//   };
//
//   componentDidMount() {
//     this.fetchUrl();
//   }
//
//   fetchUrl = async () => {
//     try {
//       const response = await fetch(API_URL);
//       const json = await response.json();
//       this.handleResults(json);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//
//   handleResults = refineries => {
//     this.setState({
//       refineries
//     });
//   };
//
//   handleOnLoad = () => {
//     this.setState({
//       isLoading: false
//     });
//   };
//
//   render() {
//     console.log("the refineries are: ", this.state.refineries);
//     const { isLoading } = this.state;
//     let shouldDisplayImage = isLoading ? 0 : null;
//
//     return (
//       <div className="pageLayout">
//         <Navbar />
//         <Link to="/refineries/texas">Vizssss</Link>
//
//         <div className="refineriesCanvas">
//           {isLoading && <Spinner />}
//
//           <LocationInfo
//             onLoad={this.handleOnLoad}
//             style={{ opacity: shouldDisplayImage }}
//             refineries={this.state.refineries}
//           />
//         </div>
//       </div>
//     );
//   }
// }
//
// export default Refineries;
