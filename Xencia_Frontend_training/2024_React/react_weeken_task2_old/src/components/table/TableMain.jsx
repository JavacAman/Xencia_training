import { useState } from "react";
import { Table } from "./Table";
import { Dialogbox } from "./dialogbox/Dialogbox";
import './TableMain.css';
import View from "./View";
import Icon from "../header/icon/Icon";
import Notification from "../header/notification/Notification";

// export const changesLog = [];

const TableMain = ( props ) => {
  const {changeLogList}= props 




   // Initial state for the rows (employee data)
   // Each object represents an employee with properties like Id, Name, Designation, and Department.
   // This data will be used to render the table.
  const [rows, setRows] = useState([
    {
      Id: "1",
      Name: "Aman",
      Designation: "System Analyst Trainee",
      Department: "Development",
    },
    {
      Id: "2",
      Name: "Ravi",
      Designation: "System Analyst Trainee",
      Department: "Development",
    },
    {
      Id: "3",
      Name: "Jarvis",
      Designation: "Cyber Security",
      Department: "Security",
    },
    {
      Id: "4",
      Name: "Ultron",
      Designation: "Ethical Hacking",
      Department: "Security",
    },
    {
      Id: "5",
      Name: "Sophia",
      Designation: "IT Services",
      Department: "Robotics",
    },
    
  ]);

  //Initializing state for the selectedRow which will be used to keep track of the employee data 
  //that is currently selected (for viewing).
  const [selectedRow, setSelectedRow] = useState(null);

  //Initializing state for managing modals (dialog boxes). 

  //modalOpen is for the general modal
  const [modalOpen, setModalOpen] = useState(false);

  // rowToEdit tracks the row being edited
  const [rowToEdit, setRowToEdit] = useState(null);

  //viewModalOpen tracks the state of the view modal
  const [viewModalOpen, setViewModalOpen] = useState(false);

  const [changesLog, setChangesLog] = useState([]); // New array to track changes
  
// console.log(changesLog)/
  // Handling the deletion of a row by filtering the previous rows
  // Notify('Deleted a row') is called to notify about the deletion.
  const handleDeleteRow = (targetIndex) => {
    // console.log(rows);
    let traceObj = rows[targetIndex-1]
    // console.log(traceObj)

    // const updateList = rows.filter(each=>each.id !== traceObj.Id)
    //   console.log(updateList)

    setRows(()=>{
      const updateList = rows.filter(each=>each.Id !== traceObj.Id)
      // console.log(updateList)
      return updateList
    })

    setChangesLog((prev)=>{
      const deletedItem =rows.filter(each=>each.Id===traceObj.Id)
      // return deletedItem

      return [...prev,deletedItem]
    })

    // (prevLog) => [
    //   ...prevLog,
    //   { action: "add", id: newRow.Id },
    // ]

    

    

    
    // setRows((prevRows) => {
    //   const deletedRow = prevRows[targetIndex];
    //   const updatedRows = prevRows.filter((_, idx) => idx !== targetIndex);

    //    // Log the deletion
    //    setChangesLog((prevLog) => [
    //     ...prevLog,
    //     { action: "delete", id: deletedRow.Id },
    //   ]);

    //   // Notify('Deleted a row');
    //   return updatedRows;
    // });
  };

  //Defining the handleViewRow function that sets the selectedRow state and opens the view modal.
  const handleViewRow = (data) => {
    setSelectedRow(data);
    setViewModalOpen(true);
  };

  //Defining the handleEditRow function that sets the rowToEdit state and opens the general modal for editing.
  const handleEditRow = (idx) => {
    // console.log(idx)
    setRowToEdit(idx);
    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {

      // Handling the submission of a new row
      // If rowToEdit is null, it means a new row is being added.
      // Notify('Added a new row') is called to notify about the addition.
    if (rowToEdit === null) {
      setRows((prevRows) => {
        const updatedRows = [...prevRows, newRow];

         // Log the addition
         setChangesLog((prevLog) => [
          ...prevLog,
          { action: "add", id: newRow.Id },
        ]);

        // Notify('Added a new row');
        return updatedRows;
      });
    } else {

      // Handling the submission of an edited row
      // Notify('Edited a row') is called to notify about the edit.
      setRows((prevRows) => {
        const updatedRows = prevRows.map((currRow, i) => (i === rowToEdit ? newRow : currRow));

         // Log the edit
         setChangesLog((prevLog) => [
          ...prevLog,
          { action: "edit", id: newRow.Id },
        ]);

        // Notify('Edited a row');
        return updatedRows;
      });
    }

    // Resetting rowToEdit state after submission to null
    setRowToEdit(null);
  };


   //Rendering the Table component and passing necessary props rows, deleteRow, editRow, viewRow.
  return (
    <div className="Add">

   

      <Table changesLog={changesLog} changeLogList={changeLogList} rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} viewRow={handleViewRow} />
      <button onClick={() => setModalOpen(true)} className="btn1">
        Add New Employee
      </button>
      {modalOpen && (
        <Dialogbox
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}

      {viewModalOpen && (
        <View
          data={selectedRow}
          closeModal={() => setViewModalOpen(false)}
        />
      )}
      

    {/* <Icon changesLog={changesLog} /> */}
    </div>
  );
};

export default TableMain;



