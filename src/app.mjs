import express from 'express';
import { connectToDatabase } from './config/database.mjs';
import router from './routes/index.mjs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
connectToDatabase();
// connectToAdditionalDatabase();


// body parser
app.use(express.urlencoded({ extended: true }));

// Configure the template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));


// Use the router
app.use('/', router);



app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.`);
});