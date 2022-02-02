
// styled
import styled from 'styled-components';

// router
import { Link } from 'react-router-dom';

// images
import Cart from '../images/cart.png';

export default function Nav() {
  return (    
    <StyledNav>
      <Link to={"/"} id="logo">B.</Link>
      <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Shop</Link>
      </nav>
      <Link to={"/cart"}><img id="cart" src={Cart} alt="" /></Link>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  min-height: 7vh;
  align-items: center;
  background: #ebebeb;
  padding: 0 2.5%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  nav {
      display: flex;
      width: 150px;
      margin: auto;
      justify-content: space-between;
  }
  a {
      color: #000000;
      font-size: 20px;
      font-weight: 700;
      &:hover {
          text-decoration: underline;
      }
  }
  #logo {
      font-size: 3em;
      letter-spacing: -3px;
      font-weight: 700;
  }
  #cart {
      width: 40px;
      height: 40px;
  }
`;