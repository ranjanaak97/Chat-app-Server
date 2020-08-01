const Users = require("../schemas/users");


let loginUser = async (request) => {
    const userinfo = await Users.find({email: request.email, password: request.password });
    return userinfo;
}

module.exports = {
    loginUser
};