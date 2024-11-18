import { FunctionComponent } from "react";
import Navbar from "./Navbar";

interface PageNotFoundProps {
    
}

const PageNotFound: FunctionComponent<PageNotFoundProps> = () => {
    return ( <> <Navbar/>
    <img className="notFound" src="https://media.licdn.com/dms/image/v2/C5112AQEw1fXuabCTyQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1581099611064?e=1736985600&v=beta&t=SShngw1JgA-PtNPexdr9yq5V_30Fo5f7stE8DNn9HDk" alt="404 not found" />
    
    </> );
}

export default PageNotFound;