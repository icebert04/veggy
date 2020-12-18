import React from 'react'
import Title from '../globals/Title'
export default function Contact() {
    return (
        <section className="contact py-5">
            <Title title="contact us"/>
            <div className="row">
            <div className="col-10 col-sm-8 col-md-6 mx-auto">
            <form>
                {/* Name */}
                <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" name="name" id="name" placeholder="rachelle isberto"/>
                </div>
                {/* Email */}
                <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" name="email" id="email" placeholder="rach@gmail.com"/>
                </div>
                {/* Message */}
                <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" className="form-control" rows="10" placeholder="place your message here mother fucker"></textarea>
                </div>
                {/* Submit */}
                <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">Submit</button>
            </form>
            </div>
            </div>
        </section>
    );
}

