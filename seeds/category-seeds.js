const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Shirts',
    category_tag: ['Clothing', 'Fashion']
  },
  {
    category_name: 'Shorts',
    category_tag: ['Clothing', 'Fashion']
  },
  {
    category_name: 'Music',
    category_tag: ['Music']
  },
  {
    category_name: 'Hats',
    category_tag: ['Accessories', 'Fashion']
  },
  {
    category_name: 'Shoes',
    category_tag: ['Shoes', 'Fashion']
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
