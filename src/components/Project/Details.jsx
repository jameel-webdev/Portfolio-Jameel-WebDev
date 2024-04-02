import Work1 from "../../assets/Project1.png";
import Work2 from "../../assets/Project2.png";
import Work3 from "../../assets/Project3.png";
import Work4 from "../../assets/Project4.png";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Flight Ticket Booking App",
    description:
      "Your convenient gateway to seamless travel experiences. With intuitive navigation and user-friendly design, our platform allows you to effortlessly search and book flights for your next adventure.",
    techUsed: ["Redux,", "Razorpay."],
    live: "https://flight-ticket-booking-webapp.netlify.app/",
    github:
      "https://github.com/jameel-webdev/flight-ticket-booking-app-frontend",
  },
  {
    id: 2,
    image: Work2,
    title: "RealTime WebChatApp",
    description:
      "Experience seamless real-time communication with our MERN Stack Chat Application. Powered by Socket.IO for instant messaging and Zstand for efficient state management, our app ensures smooth and reliable chat experiences.",
    techUsed: ["Zustand,", "Socket.io."],
    live: "https://chatapp-apce.onrender.com/",
    github: "https://github.com/jameel-webdev/Real-time-ChatApp",
  },
  {
    id: 3,
    image: Work3,
    title: "Ecommerse Website -SHOPKART",
    description:
      "Utilized powerful frameworks and libraries like Redux for state management, Firebase for authentication, MongoDb for database and Stripe for seamless payment processing. This project underscored the significance of TypeScript for robust type-checking and demonstrated the indispensability of an admin dashboard for comprehensive ecommerce functionality.",
    techUsed: ["Redux,", "Firebase,", "Stripe"],
    live: "https://shop-kart-frontend.vercel.app/",
    github: "https://github.com/jameel-webdev/ShopKart-frontend",
  },
  {
    id: 4,
    image: Work4,
    title: "Password Reset Flow",
    description:
      "Built a password reset feature for a website using MERN stack. Used Vite-React, React-bootstrap, and React-router-dom for frontend development. Managed state with React-redux-toolkit and displayed notifications with React-toastify. On the backend, used Express and MongoDB with Mongoose for APIs, jsonwebtoken for secure authentication, bcryptjs for password security, nodemailer for email verification, and cookie-parser for handling cookies.",
    techUsed: ["", ""],
    live: "https://mernflow-password-reset.netlify.app/",
    github: "https://github.com/jameel-webdev/Password-Reset-Flow-frontend",
  },
];
