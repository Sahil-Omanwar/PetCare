const mongoose=require('mongoose');

const doctorSchema=new mongoose.Schema(
 {   username:{
        maxLength:20,
        required:true,
        default:Doctor1
    },specialization: {
        type: String,
        enum: ['Internal Medicine', 'Surgery', 'Dentistry', 'Cardiology', 'Dermatology'], // Customize as needed
        required: true
    },experienceYears: {
        type: Number,
        min: 0
    },contact: {
        phone: {
            type: String
        },
        email: {
            type: String,
            required: true,
            unique: true
        }
    },clinicAddress: {
        street: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        zipCode: {
            type: String
        }
    },education: [
        {
            degree: {
                type: String
            },
            institution: {
                type: String
            },
            year: {
                type: Number
            }
        }
    ],
    
  
    profilePicture: {
        type: String, // URL or path to profile picture
    }}
)