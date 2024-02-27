import { useState } from "react"

const Home = () => {

    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    // const handleMouseEnter = () => setIsHovered(true);
    // const handleMouseLeave = () => setIsHovered(false);

  const styles = {
    
  };

    const liveBox = {
        height: 300,
        backgroundColor: isHovered2 ? '#d1cdcd' : "#f0f4f9",
        borderRadius: 12,
        justifyContent: "center" 
        }

    const tubeBox = {
        height: 300,
        borderRadius: 12,
        justifyContent: "center", 
        backgroundColor: isHovered1 ? '#d1cdcd' : "#f0f4f9",

    }


    return(
        <div className="container">
            <div className="row">
                <div className="col-md mx-md-3" style={tubeBox} onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)}>
                <h6 style={{fontSize: 50}}>YouTube Channel</h6>
                </div>
                <div className="col-md mx-md-3" style={liveBox} onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}>
                <h6 style={{fontSize: 50}}>Live TV</h6>
                </div>
            </div>
        </div>
    )
}

export default Home;