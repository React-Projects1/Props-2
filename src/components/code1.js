import React from "react";

// const Code1 = (props) => {
//   let style = {
//     display: "flex",
//     justifyContent: "center",
//     margin: "20px 50px",
//   };
//   let padding = {
//     paddingLeft: "15px"
//   }
//   return (
//     <div style={style}>
//       <h2 >{props.name}</h2>
//       <h2 style={padding}>{props.age}</h2>
//     </div>
//   );
// };

const Code1 = ({name,age}) => {
    let style = {
      display: "flex",
      justifyContent: "center",
      margin: "20px 50px",
    };
    let padding = {
      paddingLeft: "15px"
    }
    return (
      <div style={style}>
        <h2 >{name}</h2>
        <h2 style={padding}>{age}</h2>
      </div>
    );
  };
export default Code1;
