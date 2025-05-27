const mongoose = require('mongoose');

const medRecSchema = new mongoose.Schema({

    userId: {
        type: String
    },

    dateCreated: {
        type: Date,
        default: new Date()
    },

    lastAppointment: {
        type: Date
    },

    dentalClinic: {
        type: String
    },

    doctorName: {
        type: String
    },

    medicalHistoryForm: {
        question1: {
            type: Boolean
        },
    
        question2: {
            type: Boolean
        },
    
        question2Details: {
            type: String
        },
    
        question3: {
            type: Boolean
        },

        question3Details: {
            type: String
        },
    
        question4: {
            type: Boolean
        },
    
        question4Details: {
            type: String
        },
    
        question5: {
            type: Boolean
        },
    
        question5Details: {
            type: String
        },
    
        question6: {
            type: Boolean
        },
    
        question7: {
            type: Boolean
        },
    
        question8: {
            type: Boolean
        },
    
        question8Details: {
            type: String
        },
    
        question9: {
            type: Boolean
        },
    
    
        question10: {
            type: Boolean
        },
    
        question11: {
            type: Array
        },

        question11Details: {
            type: String
        },
    
        bloodType: {
            type: String
        },

        bloodPressure: {
            type: String
        }
    },

    isActive:{
        type: Boolean,
        default: true
    }


});

module.exports = mongoose.model("medRecs", medRecSchema);