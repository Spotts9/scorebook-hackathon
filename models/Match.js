import mongoose from 'mongoose';
const {String, Number} = mongoose.Schema.Types;

const MatchSchema = new mongoose.Schema({
    wrestler: {
        type: String,
        required: true
    },
    opponent: {
        type: String,
        required: true
    },
    result: {
        type: String,
        required: true,
        default: 'W',
        enum: ['W', 'L']
    },
    pointsFor: {
        type: Number,
        required: true,
        default: 0
    },
    pointsAgainst: {
        type: Number,
        required: true,
        default: 0
    },
    takedowns: {
        type: Number,
        required: true,
        default: 0
    },
    escapes: {
        type: Number,
        required: true,
        default: 0
    },
    NF2: {
        type: Number,
        required: true,
        default: 0
    },
    NF3: {
        type: Number,
        required: true,
        default: 0
    },
    NF4: {
        type: Number,
        required: true,
        default: 0
    },
    fall: {
        type: Boolean,
        default:false,
        required: true,
    },
    time: {
        type: String,
        required: true,
        default: "0:00"
    },
})

export default mongoose.models.Match || mongoose.model('Match', MatchSchema);