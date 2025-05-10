import React, { useState, useEffect } from 'react';
import myImage from '../../Utils/Myimage';
import './Dashboard.css';
import { useUser } from '@clerk/clerk-react';
const Dashboard = () => {
  const { user } = useUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress;
  const [orderNumber, setOrderNumber] = useState('');
  const [orders, setOrders] = useState([]);
  const [yourOrder, setYourOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [orderToCancel, setOrderToCancel] = useState(null);  
  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://dummyjson.com/c/83f3-5841-462d-9cb4');
        const data = await response.json();
        const ordersWithFakeEmails = (data.orders || []).map((order, index) => ({
          ...order,
          email: index % 2 === (userEmail?.length % 2) ? userEmail : 'otheruser@example.com',
        }));
        const userOrders = ordersWithFakeEmails.filter((order) => order.email === userEmail);
        setOrders(userOrders);
      } catch {
        setError('Cannot Fetch your Orders');
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [userEmail]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const order = orders.find((ord) => ord.orderNumber === orderNumber);
    if (order) {
      setYourOrder(order);
      setError(null);
    } else {
      setYourOrder(null);
      setError('Cannot find your order.');
    }
  };
  const handleCancelClick = (order) => {
    setOrderToCancel(order); 
    setIsModalOpen(true);  
  };
  const handleConfirmCancel = () => {
    setYourOrder((prevOrder) => ({ ...prevOrder, status: 'cancelled' }));
    setIsModalOpen(false);  
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);  
  };
  return (
    <div className="dashboard">
      <h1 className="myh1">Get Your Order Status Here</h1>
      <form className="myform" onSubmit={handleSubmit}>
        <div className="myfrm-grp">
          <label>
            Enter Order Number:
            <input type="text" value={orderNumber} onChange={(e) => setOrderNumber(e.target.value)} />
          </label>
          <button type="submit">Search</button>
        </div>
      </form>
      {loading && <p className="error">Loading orders...</p>}
      {error && <p>{error}</p>}
      {yourOrder && (
        <div className="ord-dts">
          <h2 className="myh2">Order Details</h2>
          <p><strong>Order Number:</strong> {yourOrder.orderNumber}</p>
          <p><strong>Order Date:</strong> {yourOrder.orderDate}</p>
          <div className={`status-badge ${yourOrder.status}`}>
            {yourOrder.status === 'processing' && <>🛠️ Processing</>}
            {yourOrder.status === 'shipped' && <>📦 Shipped</>}
            {yourOrder.status === 'out-for-delivery' && <>🚚 Out for Delivery</>}
            {yourOrder.status === 'delivered' && <>🎉 Delivered</>}
            {yourOrder.status === 'delayed' && <>⏳ Delayed</>}
            {yourOrder.status === 'cancelled' && <>❌ Cancelled</>}
          </div>
          {yourOrder.status === 'processing' && (
            <button
              className="cancel-btn"
              onClick={() => handleCancelClick(yourOrder)}
            >
              ❌ Cancel Order
            </button>
          )}
          <p><strong>Total:</strong> ${yourOrder.total}</p>
          <p><strong>Estimated Delivery:</strong> {yourOrder.estimatedDelivery}</p>
          <h3 className="myh3">Items:</h3>
          <ul className="item">
            {yourOrder.items.map((item) => (
              <li key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <img src={myImage[item.name]} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                <div>
                  <p>{item.name}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <h3>Order Timeline:</h3>
          <ul className="timeline">
            {yourOrder.timeline.map((e, i) => (
              <li key={i}>
                <span className="dot" />
                <span>{e.status} - <strong>{e.date}</strong></span>
              </li>
            ))}
            {yourOrder.status === 'cancelled' && (
              <li>
                <span className="dot" />
                <span>❌ Cancelled - <strong>{new Date().toLocaleDateString()}</strong></span>
              </li>
            )}
          </ul>
        </div>
      )}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Confirm Order Cancellation</h2>
            <p>Are you sure you want to cancel your order {orderToCancel?.orderNumber}?</p>
            <button onClick={handleConfirmCancel}>Yes, Cancel Order</button>
            <button onClick={handleCloseModal}>No, Keep Order</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Dashboard;








