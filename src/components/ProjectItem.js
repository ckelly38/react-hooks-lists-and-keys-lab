import React from "react";

function ProjectItem({ name, about, technologies }) {
  let mytecharr = null;
  if (technologies === undefined || technologies === null);
  else
  {
    mytecharr = technologies.map((tech) => <span key={tech}>{tech}</span>);
  }

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {mytecharr}
      </div>
    </div>
  );
}

export default ProjectItem;
