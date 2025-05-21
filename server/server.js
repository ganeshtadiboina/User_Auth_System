import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";

import authRouter from './routes/authRoutes.js'
import userRouter from "./routes/userRoutes.js";

const app = express();

connectDB();

const allowedOrigins = [
  'http://localhost:5173',
  'https://user-auth-system-frontend1.vercel.app'  
];

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

// Api Endpoints
app.get('/', (req, res) => {
  res.send("API working");
});

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

let server;
if (process.env.NODE_ENV !== "deployment") {
  const port = process.env.PORT || 4000;
  server = app.listen(port, () => console.log(`Server started on PORT: ${port}`));
}

export default app;