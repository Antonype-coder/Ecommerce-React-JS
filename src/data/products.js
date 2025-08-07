const products = [
  {
    id: 1,
    name: 'iPhone 14 Pro',
    price: 5999000,
    image: 'https://via.placeholder.com/200',
    category: 'iphone',
    description: 'Modelo Pro con cámara avanzada',
  },
  {
    id: 2,
    name: 'MacBook Air M2',
    price: 7299000,
    image: 'https://via.placeholder.com/200',
    category: 'mac',
    description: 'Ligera, potente y silenciosa',
  },
];

const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const found = products.find((item) => item.id === Number(id));
      resolve(found);
    }, 1000);
  });
};

export { getProducts, getProductById };
