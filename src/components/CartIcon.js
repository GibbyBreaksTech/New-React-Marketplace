// styled
import styled from 'styled-components';

// router
import { Link } from 'react-router-dom';

// redux
import { connect } from 'react-redux';

// images
import Cart from '../images/cart.png';

function CartIcon({cart}) {

  return (    
    <StyledCart>
        <Link to={"/cart"}>
            <h6>{cart.cart.length}</h6>
            <img src={Cart} alt="" />
        </Link>
    </StyledCart>
  );
}

const StyledCart = styled.div`
  display: flex;
  a {
      position: relative;
      display: block;
      width: 40px;
      height: 40px;
      h6 {
          font-size: 20px;
          left: 45%;
          top: 30%;
          transform: translate(-50%, -50%);
          position: absolute;
          color: #000000;
      }
      img {
          width: 100%;
          height: 100%;
      }
    }
`;

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};


export default connect(mapStateToProps)(CartIcon);