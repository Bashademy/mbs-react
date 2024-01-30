
const Home = () => {
    return(
        <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card text-bg-danger mx-2">
            <div className="card-body">
                <h5 className="card-title">YouTube Channel</h5>
                <p className="card-text">
                With supporting text below as a natural lead-in to additional content.
                </p>
                <a href="/videos" className="btn btn-primary">
                Click here
                </a>
            </div>
            </div>
        </div>
        <div className="col-sm-6">
            <div className="card text-bg-info mx-2">
            <div className="card-body">
                <h5 className="card-title">Live TV</h5>
                <p className="card-text">
                With supporting text below as a natural lead-in to additional content.
                </p>
                <a href="/live" className="btn btn-primary">
                Click here
                </a>
            </div>
            </div>
        </div>
        </div>

    )
}

export default Home;