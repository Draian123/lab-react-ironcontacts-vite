import React from 'react'

export default function Contact({contact, removeContact}) {
    // console.log(key, removeContact)
  return (
    
        <tr>
          <td>
            <img style={{"height": "100px"}} src={contact.pictureUrl} alt="pic"/>
          </td>
          <td>
            {contact.name}
          </td>
          <td>{contact.popularity}</td>
          {contact.wonOscar ? <td>Won</td> : <td>-</td>}
          {contact.wonEmmy ? <td>Won</td> : <td>-</td>}
          <td><button id={contact.id} onClick={removeContact}>Delete</button></td>
        </tr>

  )
}
