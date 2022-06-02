import React from 'react'
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import {userColumns, userRows} from '../../datatablesource';

const Datatable = () => {


    const actionColumn = [{field:"action", headerName:"Ação",width:200, renderCell:()=>{
      return(
        <div className="cellAction">
          <div className='viewButton'>Ver</div>
          <div className='deleteButton'>Deletar</div>
        </div>
      )
    }}];

  return (
    <div className="datatable">
        <DataGrid
            rows={userRows}
            columns={userColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
        />
    </div>
  )
}

export default Datatable