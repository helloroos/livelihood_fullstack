import React from 'react'

export default function Contact() {
  return (
    <div id="contact-container">
      <div id="contact-content">
        <h1>Hello!</h1>
        <h1>Please get in touch :)</h1>
        <div id="message-container">


              <input type="text" placeholder="Your name"id="name"/>

              <input type="text" placeholder="Your email"id="email"/>

              <input type="text" placeholder="Your message"id="message"/>
            <button>Send</button>

        </div>
      </div>
    </div>
  )
}
