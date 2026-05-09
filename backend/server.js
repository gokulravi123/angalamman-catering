const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ orders: [] }).write();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 3000;

// API to receive orders
app.post('/api/orders', (req, res) => {
    try {
        const order = {
            ...req.body,
            id: Date.now().toString(),
            createdAt: new Date().toISOString()
        };
        
        db.get('orders')
          .push(order)
          .write();
          
        console.log('New Order Received:', order.fullName, '-', order.eventType);
        res.status(201).json({ 
            success: true, 
            message: 'Order saved successfully', 
            orderId: order.id 
        });
    } catch (error) {
        console.error('Error saving order:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// API to get all orders (for review)
app.get('/api/orders', (req, res) => {
    const orders = db.get('orders').value();
    res.json(orders);
});

app.listen(PORT, () => {
    console.log(`🚀 Angalamman Catering Backend running at http://localhost:${PORT}`);
});
