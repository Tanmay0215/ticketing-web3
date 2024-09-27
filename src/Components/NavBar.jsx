import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import RewardCoins from "./RewardCoins";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
  
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);
  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-between py-3">
      <div className="uppercase font-jaini text-5xl" onClick={navigate("/")}>
        Ticketing
      </div>
      <div>
        {isLoggedIn ? (
          <div>
            <button className="px-4"
              onClick={() => {
                navigate("/signup");
              }}
            >
              SignUp
            </button>
            <button className="px-4 py-2 border-2 rounded-full" 
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          </div>
        ) : (
          <RewardCoins /> 
        )}
      </div>
    </div>
  );
};

export default NavBar;
