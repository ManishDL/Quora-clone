const mongoose = require('mongoose');
const url = "mongodb+srv://sujitpatil276:sujitpatil276@cluster0.pml365n.mongodb.net/?retryWrites=true&w=majority";

module.exports.connect = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB connected successfully");
    }).catch((error) => console.log("Error :- ", error));
};  