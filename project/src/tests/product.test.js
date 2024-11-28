const Product = require('../models/Product');
const ProductService = require('../services/product.service');

// Mock the Product model
jest.mock('../models/Product');
jest.mock('../utils/logger');

describe('ProductService', () => {
  const mockProduct = {
    sku: 'TEST123',
    name: 'Test Product',
    description: 'Test Description',
    category: 'Test Category',
    price: 100,
    stock: 10,
    minStockLevel: 5
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('createProduct should create and return a new product', async () => {
    const savedProduct = { ...mockProduct, _id: 'mockId' };
    Product.mockImplementation(() => ({
      save: jest.fn().mockResolvedValue(savedProduct)
    }));

    const result = await ProductService.createProduct(mockProduct);
    
    expect(result).toEqual(savedProduct);
    expect(Product).toHaveBeenCalledWith(mockProduct);
  });
});