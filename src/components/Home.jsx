
const Home = () => {

    const myStyle = {
        height: 400,
        backgroundColor: "#f06156",
        borderRadius: 10
        }


    return(
        <div className="container">
            <div className="row">
                <div className="border border-danger col-md mx-md-3" style={myStyle}>
                This box has a thick, red, das rounded corners.
                </div>
                <div className="border border-danger col-md mx-md-3" style={myStyle}>
                This box has a thick, red, dashed border with rounded corners.
                </div>
            </div>
        </div>
    )
}

export default Home;