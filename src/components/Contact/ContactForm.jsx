import React from "react";

const ContactForm = () => {
  return (
    <form action="#">
      <div className="row">
        <div className="col-md-6">
          <div className="form-grp">
            <input type="text" placeholder="Your Name" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
            <input type="email" placeholder="Email address" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
            <input type="text" placeholder="Phone number" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
            <input type="text" placeholder="Subject" />
          </div>
        </div>
      </div>
      <div className="form-grp">
        <textarea name="message" placeholder="Write message"></textarea>
      </div>
      <div style={{display:"flex",justifyContent:"center"}}><button type="submit" className="btn" >
        Send a message
      </button></div>
      
    </form>
  );
};

export default ContactForm;
