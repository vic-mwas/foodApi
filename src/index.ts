import express from "express"
import dotenv from "dotenv"
import cors from 'cors';
import routes from "./routers";
import logger from "./middleware/logger";
import errorHandler from "./middleware/error";




const app = express();
const PORT = 8000;

dotenv.config()
app.use(cors());  // Enable CORS for all routes
// body parser to allow submit json data
app.use(express.json());

//logger middleware
app.use(logger);



//routes
app.use("/api/v1", routes)

app.use(errorHandler);


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

export default app