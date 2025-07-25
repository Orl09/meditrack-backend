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

    attachment: [
        {
        fieldName: {
            type: String
        },
        originalName: {
            type: String
        },

        filename: {
            type: String

        },
        path: {
            type: String
        },
        isActive: {
            type:Boolean,
            default: true
        },
        date: {
            type: Date,
            default: new Date()
        }
    }
    ],

    isActive: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model("treatmentRecords", treatmentRecordsSchema);