import contacts from './contacts.json'
import './App.css'
import Contact from './components/Contact'
import { useState } from 'react'

function App() {
  let [five, setFive] = useState(contacts.slice(0,5))
  let [otherContacts,setOtherContacts] = useState(contacts.slice(6))
  
  
  function getRandomContact(){
      let randomIndex = [Math.floor(Math.random()*otherContacts.length)]
      let randomContact = otherContacts[randomIndex]  
      setFive([...five, randomContact])
      let filteredArr = otherContacts.filter(contact => contact !== otherContacts[randomIndex])
      setOtherContacts(filteredArr)
  }
  

  function sortByPopularity(){
    let sortedPop = five.sort((a,b) => b.popularity - a.popularity )
    setFive([...sortedPop])    
  }
  function sortByName(){
    let sortedAlph = five.sort((a, b) => (a.name > b.name) ? 1: -1)
    console.log(sortedAlph)
    setFive([...sortedAlph])
  }
  function removeContact(event){
    let removedElementArr = five.filter(contact => contact.id !== event.target.id)
    setFive([...removedElementArr])
  }


  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={getRandomContact}>Add new random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Action</th>
        </tr>
        {five.map(contact =>          
        (<Contact contact={contact} removeContact={removeContact} key={contact.id}/>)
        )}
      </table>
    </div>
  )
}

export default App
