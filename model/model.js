const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    temperature:{
        type:String,
        required:true
    },
    humidity:{
        type:String,
        required:true
    },
    light:{
        type:String,   
        required:true
    },
    led:[
        {
            "one": String,
            "two": String,
        }
        
    ]
}, {timestamps:true}
);

const deviceSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    status:{
        type:String,
    },
}, {timestamps:true}
);

const logSchema = new mongoose.Schema({
    idDevice:{
        type:String,
        required:true
    },
    ipDevice:{
        type:String,
        required:true
    },
    nameDevice:{
        type:String,
        required:true
    },
    nameSensor:{
        type:String,
        required:true
    },
    value:{
        type:String,
        required:true
    },
}, {timestamps:true}
);

let Data = mongoose.model("Data", dataSchema);
let Device = mongoose.model("Device", deviceSchema);
let Log = mongoose.model("Log", logSchema);
module.exports={Data,Device,Log};