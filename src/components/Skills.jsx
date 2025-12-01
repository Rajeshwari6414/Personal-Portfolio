import React from 'react'

export default function Skills(){
  const skills = [
    'React', 'JavaScript', 'C++', 'Python',
    'Node.js', 'MongoDB', 'SQL', 'Machine Learning'
  ]

  return (
    <section id="skills" className="section container">
      <h2>Skills</h2>
      <div className="grid" style={{marginTop:12}}>
        {skills.map(s => (
          <div key={s} className="card project">
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <h3 style={{margin:0}}>{s}</h3>
              <div className="badge">Pro</div>
            </div>
            <p className="kv">Experience in {s}.</p>
          </div>
        ))}
      </div>
    </section>
  )
}
