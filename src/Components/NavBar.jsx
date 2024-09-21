import { useNavigate } from "react-router-dom";
const NavBar = () => {
    const navigate = useNavigate();
    return ( <div className="flex w-full justify-between py-3">
        <div className="uppercase">Ticketing</div>
        <div className="flex gap-x-5">
            <button onClick={()=>{navigate('/Signup')}}>SignUp</button>
            <button onClick={()=>{navigate('/Login')}}>Login</button>
        </div>
    </div> );
}
 
export default NavBar;