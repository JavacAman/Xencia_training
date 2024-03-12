import './App.css';
import React, { Component } from 'react';
// import { DropDownList } from '@progress/kendo-react-dropdowns';
// import { NumericTextBox } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import '@progress/kendo-theme-default/dist/all.css';
import Employees from './employee.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: Employees}
  };

  render() {
    return (
      <div className='App'>
        <h1>Employee Table</h1>
        <div className='emp'></div>

      
        <div className='Empgrid'>
          <Grid data={this.state.data}>
            <Column field='Id' title='Id' />
            <Column field='Name' title='Name' />
            <Column field='Designation' title='Designation' />
            <Column field='Department' title='Department' />
          </Grid>
        </div>
        <div className='addEmp'>
          <Button>Add Employee</Button>
        </div>
      </div>
    );
  }
}

export default App;
