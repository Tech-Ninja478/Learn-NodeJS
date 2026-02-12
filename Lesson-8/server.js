const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const { el } = require('date-fns/locale');

const PORT = process.env.PORT || 3500;

//Custom Middleware Logger
app.use(logger);

//Cross Origin Resource Sharing(CORS)
const whitelist = ['https://www.yoursite.com', 'http://127.0.0.1:5500', 'http://localhost:3500']; //Give permission to these sites
const corsOptions = {
    origin: (origin, callback) =>{
        if(whitelist.indexOf(origin) !== -1 || !origin){ //Check if the origin is in the whitelist
            callback(null, true);
        }
        else{
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));


//Built-In Middleware to handle urlencoded data
//In other words, form data:
//'content-type: application/x-www-form-urlencoded'
app.use(express.urlencoded({ extended: false }));

//Built-In Middleware for json
//'content-type: application/json'
app.use(express.json());

//Serve static files
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/subdir', express.static(path.join(__dirname, 'public')));

//Routing done using modular routers(root files shifted in the routes folder)
app.use('/', require('./routes/root'));
app.use('/subdir', require('./routes/subdir'));
app.use('/employees', require('./routes/api/employees'));


app.all(/.*/, (req, res) => {
  res.status(404);

  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } 
  else if (req.accepts('json')) {
    res.json({ error: "404 Not Found" });
  } 
  else {
    res.type('txt').send("404 Not Found");
  }
});

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));