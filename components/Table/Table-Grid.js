import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

export default function DataTable(props) {
  const {columns ,rows ,pageSize} = props


  return (
    <div style={{ maxHeight: 600, minHeight:400, width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid pageSize={pageSize || 10} columns={columns || []} rows={rows || []} />
        </div>
      </div>
    </div>
  );
}
