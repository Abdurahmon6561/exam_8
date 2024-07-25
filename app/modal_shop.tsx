"use client"
import React from 'react';
import { Button, Modal } from 'antd';
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { useRouter } from 'next/navigation';  

const App: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [cartItems, setCartItems] = React.useState<Array<any>>([]);
  const router = useRouter(); 

  React.useEffect(() => {
    if (open) {
      const storedCartItems = localStorage.getItem("cart");
      const parsedCartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
      setCartItems(parsedCartItems);
      setLoading(false);
    }
  }, [open]);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  };

  const handleDelete = (itemId: string) => {
    const updatedCartItems = cartItems.filter(item => item._id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const handleNavigate = () => {
    router.push('shop/checkout');  
  };

  return (
    <>
      <FaShoppingCart 
        onClick={showLoading} 
        className="w-5 h-5 mr-2 transform transition-transform duration-500 ease-in-out hover:rotate-[360deg]" 
      />
      <Modal
        title={<p>Shopping Cart</p>}
        footer={
          <div className="flex justify-between">
            <Button 
              type="default" 
              onClick={() => setOpen(false)} 
              className="w-[87px] h-[30px] rounded-2xl"
            >
              Back
            </Button>
            <Button 
              type="default" 
              onClick={handleNavigate} 
              className="w-[118px] h-[30px] rounded-2xl"
            >
              Checkout
            </Button>
            <Button 
              type="default" 
              onClick={showLoading} 
              className="w-[135px] h-[30px] rounded-2xl"
            >
              Comparison
            </Button>
          </div>
        }
        open={open}
        onCancel={() => setOpen(false)}
        className="custom-modal"
      >
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {cartItems.length === 0 ? (
              <p className='text-red-600 font-bold text-2xl'>Empty</p>
            ) : (
              <>
                {cartItems.map(item => (
                  <div key={item._id} className="flex mb-2.5 items-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-[60px] h-[60px] mr-2.5" 
                    />
                    <div className="flex-grow">
                      <h4 className="m-0 text-base font-medium">{item.title}</h4>
                      <p className="m-0 text-orange-500 ml-4 p-1">Rs. {item.price.toLocaleString()}</p>
                    </div>
                    <Button 
                      type="text" 
                      danger 
                      icon={<AiFillDelete />}  
                      onClick={() => handleDelete(item._id)} 
                    />
                  </div>
                ))}
                <div className="flex justify-between mt-5 font-bold">
                  <span>Subtotal</span>
                  <span>Rs. {getTotal().toLocaleString()}</span>
                </div>
              </>
            )}
          </div>
        )}
      </Modal>
    </>
  );
};

export default App;
