const Users = require("../schemas/users");
let loginuser = async (request) => {
  const query = {email: request.email, password: request.password }
  const addquery = new Users(query);
  const userinfo = await addquery.save();
  return userinfo;
}
module.exports = {
    loginuser
};
