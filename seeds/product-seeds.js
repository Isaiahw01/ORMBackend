const { Product } = require('../models');

const productData = [
  {
    product_name: 'Rock Band T-Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1,
    tags: ['Rock Music', 'Clothing', 'Fashion']
  },
  {
    product_name: 'Wireless Earbuds',
    price: 90.0,
    stock: 25,
    category_id: 5,
    tags: ['Pop Music', 'Electronics']
  },
  {
    product_name: 'Musician' 'Fedora Hat',
    price: 22.99,
    stock: 12,
    category_id: 4,
    tags: ['Accessories', 'Fashion']
  },
  {
    product_name: 'Vinyl Record Collection',
    price: 12.99,
    stock: 50,
    category_id: 3,
    tags: ['Vinyl', 'Music']
  },
  {
    product_name: 'Acoustic Guitar',
    price: 29.99,
    stock: 22,
    category_id: 2,
    tags: ['Music', 'Instruments']
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
