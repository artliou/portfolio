import React from 'react'
import Link from 'gatsby-link'

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h3>Contact Me</h3>
        <form method="POST" action="https://formspree.io/artyliou@gmail.com"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>
              Your name:<br />
              <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your email:<br />
              <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message:<br />
              <textarea name="message" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>

      </div>
    );
  }
}

export default Contact
