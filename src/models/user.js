const mongoose =  require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName: 
        {
            type : String,
            required : true,
            minLength : 4,
            maxLength : 50
        },
        lastName:
        {
            type : String
        },
        emailId :
        {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim : true // it will remove unncessary space between email id
        },
        password :
        {
            type : String,
            required : true
        },
        age :
        {
            type : Number,
            min : 18 , //min age should be 18
            max : 100
        },
        gender :
        {
            type : String,
            validate(value)
            {
                if(!["male", "female", "others"].includes(value))
                {
                    throw new Error("Gender data is not valid");
                }
            }
        },
        photoUrl:
        {
            type : String,
            default : "https://imgs.search.brave.com/B_007OrR9eaWJenb736UiExgsQuLsEBMBBWkKs2A_Ao/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2luZHBuZy5jb20v/cGljYy9tLzI1Mi0y/NTI0Njk1X2R1bW15/LXByb2ZpbGUtaW1h/Z2UtanBnLWhkLXBu/Zy1kb3dubG9hZC5w/bmc"
        },
        about : 
        {
            type : String,
            default : "This is a default about of the user!!"
        },
        skills : 
        {
            type : [String]
        }
    },
    {
        timestamps : true
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;  