import React from 'react';
const OrderDetails = ({
  order,
  onCancelClick,
  isModalOpen,
  onConfirmCancel,
  onCloseModal,
  myImage,
  onBack,
}) => {
  if (!order) return null;

  const formatStatus = (status) =>
    status
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      dateStyle: 'long',
      timeStyle: 'short',
    });
  };

  return (
    <>
      <div className="ord-dts">
        <button className="back-btn" onClick={onBack} style={{ marginBottom: '1rem' }}>
          ← Back to Orders
        </button>
        <h2 className="myh2">Order Details</h2>

        <p><strong>Order Number:</strong> {order.orderNumber}</p>
        <p><strong>Order Date:</strong> {order.orderDate}</p>

        <div className={`status-badge ${order.status}`} style={{ marginBottom: '1rem' }}>
          {order.status === 'processing' && <>🛠️ Processing</>}
          {order.status === 'shipped' && <>📦 Shipped</>}
          {order.status === 'out-for-delivery' && <>🚚 Out for Delivery</>}
          {order.status === 'delivered' && <>🎉 Delivered</>}
          {order.status === 'delayed' && <>⏳ Delayed</>}
          {order.status === 'cancelled' && <>❌ Cancelled</>}
        </div>

        {order.status === 'processing' && (
          <button className="cancel-btn" onClick={() => onCancelClick(order)} style={{ marginBottom: '1rem' }}>
            ❌ Cancel Order
          </button>
        )}

        <p><strong>Total:</strong> ${order.total}</p>
        <p><strong>Estimated Delivery:</strong> {order.estimatedDelivery}</p>

        <h3 className="myh3">Items:</h3>
        <ul className="item">
          {order.items.map((item) => (
            <li key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <img
                src={myImage[item.name]}
                alt={item.name}
                style={{ width: '60px', height: '60px', objectFit: 'cover' }}
              />
              <div>
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="myh3">Order Timeline:</h3>
        <ul className="timeline">
          {order.timeline.map((e, i) => (
            <li key={i} className={e.status.toLowerCase().replaceAll(" ", "-")}>
              <strong>{formatStatus(e.status)}</strong> – {formatDate(e.date)}
            </li>
          ))}
          {order.status === 'cancelled' && (
            <li className="cancelled">
              <strong>Cancelled</strong> – {formatDate(new Date())}
            </li>
          )}
        </ul>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Confirm Order Cancellation</h2>
            <p>Are you sure you want to cancel this order?</p>
            <button onClick={onConfirmCancel}>Yes, Cancel</button>
            <button onClick={onCloseModal} className='hmm'>No, Go Back</button>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderDetails;

