import {Link} from 'react-router-dom';



export const NavBar = function (){ 
    return (
<> 
<Link to = "/">Home</Link>   
<br/>
<Link to ="/">About</Link>  
<br/>
<Link to ="/">Contact</Link>  
<br/>
<Link to ="/">Services</Link>   
</>
);

}