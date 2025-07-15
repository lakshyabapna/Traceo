import React, { useState, useEffect } from 'react';
import myImage from '../../Utils/Myimage';
import './Dashboard.css';
import { useUser } from '@clerk/clerk-react';
import OrderDetails from '../OrderDetails/OrderDetails'; 
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
      setError(null);
      try {
        const response = await fetch('https://dummyjson.com/c/83f3-5841-462d-9cb4');
        const data = await response.json();
        const ordersWithEmails = (data.orders || []).map((order, index) => ({
          ...order,
          email:
            index % 2 === (userEmail?.length % 2) ? userEmail : 'otheruser@example.com',
        }));
        const userOrders = ordersWithEmails.filter((order) => order.email === userEmail);
        setOrders(userOrders);
      } catch {
        setError('Cannot Fetch your Orders');
      } finally {
        setLoading(false);
      }
    };
    if (userEmail) fetchOrders();
  }, [userEmail]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = orders.find((ord) => ord.orderNumber === orderNumber);
    if (order) {
      setYourOrder(order);
      setError(null);
    } else {
      setError('Cannot find your order.');
    }
  };
  const handleCancelClick = (order) => {
    setOrderToCancel(order);
    setIsModalOpen(true);
  };
  const handleConfirmCancel = () => {
    setOrders((prevOrders) =>
      prevOrders.map((ord) =>
        ord.orderNumber === orderToCancel.orderNumber ? { ...ord, status: 'cancelled' } : ord
      )
    );
    setYourOrder((prevOrder) =>
      prevOrder && prevOrder.orderNumber === orderToCancel.orderNumber
        ? { ...prevOrder, status: 'cancelled' }
        : prevOrder
    );
    setIsModalOpen(false);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleBackToOrders = () => {
    setYourOrder(null);
    setError(null);
  };
  return (
    <div className="dashboard">
      <h1 className="myh1">Your Order History</h1>
      <form className="myform" onSubmit={handleSubmit}>
        <div className="myfrm-grp">
          <label>
            Enter Order Number:
            <input
              type="text"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              required
            />
          </label>
          <button type="submit">Search</button>
        </div>
      </form>
      {loading && <p className="error">Loading orders...</p>}
      {error && <p className="error">{error}</p>}
      {!yourOrder && !loading && !error && (
        <div className="order-list">
          <h2>All Orders</h2>
          <ul>
            {orders.map((order) => (
              <li
                key={order.orderNumber}
                className="order-item"
                onClick={() => setYourOrder(order)}
                style={{ cursor: 'pointer' }}
              >
                <span><strong>Order Number:</strong> {order.orderNumber}</span>
                <span className={`status-line ${order.status}`}><strong>Status:</strong> {order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
                <span><strong>Total:</strong> ${order.total}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {yourOrder && (
        <OrderDetails
          order={yourOrder}
          onCancelClick={handleCancelClick}
          isModalOpen={isModalOpen}
          onConfirmCancel={handleConfirmCancel}
          onCloseModal={handleCloseModal}
          myImage={myImage}
          onBack={handleBackToOrders}
        />
      )}
    </div>
  );
};
export default Dashboard;










