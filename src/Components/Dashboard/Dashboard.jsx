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
      <h1 className='myh1'>Get Your Order Status Here</h1>
      <form className='myform' onSubmit = {handleSubmit}>
        <div className='myfrm-grp'>
          <label>
            Enter Order Number:
              <input type='text' value={orderNumber} onChange={(e)=>setOrderNumber(e.target.value)}/>
          </label>
          <button type='submit'>Search</button>
        </div>
      </form>
      {loading && <p className='error'>Loading orders...</p>}
      {error && <p>{error}</p>}
      {yourOrder && (
        <div className='ord-dts'>
          <h2 className='myh2'>Order Details</h2>
          <p><strong>Order Number:</strong>
            {yourOrder.orderNumber}
          </p>
          <p><strong>Order Date:</strong>
            {yourOrder.orderDate}
          </p>
          <p><strong>Status:</strong>
            {yourOrder.status}
          </p>
          <div className="status">
            {yourOrder.status === "processing" && <p>🛠️ We are preparing your order.</p>}
            {yourOrder.status === "shipped" && <p>📦 Your order has been shipped and is on the way.</p>}
            {yourOrder.status === "out-for-delivery" && <p>🚚 Your order is out for delivery!</p>}
            {yourOrder.status === "delivered" && <p>🎉 Your order has been delivered. Enjoy!</p>}
            {yourOrder.status === "delayed" && <p>⏳ Your order has been delayed.</p>}
          </div>
          <p><strong>Total:</strong>
            ${yourOrder.total}
          </p>
          <p><strong>Estimated Delivery:</strong>
            {yourOrder.estimatedDelivery}
          </p>
          <h3 className='myh3'>Items:</h3>
          <ul className='item'>
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
          <ul className='timeline'>
            {yourOrder.timeline.map((e,i)=>(
              <li key={i}>
                <span className='dot'/>
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
