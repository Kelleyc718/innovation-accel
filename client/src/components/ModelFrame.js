import "../css/ModelFrame.css";
import React from "react";

const ModelFrame = props => {
  return (
    <div className="frameBody">
      <iframe
        className="modelFrame"
        src={props.modelSource}
        title="Landing Frame"
      />
    </div>
  );
};

export default ModelFrame;

// import "../css/ModelFrame.css";
// import React from "react";
//
// const ModelFrame = props => {
//   return (
//     <div className="frameBody">
//       <object
//         className="modelFrame"
//         data={props.modelSource}
//         title="Landing Frame"
//       >
//         <embed src={props.modelSource} className="modelFrame" />
//       </object>
//     </div>
//   );
// };
//
// export default ModelFrame;
