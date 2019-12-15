// // import "../css/Refineries.css";
// // import React from "react";
// // import { Dimmer, Loader } from "semantic-ui-react";
// // import Navbar from "./Navbar";
// // import LocationInfo from "./RefineriesHelpers/LocationInfo";
// //
// // const API_URL = "http://localhost:5000/refs";
// // const API_FORECAST = "http://localhost:5000/sensordata/forecasts";
// //
// // class Refineries extends React.Component {
// //   state = {
// //     refineries: [],
// //     forecast: "",
// //     active: true
// //   };
// //
// //   componentDidMount() {
// //     this.fetchUrl();
// //     // this.fetchForecast();
// //   }
// //
// //   componentWillUnmount() {
// //     console.log("still trying to unmount", this.intervalUrl);
// //     clearInterval(this.intervalURL);
// //   }
// //
// //   // fetchForecast = () => {
// //   //   try {
// //   //     this.interval = setInterval(async () => {
// //   //       const response = await fetch(API_FORECAST);
// //   //       const json = await response.json();
// //   //       console.log(
// //   //         "the json forecast is: ",
// //   //         json.weeksWithinWhichServicingRequired
// //   //       );
// //   //       const weeks = json.weeksWithinWhichServicingRequired;
// //   //       this.handleForecastResults(weeks);
// //   //     }, 1000);
// //   //   } catch (err) {
// //   //     console.log(err);
// //   //   }
// //   // };
// //   //
// //   // handleForecastResults = forecast => {
// //   //   this.setState({
// //   //     forecast
// //   //   });
// //   // };
// //
// //   fetchUrl = () => {
// //     try {
// //       this.intervalURL = setInterval(async () => {
// //         const response = await fetch(API_URL);
// //         const json = await response.json();
// //         console.log(json);
// //         this.handleResults(json);
// //       }, 1000);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };
// //
// //   handleResults = refineries => {
// //     this.setState({
// //       refineries,
// //       active: false
// //     });
// //   };
// //
// //   render() {
// //     return (
// //       <div className="refBody">
// //         <Navbar />
// //         <Dimmer active={this.state.active}>
// //           <Loader size="large">Loading Refineries</Loader>
// //         </Dimmer>
// //         <div className="refineriesCanvas">
// //           <LocationInfo
// //             forecast={this.state.forecast}
// //             refineries={this.state.refineries}
// //           />
// //         </div>
// //       </div>
// //     );
// //   }
// // }
// //
// // export default Refineries;
// // //
// // //
//
// import "../css/Refineries.css";
// import React from "react";
// import { Dimmer, Loader } from "semantic-ui-react";
// import Navbar from "./Navbar";
// import LocationInfo from "./RefineriesHelpers/LocationInfo";
//
// const API_URL = "http://localhost:5000/refs";
// const API_FORECAST = "http://localhost:5000/sensordata/forecasts";
//
// let controller = new AbortController();
// let signal = controller.signal;
//
// class Refineries extends React.Component {
//   state = {
//     refineries: [],
//     forecast: "",
//     active: true
//   };
//
//   componentDidMount() {
//     this.fetchUrl();
//     this.fetchForecast();
//   }
//
//   // componentDidUpdate(prevProp, prevState) {
//   //   // console.log("new is: ", this.state.refineries);
//   //   // console.log("old state is: ", prevState.refineries);
//   //   console.log("prevProps are: ", prevProp);
//   //   console.log("prevState are: ", prevState);
//   //
//   //   if (this.state.refineries !== prevState.refineries) {
//   //     console.log("the update is: ", true);
//   //     this.fetchUrl();
//   //     // this.fetchForecast(this.props.forecast);
//   //   }
//   // }
//   // componentWillUnmount() {
//   //   this.setState({
//   //     refineries: [],
//   //     forecast: ""
//   //   });
//   // }
//
//   // componentWillUnmount() {
//   //   signal.addEventListener("abort", () => {
//   //     // Logs true:
//   //     return signal.aborted;
//   //   });
//   // }
//
//   fetchForecast = async () => {
//     try {
//       const response = await fetch(API_FORECAST, { signal });
//       const json = await response.json();
//       console.log(
//         "the json forecast is: ",
//         json.weeksWithinWhichServicingRequired
//       );
//       const weeks = json.weeksWithinWhichServicingRequired;
//       this.handleForecastResults(weeks);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//
//   handleForecastResults = forecast => {
//     this.setState({
//       forecast
//     });
//   };
//
//   fetchUrl = async () => {
//     try {
//       const response = await fetch(API_URL, { signal });
//       const json = await response.json();
//       this.handleResults(json);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//
//   handleResults = refineries => {
//     this.setState({
//       refineries,
//       active: false
//     });
//   };
//
//   render() {
//     return (
//       <div className="refBody">
//         <Navbar />
//         <Dimmer active={this.state.active}>
//           <Loader size="large">Loading Refineries</Loader>
//         </Dimmer>
//         <div className="refineriesCanvas">
//           <LocationInfo
//             forecast={this.state.forecast}
//             refineries={this.state.refineries}
//           />
//         </div>
//       </div>
//     );
//   }
// }
//
// export default Refineries;
//
// // import "../css/Refineries.css";
// // import React from "react";
// // import { Dimmer, Loader } from "semantic-ui-react";
// // import Navbar from "./Navbar";
// // import LocationInfo from "./RefineriesHelpers/LocationInfo";
// //
// // const API_URL = "http://localhost:5000/refs";
// // const API_FORECAST = "http://localhost:5000/sensordata/forecasts";
// //
// // const controller = new AbortController();
// // const signal = controller.signal;
// //
// // class Refineries extends React.Component {
// //   state = {
// //     refineries: [],
// //     forecast: "",
// //     active: true
// //   };
// //
// //   componentDidMount() {
// //     this.fetchUrl();
// //     this.fetchForecast();
// //   }
// //
// //   componentDidUpdate(prevProps, prevState) {
// //     const { refineries } = this.state;
// //     if (refineries !== prevState.refineries) {
// //       this.fetchUrl(this.props.refineries);
// //       this.fetchForecast(this.props.forecast);
// //     }
// //   }
// //
// //   // componentWillUnmount() {
// //   //   signal.addEventListener("abort", () => {
// //   //     // Logs true:
// //   //     return signal.aborted;
// //   //   });
// //   // }
// //
// //   fetchForecast = async () => {
// //     try {
// //       const response = await fetch(API_FORECAST);
// //       const json = await response.json();
// //       console.log(
// //         "the json forecast is: ",
// //         json.weeksWithinWhichServicingRequired
// //       );
// //       const weeks = json.weeksWithinWhichServicingRequired;
// //       this.handleForecastResults(weeks);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };
// //
// //   handleForecastResults = forecast => {
// //     this.setState({
// //       forecast
// //     });
// //   };
// //
// //   fetchUrl = async () => {
// //     try {
// //       const response = await fetch(API_URL);
// //       const json = await response.json();
// //       this.handleResults(json);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };
// //
// //   handleResults = refineries => {
// //     this.setState({
// //       refineries,
// //       active: false
// //     });
// //   };
// //
// //   render() {
// //     return (
// //       <div className="refBody">
// //         <Navbar />
// //         <Dimmer active={this.state.active}>
// //           <Loader size="large">Loading Refineries</Loader>
// //         </Dimmer>
// //         <div className="refineriesCanvas">
// //           <LocationInfo
// //             forecast={this.state.forecast}
// //             refineries={this.state.refineries}
// //           />
// //         </div>
// //       </div>
// //     );
// //   }
// // }
// //
// // export default Refineries;

import "../css/Refineries.css";
import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import Navbar from "./Navbar";
import LocationInfo from "./RefineriesHelpers/LocationInfo";

const API_URL = "http://localhost:5000/refs";
const API_FORECAST = "http://localhost:5000/sensordata/forecasts";

class Refineries extends React.Component {
  state = {
    refineries: [],
    forecast: "",
    active: true
  };

  componentDidMount() {
    this.fetchUrl();
    this.fetchForecast();
  }

  fetchForecast = () => {
    try {
      setInterval(async () => {
        const response = await fetch(API_FORECAST);
        const json = await response.json();
        console.log(
          "the json forecast is: ",
          json.weeksWithinWhichServicingRequired
        );
        const weeks = json.weeksWithinWhichServicingRequired;
        this.handleForecastResults(weeks);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  handleForecastResults = forecast => {
    this.setState({
      forecast
    });
  };

  fetchUrl = () => {
    try {
      setInterval(async () => {
        const response = await fetch(API_URL);
        const json = await response.json();
        this.handleResults(json);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  handleResults = refineries => {
    this.setState({
      refineries,
      active: false
    });
  };

  render() {
    return (
      <div className="refBody">
        <Navbar />
        <Dimmer active={this.state.active}>
          <Loader size="large">Loading Refineries</Loader>
        </Dimmer>
        <div className="refineriesCanvas">
          <LocationInfo
            forecast={this.state.forecast}
            refineries={this.state.refineries}
          />
        </div>
      </div>
    );
  }
}

export default Refineries;
