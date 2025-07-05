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
                    return treatment;
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
                    return treatment;
                }
            })
        
        }

        module.exports.fileUpload = (file, treatmentID) => {
            console.log(file);

            let updatedTreatment = {
                
                attachment: {
                    fieldName: file.fieldname,
                    originalName: file.originalname,
                    filename: file.filename,
                    path: file.path
                }
                
        
            }
        
            return TreatmentRecords.findByIdAndUpdate(treatmentID, updatedTreatment).then((treatment, error) => {
                if (error) {
                    return false;
                } else {
                    return treatment;
                }
            })
        }

module.exports.multipleFileUpload = (files, treatmentID) => {
  if (!files || files.length === 0) {
    return Promise.reject("No files uploaded");
  }

  console.log(files);

  const attachments = files.map(file => ({
    fieldName: file.fieldname,
    originalName: file.originalname,
    filename: file.filename,
    path: file.path
  }));

  // Assuming 'attachments' is an array in your TreatmentRecords schema
  return TreatmentRecords.findByIdAndUpdate(
    treatmentID,
    { $push: { attachment: { $each: attachments } } }, // Append to attachments array
    { new: true }
  );
};

module.exports.deleteAttachment = async (treatmentID, filenameToDelete) => {
  try {
    const updatedTreatment = await TreatmentRecords.findByIdAndUpdate(
      treatmentID,
      { $pull: { attachment: { _id: filenameToDelete } } }, // Remove matching object
      { new: true } 
    ); 

    return updatedTreatment;
  } catch (error) {
    throw error;
  }
};

