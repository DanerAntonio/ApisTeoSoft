// models/Product.js
class Product {
    constructor(id, name, price, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

// models/Order.js
class Order {
    constructor(documentNumber, fullName, phone, email, address, paymentMethod, items) {
        this.documentNumber = documentNumber;
        this.fullName = fullName;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.paymentMethod = paymentMethod;
        this.items = items; // Array of Product objects
    }
}

module.exports = { Product, Order };