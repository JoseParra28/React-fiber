import '../Styles/contact.css'
import { useEffect, useState, useRef } from 'react'
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import EarthCanvas from '../Models/Earth';

const Contact = () => {
    const formRef = useRef
    useState[form, setForm] = useState({
        name:'',
        email:'',
        message:''
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e) =>{}

    const handleSubmit = (e) => {}

    return (

       <section>
        <div>
            <h1>Let's get in touch</h1>
        </div>
        <div className="contact-div">
            <form action="#" ref={formRef} onSubmit={handleSubmit}>
            <label for="name">Name:</label>
            <span>Name</span>
            <input type="text" id="name" value={form.name} onChange={handleChange} name="name" required />

            <label for="email">Email:</label>
            <span>Email</span>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange}required />
            <input required />
            
            <label for="message">Message:</label>
            <span>Message</span>
            <textarea id="message" name="message" rows="6" value={form.message} onChange={handleChange} required ></textarea>
                
            <button type="submit">{loading ? 'Sending...' : 'Send'}</button> 
            </form>
        </div>
        <div className='earth-div'>

        </div>
       </section>
      
    )
}


export default Contact