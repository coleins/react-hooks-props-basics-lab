import React from "react";

// function Links({ githubLink, linkedinLink }) {
//   return (
//     <div>
//       <h3>Links</h3>
//       <a href={githubLink}>{githubLink}</a>
//       <a href={linkedinLink}>{linkedinLink}</a>
//     </div>
//   );
// }

function Links(props) {
    return (
      <div>
        <h3>Links</h3>
        <a href={props.github}>{props.github}</a>
        <a href={props.linkedin}>{props.linkedin}</a>
      </div>
    );
  }
  

export default Links;
