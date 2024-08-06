import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Rishabh",
      email: "ris@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Abhishek",
      email: "Abhi@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
  ],
  products: [
    {
      name: "Nike casual shirt",
      slug: "nike-shirt",
      category: "Shirts",
      image: "/images/shirt1.jpg",
      price: 1400,
      brand: "Nike",
      rating: 5.0,
      numReviews: 9,
      countInStock: 23,
      description: "Comfortable nike shirt",
      isFeatured: true,
      banner: "/images/banner1.jpg",
    },
    {
      name: "Nike casual shoes",
      slug: "nike-shoes",
      category: "Shoes",
      image: "/images/shoes1.png",
      price: 2400,
      brand: "Nike",
      rating: 5.0,
      numReviews: 9,
      countInStock: 23,
      description: "Comfortable nike shoes",
      isFeatured: true,
      banner: "/images/banner2.jpg",
    },
    {
      name: "Levi's man pant",
      slug: "levis-pant",
      category: "pants",
      image: "/images/pants1.jpg",
      price: 2300,
      brand: "Levi's",
      rating: 7.0,
      numReviews: 24,
      countInStock: 0,
      description:
        "Comfortable levi's pants",
      isFeatured: false,
      banner: "/images/banner4.jpg",
    },
  ],
};

export default data;
