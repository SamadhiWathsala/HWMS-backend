const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 3000;

//Routes
const trolleyRoute = require('./routes/trolley');
const patientsRoute = require('./routes/patients');
const testsRoute = require('./routes/test');
const treatmentRoute = require('./routes/treatment');
const authRoute = require('./routes/auth');
const accountRqstRoute = require('./routes/accountReqst');
const admissionRoute = require('./routes/admission');
const helloRote = require('./routes/hello');
const chartRqstRoute = require('./routes/chartsRqst')



//connect to mongodb database using mongoose
/*
mongoose.connect("mongodb://localhost:27017/mediWard", { useNewUrlParser: true }, () => {
    console.log("CONNECTED WITH mediWard MONGODB")
});



mongoose.connect("mongodb+srv://wathsala:WaT@123_@cluster-ndaxh.mongodb.net/mediWard?retryWrites=true&w=majority", { useNewUrlParser: true ,useUnifiedTopology: true}, () => {
    console.log("CONNECTED WITH mediWard MONGODB")
});

*/

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://wathsala:WaT@123_@cluster-ndaxh.mongodb.net/mediWard?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => {
    console.log("CONNECTED WITH mediWard MONGODB")
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', helloRote);
app.use('/trolley', trolleyRoute);
app.use('/patients', patientsRoute);
app.use('/tests', testsRoute);
app.use('/treatment', treatmentRoute);
app.use('/auth', authRoute);
app.use('/accRqst', accountRqstRoute);
app.use('/admission', admissionRoute);
app.use('/chartRqsts', chartRqstRoute);


app.listen(port, () => { console.log(`running on PORT ${{ port }}`) });