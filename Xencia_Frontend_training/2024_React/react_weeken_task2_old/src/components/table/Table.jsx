import React from "react";
import { BsFillTrashFill, BsFillPencilFill, BsFillEyeFill } from "react-icons/bs";
import { ContextList } from "../../App";
import "./Table.css";


export const Table = ({changesLog,changeLogList, rows, deleteRow, editRow, viewRow }) => {

  // console.log(changeLogList)
  // console.log(rows)

  const upadateschangeLogList=()=>{
    console.log('event triggered')
    changeLogList(changesLog)

  }
  return (
    <div className="table-wrapper">
      
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
                         upadateschangeLogList()}}
                    />
                  </div>

                  <div className="edit">
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(row.Id)}
                    />
                  </div>

                  <div className="view" >
                    <BsFillEyeFill
                      className="view-btn"
                      onClick={() => {
                        viewRow(row)
                        
                       
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