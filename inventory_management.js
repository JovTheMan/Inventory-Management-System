// Task 1: Initialize inventory with product objects
const inventory = [
    { name: 'Laptop', price: 1200, quantity: 10, lowStockLevel: 3 },
    { name: 'Smartphone', price: 800, quantity: 5, lowStockLevel: 2 },
    { name: 'Tablet', price: 400, quantity: 7, lowStockLevel: 1 },
    { name: 'Headphones', price: 100, quantity: 15, lowStockLevel: 5 },
    { name: 'Smartwatch', price: 250, quantity: 3, lowStockLevel: 1 }
];

// Task 2: Function to display product details
function displayProductDetails(product) {
    const stockStatus = product.quantity <= product.lowStockLevel ? 'Low Stock' : 'In Stock';
    console.log(`Product: ${product.name}\nPrice: $${product.price}\nQuantity: ${product.quantity}\nStock Status: ${stockStatus}`);
}

// Example usage:
displayProductDetails(inventory[0]);
