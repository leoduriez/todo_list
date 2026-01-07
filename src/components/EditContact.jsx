import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'

const EditContact = (props) => {
  const [prenom, setPrenom] = useState('')
  
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const currentContact = props.contacts.filter(c => c.id === parseInt(id))[0]
    if (currentContact) {
      setPrenom(currentContact.prenom)
    }
  }, [id, props.contacts])

  const handleChange = (event) => {
    setPrenom(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if (prenom.trim()) {
      props.updateContact(parseInt(id), prenom)
      navigate('/list')
    }
  }

  const handleDelete = () => {
    const currentContact = props.contacts.filter(c => c.id === parseInt(id))[0]
    if (currentContact) {
      // Afficher le contact barré
      return (
        <div className="contact-display">
          {currentContact.prenom}
        </div>
      )
    }
    return null
  }

  return (
    <div className="app-container">
      <h1>STEP UPDATE</h1>
      
      {handleDelete()}
      
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '30px' }}>
        <button 
          onClick={() => navigate('/list')} 
          className="icon-button"
          title="Modifier"
        >
          🔴
        </button>
        
        <button 
          onClick={() => {
            props.contacts.filter(c => c.id === parseInt(id)).map(c => {
              props.updateContact(c.id, '')
            })
            navigate('/list')
          }} 
          className="icon-button"
          title="Supprimer"
        >
          🗑️
        </button>
      </div>

      <form onSubmit={handleSubmit} className="edit-form">
        <input
          type="text"
          placeholder=""
          value={prenom}
          onChange={handleChange}
        />
        
        <button type="submit" className="submit-btn">Valider</button>
      </form>
    </div>
  )
}

export default EditContact
