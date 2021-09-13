import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

export default function DataTable(props) {
  const {columns ,rows} = props


  return (
    <div style={{ height: 400, width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid columns={columns || []} rows={rows || []} />
        </div>
      </div>
    </div>
  );
}
