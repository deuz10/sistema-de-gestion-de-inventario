const configureExpress = require('./config/express');
const connectDB = require('./config/database');
const inventoryRoutes = require('./routes/inventory.routes');
const { setupStockAlerts } = require('./services/stockAlert.service');

const app = configureExpress();

// Routes
app.use('/api/inventory', inventoryRoutes);

// Database connection
connectDB();

// Initialize stock alerts system
setupStockAlerts();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});