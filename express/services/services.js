const User = require('../models/models');


exports.getUser = async (query, page, limit) => {

    try {
        const users = await User.findById(req.params.id)
        return users;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}