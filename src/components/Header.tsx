
import Nav from "./Nav"
import useCart from "./hooks/useCart"

type PropType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = ({ viewCart, setViewCart }: PropType) => {
  const { totalItems, totalPrice } = useCart()

  const content = (
    <header className="header">
      <div className="header_title-bar">
        <h1>CIMB Store</h1>
        <div className="header__price-box">
          <p>Total Items: {totalItems}</p>
          <p>Total Price: {totalPrice}</p>
        </div>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart} />
    </header>
  )
  return content;
  }
export default Header;