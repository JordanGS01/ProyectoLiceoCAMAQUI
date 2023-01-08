//const client = require('./connection');
const express = require('express')
const cors = require('cors');

//Routes imports
const userRouter = require('./routes/users.routes');
const groupRouter = require('./routes/grupos.routes');

//Inicialización de la app
const app = express();


///// SETTINGS \\\\\
app.set("port", process.env.PORT || 4000);


///// MIDDLEWARES \\\\\
//Cors se utiliza para poder conectar los dos servidores que se tienen: (client y server)
app.use(cors());
//Para que Express pueda entender los objetos JSON
app.use(express.json());

///// ROUTES \\\\\
app.use(userRouter);
app.use(groupRouter);

///// HANDLING ERRORS \\\\\
app.use((err, req, res, next) => {
    return res.status(500).json({
        status: "error",
        message: err.message
    })
});

//Puerto en el que estará escuchando el API
app.listen(3300, () => {
    console.log("Server is now listening at port 3300");
})

//client.connect();
