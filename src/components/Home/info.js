import React from 'react';
import {Link} from 'gatsby';
import Title from '../globals/Title';
export default function info() {
    return (
        <section className="py-5">
            <div className="container">
            <Title title="our story"></Title>
            <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
            A summary of the About Page
            </p>
            <Link to="about">
            <button className="btn text-uppercase btn-yellow">about page</button>
            </Link>
            </div>
            </div>
            </div>
        </section>
    )
}
