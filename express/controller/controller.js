const UserService  = require('../services/services')

exports.getUser =  async (req, res, next) => {
        
   try {

       var users = await UserService

       return res.status(200).json({ 
        status: 200, 
        data: users, 
        message: "Succesfully Users" });
   } catch (e) {
       return res.status(400).json({ 
        status: 400, 
        message: e.message 
     });
   }
}

exports.newUser =  async (req, res, next) => {
    //xu ly loi express
    
        const user = await User.create(req.body);
    
        res.status(201).json({
            success: true,
            user
        })
    }

    exports.updateUser =  async (req, res, next) => {
        //const k gan lai dc bien
        //let gan lai dc bien
        let users = await User.findById(req.params.id); 
    
        if (!users) {
            return next(new ErrorHandler('User not found!', 404))
        }
    
        res.status(200).json({
            success: true,
            data: users
        })
    }
    

    exports.deleteUser =  async (req, res, next) => {
        //const k gan lai dc bien
        //let gan lai dc bien
        let users = await User.findById(req.params.id);
    
        if (!users) {
            return next(new ErrorHandler('User delete failed!', 404))
        }
        
        try {
            res.status(200).json({ 
                success: true, 
                data: users, 
                message: "Delete Successful" })
            }
        catch (error) {
                console.error(error);
              }
    
    }

