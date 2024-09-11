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

// Task 3: Function to update stock after sales
function updateStock(product, unitsSold) {
    if (product.quantity >= unitsSold) {
        product.quantity -= unitsSold;
        console.log(`${unitsSold} units sold. Remaining stock: ${product.quantity}`);
        
        if (product.quantity <= product.lowStockLevel) {
            console.log(`Warning: ${product.name} is now in Low Stock.`);
        }
    } else {
        console.log(`Error: Cannot sell ${unitsSold} units of ${product.name}. Only ${product.quantity} units available.`);
    }
}

// Example usage:
updateStock(inventory[1], 3);

// Task 4: Function to check for low stock products
function checkLowStock(inventory) {
    inventory.forEach(product => {
        if (product.quantity <= product.lowStockLevel) {
            console.log(`${product.name} is in Low Stock.`);
        }
    });
}

// Example usage:
checkLowStock(inventory);
