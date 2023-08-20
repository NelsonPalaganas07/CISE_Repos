const mongoose = require('mongoose');

const SpeedSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: true
    },
    source: {
        type: String,
    },
    pubyear: {
        type: Number,
        required: true
    },
    doi: {
        type: String,
    },
    claim: {
        type: String,
    },
    evidence: {
        type: String,
    },
})

module.exports = Speed = mongoose.model('speed', SpeedSchema);