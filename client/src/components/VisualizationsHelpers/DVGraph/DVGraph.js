import React from "react";
import styles from "./DVGraph.module.css";
// eslint-disable-next-line
import axios from "axios";
import knockout from "./knockout";

class DVGraph extends React.Component {
  // async componentDidMount() {
  //   const res = await axios.get(
  //     "https://innovateanalytics-orasenatdpltoci02.analytics.ocp.oraclecloud.com/dv/ui/"
  //   );
  //   return () => {
  //     window.requirejs(
  //       [
  //         "knockout",
  //         "ojs/ojcore",
  //         "ojs/ojknockout",
  //         "ojs/ojcomposite",
  //         "jet-composites/oracle-dv/loader"
  //       ],
  //       function(ko) {
  //         ko.applyBindings();
  //       }
  //     );
  //   };
  // }

  render() {
    return (
      <div ref={elem => (this.dv = elem)} className={styles.DVGraph}>
        <oracle-dv
          project-path={this.props.path}
          active-page="canvas"
          active-tab-id={this.props.activeTab}
        />
      </div>
    );
  }
}

export default DVGraph;
