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

const SchemaExtensive = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    tel: {
        type: String,
        required: true,
        unique: false
    },
    type: {
        type: Integer,
        required: true,
        unique: false
    },
    width: {
        type: Integer,
        required: true,
        unique: false
    },
    height: {
        type: Integer,
        required: true,
        unique: false
    },
    glass: {
        type: String,
        required: true,
        unique: false
    },
    glass2: {
        type: String,
        required: true,
        unique: false
    }
});

const lodzi  = new mongoose.model('Zamer', Schema);
const lodziExtensive  = new mongoose.model('Zamer', SchemaExtensive);

export default {lodzi, lodziExtensive};