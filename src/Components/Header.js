import '../App.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Header(props) {
  return (
    <div className='flex shopping-card'>
        <div onClick={() => props.handleShow(false)} class="back">
          E-commerce website</div>
        <div onClick={() => props.handleShow(true)} class="cart"> Cart
          <sup>{props.count}</sup>
            <ShoppingCartOutlinedIcon />
        </div>
    </div>
  );
}

export default Header;