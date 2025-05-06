import express from "express"
import dotenv from "dotenv"
import cors from 'cors';




const app = express();
const PORT = 8000;

dotenv.config()
app.use(cors());  // Enable CORS for all routes
// body parser to allow submit json data
app.use(express.json());

//logger middleware



//routes



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

export default app