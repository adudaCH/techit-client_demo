import { FunctionComponent } from "react";
import Navbar from "./Navbar";

interface HomeProps {
    
}

const Home: FunctionComponent<HomeProps> = () => {
    return ( <> <Navbar/>
    
    <h1 className="text-center mt-5 display-1">There's No Place Like 127.0.0.1 <br /><br /> ♡⸜(˶˃ ᵕ ˂˶)⸝♡</h1>
    </> );
}

export default Home;