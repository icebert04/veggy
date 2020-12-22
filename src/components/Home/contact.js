import React from 'react'
import Title from '../globals/Title'
export default function Contact() {
    return (
        <section className="contact py-5">
            <Title title="recipe club"/>
            <div className="row">
            <div className="col-10 col-sm-8 col-md-6 mx-auto">
            <form>
                {/* Name */}
                <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" name="name" id="name" placeholder="your Full Name"/>
                </div>
                {/* Email */}
                <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" name="email" id="email" placeholder="your Email"/>
                </div>
                {/* Message */}
                <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" className="form-control" rows="10" placeholder="Type in your inquiries over here..."></textarea>
                </div>
                {/* Submit */}
                <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">Submit</button>
            </form>
            </div>
            </div>
        </section>
    );
}

