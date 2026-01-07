import { useState } from 'react'
import { useNavigate } from 'react-router'

const AddContact = (props) => {
  const [prenom, setPrenom] = useState('')

  const navigate = useNavigate()

  const handleChange = (event) => {
    setPrenom(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if (prenom.trim()) {
      props.addContact(prenom)
      setPrenom('')
      navigate('/list')
    }
  }

  return (
    <div className="app-container">
      <h1>STEP PUSH</h1>
      
      <form onSubmit={handleSubmit} className="contact-form">
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

export default AddContact
