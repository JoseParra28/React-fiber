import '../Styles/contact.css'

const Contact = () => {


    return (

       <section>
        <div>
            <h1>Let's get in touch</h1>
        </div>
        <div className="contact-div">
            <form action="#">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label for="message">Message:</label>
            <textarea type="text" id="message" name="message" rows="6"></textarea>
                
                       <button type="submit">Submit</button> 
            </form>
        </div>
       </section>
      
    )
}


export default Contact