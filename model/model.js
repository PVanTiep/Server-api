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
    bringtness:{
        type:String,   
        required:true
    },
    device:[
        {
            name:String,
            Id:String,
            Ip:String
        }
    ],
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

const ledSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    status:{
        type:String,
    },
}, {timestamps:true}
);

let Data = mongoose.model("Data", dataSchema);
let Device = mongoose.model("Device", deviceSchema);
let Led = mongoose.model("Led", deviceSchema);
module.exports={Data,Device,Led};