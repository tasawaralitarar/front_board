import { useEffect, useState } from "react";
import { getOrders } from "./api";
import "./App.css";

function App() {
  const [orders, setOrders] = useState([]);

  const loadOrders = async () => {
    try {
      const data = await getOrders();

      const readyOrders = data.filter(
        (o) =>
          o.orderStatus === "完成" ||
          o.orderStatus === "提供可能" ||
          o.orderStatus === "READY"
      );

      setOrders(readyOrders);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadOrders();

    const timer = setInterval(() => {
      loadOrders();
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <h1>ORDER BOARD</h1>

      <div className="board">
        {orders.length === 0 ? (
          <h2>No Ready Orders</h2>
        ) : (
          orders.map((order) => (
            <div key={order.orderNo} className="card">
              {order.orderNo}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;