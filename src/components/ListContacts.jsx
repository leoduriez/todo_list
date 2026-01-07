import { useState } from 'react'
import { useNavigate } from 'react-router'

const ListContacts = (props) => {
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()

  const handleDelete = (id) => {
    props.deleteContact(id)
  }

  const handleEdit = (id) => {
    navigate(`/edit/${id}`)
  }

  const handleAddNew = (event) => {
    event.preventDefault()
    navigate('/')
  }

  return (
    <div className="app-container">
      <div className="contacts-list">
        {props.contacts.map((contact) => (
          <div key={contact.id} className="contact-item">
            <span className="contact-name">{contact.prenom}</span>
            
            <button 
              onClick={() => handleDelete(contact.id)} 
              className="icon-button"
              title="Supprimer"
            >
              🗑️
            </button>
            
            <button 
              onClick={() => handleEdit(contact.id)} 
              className="icon-button"
              title="Modifier"
            >
              🔴
            </button>
          </div>
        ))}
      </div>

      <form onSubmit={handleAddNew} className="contact-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder=""
        />
        <button type="submit" className="submit-btn">Valider</button>
      </form>
    </div>
  )
}

export default ListContacts
