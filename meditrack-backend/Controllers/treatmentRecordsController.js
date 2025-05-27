const TreatmentRecords = require('../Models/treatmentRecords.js');


//get user data from id
    module.exports.findTreatment = (reqBody) => {
        return TreatmentRecords.find({
            userId: reqBody,
            isActive: true
        }).then(res => {
            return res;
        })
    }

    //add treatment
        module.exports.addTreatment = (reqBody) => {
    
    
            let newTreatment = new TreatmentRecords({
                
                userId: reqBody.userId,
                date: reqBody.date,
                procedure: reqBody.procedure,
                amountCharged: reqBody.amountCharged,
                amountPaid: reqBody.amountPaid,
                toothNumber: reqBody.toothNumber,
                notes: reqBody.notes
    
            })
    
            return newTreatment.save().then((treatment, error) => {
                if (error) {
                    return false;
    
                } else{
                    return true;
                }
            })
        }

        module.exports.updateTreatment = (treatmentID, reqBody) => {

            let updatedTreatment = {
                
                date: reqBody.date,
                procedure: reqBody.procedure,
                amountCharged: reqBody.amountCharged,
                amountPaid: reqBody.amountPaid,
                toothNumber: reqBody.toothNumber,
                notes: reqBody.notes,
                isActive: reqBody.isActive
        
            }
        
            return TreatmentRecords.findByIdAndUpdate(treatmentID, updatedTreatment).then((treatment, error) => {
                if (error) {
                    return false;
                } else {
                    return true;
                }
            })
        
        }
