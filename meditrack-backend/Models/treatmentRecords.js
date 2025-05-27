const mongoose = require('mongoose');

const treatmentRecordsSchema = new mongoose.Schema({
    userId: {
        type: String
    },

    procedure: {
        type: String
    },
    
    date: {
        type: Date
    },

    amountCharged: {
        type: Number
    },

    amountPaid: {
        type: Number
    },

    toothNumber: {
        type: Array
    },

    notes: {
        type: String
    },

    attachment: {
        type: String
    },

    isActive: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model("treatmentRecords", treatmentRecordsSchema);