import React from "react";
import Admin from "layouts/Admin.js";
import WorkspaceComponent from "components/Modules/Workspace";

function Workspace() {
  return (
    <div>
      <WorkspaceComponent />
   </div>
  );
}

Workspace.layout = Admin;

export default Workspace;
