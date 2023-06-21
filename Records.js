import mongoose from "mongoose";

const recordSchema = mongoose.Schema({
    id: { type: Number},
    name: {type: String},
})

recordSchema.pre("save", async function(next){
    return next;
})

var Record = mongoose.model('Record', recordSchema);

export default Record;