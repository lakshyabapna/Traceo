import React,{useState,useEffect} from 'react'
import myImage from '../../Utils/Myimage'
import './Dashboard.css'
const Dashboard = () => {
    const [orderNumber,setOrderNumber] = useState('');
    const [orders,setOrders] = useState([]);
    const [yourOrder,setYourOrder] = useState(null);
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null);
    useEffect(()=>{
      const fetchOrders = async() => {
        setLoading(true)
        try {
          const response = await fetch('https://dummyjson.com/c/83f3-5841-462d-9cb4');
          const data = await response.json();
          setOrders(data.orders || [])
        } catch {
          setError('Cannot Fetch your Orders')
        } finally {
          setLoading(false)
        }
      };
      fetchOrders()
    },[])
    const handleSubmit = (e) => {
      e.preventDefault();
      const order = orders.find((ord)=> ord.orderNumber === orderNumber);
      if (order) {
        setYourOrder(order);
        setError(null)
      } else {
        setYourOrder(null);
        setError('Cannot find your order.')
      }
    }
  return (
    <div className='dashboard'>
      <h1>Get Your Order Status Here</h1>
      <form className='form' onSubmit = {handleSubmit}>
        <label>
          Enter Order Number:
            <input type='text' value={orderNumber} onChange={(e)=>setOrderNumber(e.target.value)}/>
        </label>
        <button type='submit'>Search</button>
      </form>
      {loading && <p>Loading orders...</p>}
      {error && <p>{error}</p>}
      {yourOrder && (
        <div>
          <h2>Order Details</h2>
          <p><strong>Order Number:</strong>
            {yourOrder.orderNumber}
          </p>
          <p><strong>Order Date:</strong>
            {yourOrder.orderDate}
          </p>
          <p><strong>Status:</strong>
            {yourOrder.status}
          </p>
          <p className="status-message">
            {yourOrder.status === "Processing" && "🛠️ We are preparing your order."}
            {yourOrder.status === "Shipped" && "📦 Your order has been shipped and is on the way."}
            {yourOrder.status === "Out for Delivery" && "🚚 Your order is out for delivery!"}
            {yourOrder.status === "Delivered" && "🎉 Your order has been delivered. Enjoy!"}
            {yourOrder.status === "Cancelled" && "❌ Your order was cancelled."}
          </p>
          <p><strong>Total:</strong>
            ${yourOrder.total}
          </p>
          <p><strong>Estimated Delivery:</strong>
            {yourOrder.estimatedDelivery}
          </p>
          <h3>Items:</h3>
          <ul>
            {yourOrder.items.map((item)=>(
              <li key = {item.id} style = {{display:'flex', alignItems:'center',gap:'1rem',marginBottom: '1rem'}}>
                <img src={myImage[item.name]} alt = {item.name} style = {{width:'60px', height:'60px', objectFit:'cover'}}/>
                <div>
                  <p>{item.name}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <h3>Order Timeline:</h3>
          <ul>
            {yourOrder.timeline.map((e,i)=>(
              <li key={i}>
                <span/>
                <span>{e.status} - <strong>{e.date}</strong></span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Dashboard
