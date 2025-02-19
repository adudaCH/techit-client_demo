import { FunctionComponent } from "react";

interface HomeProps {
    
}

const Home: FunctionComponent<HomeProps> = () => {
    return ( <> 
    <div className="container mt-5 image-container">
    <img src="/techStoreSale.jpeg" alt="techStoreSale" />
</div>

    {/* <h1 className="text-center mt-5 display-1">There's No Place Like 127.0.0.1 <br /><br /> ♡⸜(˶˃ ᵕ ˂˶)⸝♡</h1> */}
    </> );
}

export default Home;