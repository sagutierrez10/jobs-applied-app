import React, {useState, useEffect} from 'react'

export default function Inputs() {

    function handleSubmit(e) {
        e.preventDefault();
    }

    let [company, setCompany] = useState('')
    let [position, setPosition] = useState('')
    let [location, setLocation] = useState('')
    let [link, setLink] = useState('')
    let [date, setDate] = useState('')

    useEffect(()=>{
        console.log(company, position, location, link, date)
    })

  return (
    <form onSubmit={handleSubmit}>
        <label>Company:</label><input onChange={(e) => setCompany(e.target.value)} type="text" placeholder="Enter position you have applied for" required/>
        <label>Position:</label><input onChange={(e) => setPosition(e.target.value)} type="text" required/>
        <label>Location:</label><input onChange={(e) => setLocation(e.target.value)} type="text"required/>
        <label>Link:</label><input onChange={(e) => setLink(e.target.value)} type="text"/>
        <label>Date applied:</label><input onChange={(e) => setDate(e.target.value)} type="date" required/>
        <button type="submit">Add</button>
</form>
  )
}
