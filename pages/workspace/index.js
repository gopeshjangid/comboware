import React from 'react';
import Admin from 'layouts/Admin.js';
import WorkspaceComponent from 'components/Modules/Workspace';

function Workspace() {
  return <WorkspaceComponent />;
}

Workspace.layout = Admin;

export default Workspace;
