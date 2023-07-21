import express, { Application } from "express";
import cors from "cors";
const app: Application = express();

// Application routes
// import userRoutes from "./app/modules/user/user.route";
import bookRouters from "./modules/book/book.route";

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api/v1/user", userRoutes);
app.use("/api/v1/book", bookRouters)

export default app;