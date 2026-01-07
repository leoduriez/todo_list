import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [contacts, setContacts] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [editingId, setEditingId] = useState(null)

  // Charger les contacts depuis le LocalStorage au démarrage
  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts')
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts))
    }
  }, [])

  // Sauvegarder les contacts dans le LocalStorage à chaque modification
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  // Ajouter ou modifier un contact
  const handleSubmit = (event) => {
    event.preventDefault()
    
    if (inputValue.trim()) {
      if (editingId !== null) {
        // Mode édition
        setContacts(contacts.map(contact => 
          contact.id === editingId ? { ...contact, prenom: inputValue } : contact
        ))
        setEditingId(null)
      } else {
        // Mode ajout
        const newContact = {
          id: Date.now(),
          prenom: inputValue
        }
        setContacts([...contacts, newContact])
      }
      setInputValue('')
    }
  }

  // Supprimer un contact
  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
    if (editingId === id) {
      setEditingId(null)
      setInputValue('')
    }
  }

  // Activer le mode édition
  const startEdit = (id) => {
    const contact = contacts.filter(c => c.id === id)[0]
    if (contact) {
      setEditingId(id)
      setInputValue(contact.prenom)
    }
  }

  return (
    <div className="app-container">
      <h1>STEP PUSH</h1>
      
      <div className="contacts-list">
        {contacts.map((contact) => (
          <div key={contact.id} className="contact-item">
            <span 
              className="contact-name" 
              onClick={() => startEdit(contact.id)}
              style={{ cursor: 'pointer' }}
            >
              {contact.prenom}
            </span>
            
            <button 
              onClick={() => deleteContact(contact.id)} 
              className="icon-button"
              title="Supprimer"
            >
              🗑️
            </button>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          placeholder=""
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        
        <button type="submit" className="submit-btn">Valider</button>
      </form>
    </div>
  )
}

export default App
