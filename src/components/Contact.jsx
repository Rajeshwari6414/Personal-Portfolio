import React, {useState} from 'react'
import axios from 'axios'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value})

  const submit = async (e)=>{
    e.preventDefault()
    setStatus('loading')
    try{
      const res = await axios.post('/api/contact', form)
      setStatus('sent')
      setForm({name:'', email:'', message:''})
    }catch(e){
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section container">
      <h2>Contact</h2>
      <div className="card" style={{marginTop:12}}>
        <form className="form" onSubmit={submit}>
          <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} className="input"/>
          <input name="email" placeholder="Your email" value={form.email} onChange={handleChange} className="input"/>
          <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} className="input textarea"/>
          <button className="btn" type="submit">Send Message</button>
        </form>

        <div style={{marginTop:12}}>
          {status==='loading' && <div className="kv">Sending...</div>}
          {status==='sent' && <div style={{color:'lightgreen'}} className="kv">Message sent!</div>}
          {status==='error' && <div style={{color:'tomato'}} className="kv">Failed to send.</div>}
        </div>
      </div>
    </section>
  )
}
