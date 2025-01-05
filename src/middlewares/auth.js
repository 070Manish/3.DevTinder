//handle auth Middleware for all get post.... request 
const adminAuth = (req, res, next) =>
{
    const token = "abc1";
    const isAdminAuthorized = token === "abc1";

    if(isAdminAuthorized)
    {
        console.log("Admin is Authorized");
        next();
    }
    else
    {
        res.status(401).send("Unauthorized request");
    }

};

const userAuth = (req, res, next) =>
    {
        const token = "abc1";
        const isuserAuthorized = token === "abc1";
    
        if(isuserAuthorized)
        {
            console.log("User is Authorized");
            next();
        }
        else
        {
            res.status(401).send("Unauthorized request");
        }
    
    };
    
module.exports = { adminAuth, userAuth, };
  