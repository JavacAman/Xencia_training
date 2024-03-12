import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import TableMain from './components/table/TableMain';
import Notification from './components/header/notification/Notification';
import { useState } from 'react';




// console.log(changeLogList)


function App() {
  const [listValueDeleted,setvaDel] = useState('')
  const changeLogList = function(cons){
    console.log(cons)
    setvaDel(cons)
    return cons
  }

  return (
    
      <div className="App">
        
        <Sidebar />
        <Header listValueDeleted={listValueDeleted}/>
        <TableMain  changeLogList={changeLogList}/>
        {/* <TableMain Notify={Notification} /> */}
      </div>
   

  );
}

export default App;
