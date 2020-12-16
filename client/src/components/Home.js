import React, { useState, useEffect } from 'react';
import ivy from "../images/ivy_2400px.jpg";
import monstera from "../images/monstera_2400px.jpg";
import flowering from "../images/flowering_2400px.jpg";
import mixed from "../images/mixed_2400px.jpg";

const styles ={
    display: "block",
    marginLeft: "auto", 
    marginRight: "auto"
}


function Home() {

    const [images, setImages] = useState([ivy, monstera, mixed, flowering])

    

    useEffect(() => {
      let x = -1;
      x = (x === images.length - 1) ? 0 : x + 1;
      {setInterval(images[x], 3000)
      }
    }, [images])
   
    // function startTimer() {
    //     setInterval(displayNextImage, 3000);
    // }
    
    // var x = -1;
    // images[0] = ivy;
    // images[1] = monstera;
    // images[2] = mixed;
    // images[3] = flowering;
    

return (
    <div>
      <br></br><br></br><br></br><br></br><br></br>
      <img id="img" src={monstera} style={styles} width='60%' height='70%'></img>
    </div>
)


}

 export default Home