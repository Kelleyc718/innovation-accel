import React from "react";
import styles from "./DVGraph.module.css";
// import history from "../../../history";
// eslint-disable-next-line
import knockout from "./knockout";

class DVGraph extends React.Component {
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
