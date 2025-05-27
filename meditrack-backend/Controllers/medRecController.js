const Record = require("../Models/medRecords");

//get all records
module.exports.getAllRecords = (userid) => {
	return Record.find({
        userId: userid,
        isActive: true

    }).then(result => {
		return result;
	})
}

//add treatment
        module.exports.addRecord = (reqBody) => {
    
    
            let newRecord = new Record({
                
                userId: reqBody.userId,
                doctorName: reqBody.doctorName,
                dentalClinic: reqBody.dentalClinic,
                lastAppointment: reqBody.lastAppointment,
                medicalHistoryForm: {
                    bloodType: reqBody.medicalHistoryForm.bloodType,
                    bloodPressure: reqBody.medicalHistoryForm.bloodPressure,
                    question1: reqBody.medicalHistoryForm.question1,
                    question2: reqBody.medicalHistoryForm.question2,
                    question2Details: reqBody.medicalHistoryForm.question2Details,
                    question3: reqBody.medicalHistoryForm.question3,
                    question3Details: reqBody.medicalHistoryForm.question3Details,
                    question4: reqBody.medicalHistoryForm.question4,
                    question4Details: reqBody.medicalHistoryForm.question4Details,
                    question5: reqBody.medicalHistoryForm.question5,
                    question5Details: reqBody.medicalHistoryForm.question5Details,
                    question6: reqBody.medicalHistoryForm.question6,
                    question7: reqBody.medicalHistoryForm.question7,
                    question8: reqBody.medicalHistoryForm.question8,
                    question8Details: reqBody.medicalHistoryForm.question8Details,
                    question9: reqBody.medicalHistoryForm.question9,
                    question10: reqBody.medicalHistoryForm.question10,
                    question11: reqBody.medicalHistoryForm.question11,
                    question11Details: reqBody.medicalHistoryForm.question11Details
                }
    
            })
    
            return newRecord.save().then((record, error) => {
                if (error) {
                    return false;
    
                } else{
                    return true;
                }
            })
        }

        module.exports.updateRecord = (recordID, reqBody) => {
        
                    let updatedRecord = {
                        
                        doctorName: reqBody.doctorName,
                        dentalClinic: reqBody.dentalClinic,
                        lastAppointment: reqBody.lastAppointment,
                        medicalHistoryForm: {
                            bloodType: reqBody.medicalHistoryForm.bloodType,
                            bloodPressure: reqBody.medicalHistoryForm.bloodPressure,
                            question1: reqBody.medicalHistoryForm.question1,
                            question2: reqBody.medicalHistoryForm.question2,
                            question2Details: reqBody.medicalHistoryForm.question2Details,
                            question3: reqBody.medicalHistoryForm.question3,
                            question3Details: reqBody.medicalHistoryForm.question3Details,
                            question4: reqBody.medicalHistoryForm.question4,
                            question4Details: reqBody.medicalHistoryForm.question4Details,
                            question5: reqBody.medicalHistoryForm.question5,
                            question5Details: reqBody.medicalHistoryForm.question5Details,
                            question6: reqBody.medicalHistoryForm.question6,
                            question7: reqBody.medicalHistoryForm.question7,
                            question8: reqBody.medicalHistoryForm.question8,
                            question8Details: reqBody.medicalHistoryForm.question8Details,
                            question9: reqBody.medicalHistoryForm.question9,
                            question10: reqBody.medicalHistoryForm.question10,
                            question11: reqBody.medicalHistoryForm.question11,
                            question11Details: reqBody.medicalHistoryForm.question11Details
                        },
                        isActive: reqBody.isActive
                
                    }
                
                    return Record.findByIdAndUpdate(recordID, updatedRecord).then((record, error) => {
                        if (error) {
                            return false;
                        } else {
                            return true;
                        }
                    })
                
                }

