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
        Good Pizza was founded by Ben Berman, <br/> a graduate student studying for his MBA at the Wharton School of the University of Pennsylvania.
        </p>
        <br/>
        <p className="lead text-muted mb-5">
        When the pandemic hit Philadelphia in March of 2020, Ben had a big batch of dough that he was planning to make into pizzas for a get together with friends.
        <br/>
        After realizing that large gatherings probably weren't the best idea, Ben needed a plan to get rid of all that dough...
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
