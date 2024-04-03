import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    tel: {
        type: String,
        required: true,
        unique: false
    }
});

const lodzi  = new mongoose.model('Zamer', Schema);

export default lodzi;