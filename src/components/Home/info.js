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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi adipisci nihil beatae debitis tempora consectetur, quia nam unde porro quidem perspiciatis amet corporis ratione expedita nesciunt animi cum? Fugiat libero voluptas dolorem id assumenda? Dolores veritatis molestiae sed adipisci excepturi quis laudantium eos! Ex blanditiis magnam obcaecati, corrupti incidunt, dolor fugit, nisi deleniti hic impedit reiciendis iusto nemo reprehenderit vitae? Dolore, consectetur iure. Enim nemo ut fugit culpa omnis laboriosam. Odit itaque velit ducimus temporibus quisquam similique tenetur, officia eveniet reprehenderit veritatis accusantium dolor inventore exercitationem. Dolore nesciunt fugit placeat, magni, asperiores explicabo a sunt iusto consequuntur perspiciatis consequatur sint.
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
