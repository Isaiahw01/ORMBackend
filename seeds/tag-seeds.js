const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'Electronic',
  },
  {
    tag_name: 'Indie',
  },
  {
    tag_name: 'Hip-hop',
  },
  {
    tag_name: 'Classical',
  },
  {
    tag_name: 'Jazz',
  },
  {
    tag_name: 'Folk',
  },
  {
    tag_name: 'R&B',
  },
  {
    tag_name: 'Alternative',
  },
  {
    tag_name: 'Country',
  },
  {
    tag_name: 'Reggae',
  },
];


const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
