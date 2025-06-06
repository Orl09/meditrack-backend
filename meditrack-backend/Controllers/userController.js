const User = require('../Models/user');


module.exports.getAllUsers = () => {
	return User.find({
        isAdmin: false,
        isActive: true
    }).then(result => {
		return result;
	})
}

//login

module.exports.getUsers = () => {
    return User.find({})
      .select("firstName middleName lastName isAdmin")
      .then(result => {
        return result;
      });
  };
  

	//sign up 
    module.exports.registerUser = (reqBody) => {


        let newUser = new User({
            
            firstName: reqBody.firstName,
            middleName: reqBody.middleName,
            lastName: reqBody.lastName,
            address: {
                street: reqBody.address.street,
                city: reqBody.address.city,
                province: reqBody.address.province,
                barangay: reqBody.address.barangay,
                postalCode: reqBody.address.postalCode
            },
            mobileNo: reqBody.mobileNo,
            email: reqBody.email,
            religion: reqBody.religion,
            occupation: reqBody.occupation,
            nationality: reqBody.nationality,
            guardian: {
                name: reqBody.guardian.name,
                occupation: reqBody.guardian.occupation,
                relationship: reqBody.guardian.relationship
            },
            age: reqBody.age,
            birthDate: reqBody.birthDate,
            sex: reqBody.sex

        })

        return newUser.save().then((user, error) => {
            if (error) {
                return false;

            } else{
                return user;
            }
        })
    }

    //get user data from id
    module.exports.findUser = (userID) => {
        return User.findById(userID).then(res => {
            return res;
        })
    }

    //update user

    module.exports.updateUser = (userID, reqBody) => {

        let updatedUser = {
            firstName: reqBody.firstName,
            middleName: reqBody.middleName,
            lastName: reqBody.lastName,
            address: {
                street: reqBody.address.street,
                city: reqBody.address.city,
                province: reqBody.address.province,
                barangay: reqBody.address.barangay,
                postalCode: reqBody.address.postalCode
            },
            mobileNo: reqBody.mobileNo,
            email: reqBody.email,
            religion: reqBody.religion,
            occupation: reqBody.occupation,
            nationality: reqBody.nationality,
            guardian: {
                name: reqBody.guardian.name,
                occupation: reqBody.guardian.occupation,
                relationship: reqBody.guardian.relationship
            },
            age: reqBody.age,
            birthDate: reqBody.birthDate,
            sex: reqBody.sex
    
        }
    
        return User.findByIdAndUpdate(userID, updatedUser).then((user, error) => {
            if (error) {
                return false;
            } else {
                return true;
            }
        })
    
    }

    //add profile

    module.exports.fileUpload = (file, userID) => {
                console.log(file);
    
                let updatedUser = {
                    
                    attachment: {
                        fieldName: file.fieldname,
                        originalName: file.originalname,
                        filename: file.filename,
                        path: file.path
                    }
                    
                }
            
                return User.findByIdAndUpdate(userID, updatedUser).then((user, error) => {
                    if (error) {
                        return false;
                    } else {
                        return user;
                    }
                })
            }