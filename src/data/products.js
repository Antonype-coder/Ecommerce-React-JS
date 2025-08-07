const products = [
  {
    id: "1",
    name: "iPhone 15 Pro",
    price: 6299000,
    category: "phones",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1713214107/iph15ti_lf2ujf.jpg",
    stock: 15,
    description: "Apple iPhone 15 Pro 256GB Titanium"
  },
  {
    id: "2",
    name: "MacBook Pro M2",
    price: 11499000,
    category: "laptops",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1713214094/mac_m2_uhzomx.jpg",
    stock: 10,
    description: "MacBook Pro 13'' Chip M2 512GB"
  },
  {
    id: "3",
    name: "iPad Air 5ta Gen",
    price: 3599000,
    category: "tablets",
    img: "https://res.cloudinary.com/dfrda73uc/image/upload/v1713214101/ipadair_s0x3tf.jpg",
    stock: 20,
    description: "iPad Air 5ta Generación WiFi 256GB"
  }
];

export const getProducts = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
