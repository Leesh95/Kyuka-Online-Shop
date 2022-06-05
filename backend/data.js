import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Lee',
      email: 'LeeAdmin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Michael',
      email: 'Michael@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: 'Glowy Makeup Serum',
      slug: 'Glowy-Makeup-Serum',
      category: 'serums',
      image: '/images/P1.jpg',
      price: 34,
      countInStock: 10,
      rating: 4,
      numReviews: 10,
      description:
        'A lightweight, hydrating serum that keeps oil in check for visibly smoother skin and longer-lasting makeup wear.',
    },
    {
      name: 'Hyaluronic Serum',
      slug: 'Hyaluronic-Serum',
      category: 'serums',
      image: '/images/P2.jpg',
      price: 42,
      countInStock: 15,
      rating: 4.5,
      numReviews: 14,
      description:
        'A juicy serum that intensely hydrates for a smooth, supple complexion and is hypoallergenic, dermatologist-tested, and suitable for sensitive skin.',
    },
    {
      name: 'Green Tea Serum',
      slug: 'Green-Tea-Serum',
      category: 'serums',
      image: '/images/P3.jpg',
      price: 42,
      countInStock: 0,
      rating: 5,
      numReviews: 18,
      description:
        'A lightweight serum infused with hyaluronic acid and Green Tea to quickly hydrate and support the moisture barrier.',
    },
    {
      name: 'Rose Sleeping Mask',
      slug: 'Rose-Sleeping-Mask',
      category: 'masks',
      image: '/images/P4.jpg',
      price: 50,
      countInStock: 8,
      rating: 5,
      numReviews: 10,
      description:
        'A two-step mask that delivers continuous hydration overnight, drenching skin with moisture and then locking it in for a supple, dewy look.',
    },
    {
      name: 'Overnight Mask',
      slug: 'Overnight-Mask',
      category: 'masks',
      image: '/images/P5.jpg',
      price: 50,
      countInStock: 5,
      rating: 4.5,
      numReviews: 9,
      description:
        'An overnight face mask that is clinically proven to calm signs of sensitivity—redness, uneven tone, and rough texture—for a visibly even-toned complexion.',
    },
    {
      name: 'Clay Mask',
      slug: 'Clay-Mask',
      category: 'masks',
      image: '/images/P6.jpg',
      price: 50,
      countInStock: 0,
      rating: 5,
      numReviews: 12,
      description:
        'A deep-cleansing creamy clay mask—formulated with absorbent Jeju Super Volcanic Clusters™ and AHA—that helps clear pores while it exfoliates.',
    },
  ],
};

export default data;
