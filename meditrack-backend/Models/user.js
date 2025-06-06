const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	

	firstName: {
		type: String
	},

	middleName: {
		type: String
	},

	lastName: {
		type: String
	},

	address: {
		province: {
			type: String
		},
		city: {
			type: String
		},
		street: {
			type: String
		},
        barangay: {
            type: String
        },
        postalCode: {
            type: String
        }
	},

	mobileNo: {
		type: String
	},

	email: {
		type: String
	},

	occupation: {
		type: String
	},

	religion: {
		type: String
	},

	nationality: {
		type: String
	},

    age: {
        type: Number
    },

    birthDate:{
        type: Date
    },

    sex: {
        type: String
    },

    guardian: {
		name: {
			type: String
		},
		occupation: {
			type: String
		},
        relationship: {
            type: String
        }
	},

    lastVisit: {
        type: Date
    },

	attachment: {
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
        }
    },

	isAdmin: {
		type: Boolean,
		default: false
	},

	isActive: {
		type: Boolean,
		default: true
	}

	
})

module.exports = mongoose.model("users", userSchema);