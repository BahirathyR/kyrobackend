
const { Profile } = require("../model/profileDetails");

//===================================Add Profile======================================//

exports.addProfile = async (req, res,err) => {
      console.log("hii")
      const body = req.body;
      const profile = new Profile(body);
      await profile.save();
      if (res.status(200).json) ({
            status: 200,
            message: "Profile Info successfully added.."
      });
      else {
          return res.status(500).json({
                  status: 500,
                  message: 'Something failed...',
                  err: err.message
            });
      }

}

//===================================Get Profile Info======================================//

exports.getProfile = async (req, res) => {
      const data = await Profile.find({});
      if(res.status(200).json)({
          status: 200,
          message: "Data suessfully fetched",
          data
      });
      else {
            return res.status(500).json({
                    status: 500,
                    message: 'Something failed...',
                    err: err.message
              });
        }
}

//=================================GetProfile Info By ID=====================================//

  exports.getbyIDProfile = async (req, res) => {
      const { _id } = req.params;
        const data = await Profile.find({ _id });
        console.log("get",data)
      if(res.status(200).json)({
          status: 200,
          message: "Data suessfully fetched",
          data
        });
        else {
            return res.status(500).json({
                    status: 500,
                    message: 'Something failed...',
                    err: err.message
              });
        }
}

//==================================Update Profiel=======================================//

exports.updateProfile = async (req, res) => {
      console.log("para")
      const receiveData = req.body;
      console.log("receiveData",receiveData)
      console.log("recc",receiveData._id)
      const update = { $set: receiveData };
      const query = { _id: receiveData._id };
      console.log("query",query)
      const data = await Profile.updateMany(query, update);
      console.log('data', data);
      if(data.modifiedCount>0){
          return res.status(200).json({
              status: 200,
              message: "Successfully Updated",
              updatedCount: data.n
          });
      }
      else{
          return res.status(202).json({
              status: 202,
              message: "failed Update",
              updatedCount: data.n
          });
      }

  }