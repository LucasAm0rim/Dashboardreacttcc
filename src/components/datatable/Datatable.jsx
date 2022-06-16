import React from 'react'
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import {userColumns, userRows} from '../../datatablesource';
import { Link } from 'react-router-dom';

const Datatable = () => {


    const actionColumn = [{field:"action", headerName:"Ação",width:200, renderCell:()=>{
      return(
        <div className="cellAction">
          <Link to="/users/test" style={{textDecoration:"none"}}>
          <div className='viewButton'>Ver</div></Link>
          <div className='deleteButton'>Deletar</div>
        </div>
      )
    }}];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Adicionar Novo Usuário
        <Link to="/users/new" className="link">
          Adicionar Novo
        </Link>
      </div>
        <DataGrid
        className='datagrid'
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