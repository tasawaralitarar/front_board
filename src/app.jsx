import { useEffect, useState } from 'react'
import { getOrders } from './api'
import './App.css'

function App() {
  const [orders, setOrders] = useState([])

  const loadOrders = async () => {
    try {
      const data = await getOrders()
      setOrders(data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    loadOrders()

    const timer = setInterval(() => {
      loadOrders()
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="container">
      <h1>注文掲示板 (Order Board)</h1>

      <div className="board">
        {orders.length === 0 ? (
          <h2>No Orders</h2>
        ) : (
          orders.map((order) => (
            <div className="card" key={order.orderNo}>
              <h2>{order.orderNo}</h2>
              <p>端末: {order.terminalNo}</p>
              <p>状態: {order.orderStatus}</p>
              <p>合計: ¥{order.totalAmount}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default App