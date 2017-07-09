const mongoose = require("mongoose")


module.exports.connect = (uri) => {
    mongoose.connect(uri, function (err) {
        if(err){
            console.log(err)
        }
    })


    mongoose.Primise = global.Promise
    console.log(global.Promise)

    mongoose.connection.on("error", (err) => {
        console.log(`Mongoose connection error: ${err}`)
        process.exit(1);
    })

    //load models
    require('./user')
}