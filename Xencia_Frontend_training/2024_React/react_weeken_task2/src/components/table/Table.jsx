import React, { useState } from "react";
import { BsFillTrashFill, BsFillPencilFill, BsFillEyeFill } from "react-icons/bs";
import { ContextList } from "../../App";
import NoteDialogBox from "../header/notification/NoteDialog";
import "./Table.css";


export const Table = ({changesLog,changeLogList, rows, deleteRow, editRow, viewRow }) => {
  const [idName,setIdName] = useState('')
  // console.log(changeLogList)
  // console.log(rows)

  const  [action,setAction] = useState('')

  const [isDialog,setDialogOnOrOff] = useState(false)
  const [isEditDialog,setEditDialogOnOrOff] = useState(false)

  
  const upadateschangeLogList=()=>{
    console.log('event triggered')
    changeLogList(changesLog)

  }
  return (
    <div className="table-wrapper">
      {isDialog && <NoteDialogBox action={action} idName={idName}  setDialogOnOrOff={setDialogOnOrOff}  setEditDialogOnOrOff={setEditDialogOnOrOff}/>}
    {isEditDialog && <NoteDialogBox action={action} idName={idName}  setDialogOnOrOff={setDialogOnOrOff}  setEditDialogOnOrOff={setEditDialogOnOrOff}/>}
     
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th className="expand">Name</th>
            <th>Designation</th>
            <th className="expand">Department</th>
            <th>Actions</th>
          </tr>
        </thead>


        <tbody>
          {rows.map((row) => (
            <tr key={row.Id}>
              <td>{row.Id}</td>
              <td>{row.Name}</td>
              <td>{row.Designation}</td>
              <td>{row.Department}</td>
              <td className="fit">
                <span className="actions">
                  <div className="delete">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() =>{
                         deleteRow(row.Id)
                         upadateschangeLogList()
                         setDialogOnOrOff(()=>true)
                         setIdName(row.Name)
                         setAction([row.Name,'Is Deleted SuccessFul'])
                        }}
                         


                    />
                  </div>

                  <div className="edit">
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => {
                        editRow(row.Id)
                        upadateschangeLogList()
                        setEditDialogOnOrOff(()=>true)
                        setAction([row.Name,'Is Edited SuccessFul'])}}
                    />
                  </div>

                  <div className="view" >
                    <BsFillEyeFill
                      className="view-btn"
                      onClick={() => {
                        viewRow(row)
                        upadateschangeLogList()
                        setAction(['Viewed',row.Name])
                      }}
                    />
                  </div>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};