const NavBar = () => {
    return ( <div className="flex w-full justify-between py-3">
        <div className="uppercase">Ticketing</div>
        <div className="flex gap-x-5">
            <span>SignUp</span>
            <span>Login</span>
        </div>
    </div> );
}
 
export default NavBar;