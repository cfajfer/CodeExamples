import { useState } from 'react';
import ContactList from './Pages/ContactList';
import SwitchComponent from './Utility/SwitchComponent';
import AddContact from './Pages/AddContact';
import EditContact from './Pages/EditContact';
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = useState("ContactListView");
  const [currentContactId, setCurrentContactId] = useState(null);

  const AppCallbackSwitchView = (name, id) => {
    setActiveComponent(name);
    id ? setCurrentContactId(id) : setCurrentContactId(null);
  }

  return (
    <div className="App">
      <SwitchComponent active={activeComponent}>

        <ContactList name="ContactListView" AppCallbackSwitchView={AppCallbackSwitchView}/>

        <AddContact name="AddContactView" AppCallbackSwitchView={AppCallbackSwitchView}/>

        <EditContact name="EditContactView" AppCallbackSwitchView={AppCallbackSwitchView} currentContactId={currentContactId}/>

      </SwitchComponent>
    </div>
  );
}

export default App;
