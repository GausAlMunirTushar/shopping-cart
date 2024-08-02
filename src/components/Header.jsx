const Header = ({ count, handleShow }) => {
  return (
    <div className="bg-neutral-900 p-3 text-white">
      <div className="container flex items-center justify-between mx-auto">
        <div onClick={() => {handleShow(false)}}>
          <h2>Shopping Cart</h2>
        </div>
        <div onClick={() => {handleShow(true)}}>
          Cart
          <sup>{count}</sup>
        </div>
      </div>
    </div>
  );
};

export default Header;
