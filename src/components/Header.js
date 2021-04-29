import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";                  /* useDispatch - allows us dispatch actions to our store.js 
                                                                          & useSelector = allows us retrieve stuff from store.js */
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {                                                   /* if the user exists, make the user user */
        setUser(user);
        history.push("/home");
      }
    });
  }, [userName]);                                                   /* the useEffect function only runs when the [userName] is updated */

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>

      {!userName ? (                                              /* if I'm not logged in, hide my NavMenu and...*/
        <Login onClick={handleAuth}>Login</Login>                 /* put the login button */
      ) : (
                                                                   /* if I'm logged in... Show me NavMenu */
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" alt="SEARCH" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" alt="ORIGINALS" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};



const Nav = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 70px;
    background-color: #090b13;  /* to start seeing the background-color 100% width we need to setup the top, right and left */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    z-index: 2;                /* hover effect start to if we have this */
    /* letter-spacing: 1rem; */
    cursor: pointer;
`;

const Logo = styled.a`
    width: 5rem; /* adding the width to start seeing the logo. Hence w/out it you can't see it */
    margin-top: 0.4rem;
    max-height: 70px;

    img {
        width: 100%;
    }
`;

const NavMenu = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        transition: all 0.6s ease-in-out;

        img {
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
            transition: all 0.5s ease-in-out;
        }
    }

    span {
        color: rgba(249, 249, 249);
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        line-height: 1.08px;
        padding: 2px 0;
        margin-left: 0.3rem;
        white-space: nowrap;
        position: relative;

        &:before {
            background-color: rgb(249, 249, 249);
            border-radius: 0px 0px 4px 4px;
            bottom: -16px;
            content: "";
            height: 2px;
            left: 0px;
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            visibility: hidden;
            width: auto;
        }
    }
                
    span:hover {
          &:before {
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
        }
    }

    a:hover {
        color: rgba(249, 249, 249, 0.2);
        transform: scale(1.03);
    }

    @media (max-width: 980px){
        display: none;
    }
`;

const Login = styled.a`
    padding: 5px 14px;
    border: 1.5px solid #f9f9f9;
    border-radius: 4px;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 14px;
    font-weight: 500;
    background-color: #090B13;
    transition: all 0.3s ease 0s;

    &:hover {
        background-color: #f9f9f9;
        color: #090B13;
        transform: scale(1.05);
        box-shadow: 0 2px 30px #090B13;
        font-weight: 500;
    }
`;

const UserImg = styled.img`
    height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 40px;
  right: 45%;
  background-color: rgb( 19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb( 0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 0.4rem 0.8rem;
  font-size: 14px;
  letter-spacing: 0.08rem;
  width: 100px;
  opacity: 0;         /* hides the signout button */
  transition: all 0.3s ease;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transform: scale(1.1);
      box-shadow: 0 2px 10px #0063e5;
      transition-duration: 1s;
    }
  }
`;

export default Header;