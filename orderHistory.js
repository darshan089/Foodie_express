let container = document.getElementById("history");

// Retrieve stored orders
let orders = JSON.parse(localStorage.getItem("orderHistory")) || [];

if (orders.length === 0) {
    container.innerHTML = "<p>No orders found.</p>";
} else {
    orders.forEach(order => {
        let div = document.createElement("div");
        div.classList.add("order-box");

        div.innerHTML = `
            <h3>Order ID: ${order.id}</h3>
            <p><strong>Items:</strong> ${order.items.join(", ")}</p>
            <p><strong>Total Amount:</strong> ₹${order.totalAmount}</p>
            <p><strong>Date:</strong> ${order.date}</p>
        `;

        container.appendChild(div);
    });
}
