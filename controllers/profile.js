
const { Profile } = require("../model/profileDetails");

//===================================Add Profile======================================//

exports.addProfile = async (req, res,err) => {
      console.log("hii")
      const body = req.body;
      const profile =  new Profile(body);
      await profile.save();
      try {
            return res.status(200).json({
                  status: 200,
                  message: "Profile Info successfully added.."
            });

      }
      catch(err){
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
      try {
            return res.status(200).json({
                  status: 200,
                  message: "Profile Info successfully fetched..",
                  data:data
            });

      }
      catch(err){
          return res.status(500).json({
                  status: 500,
                  message: 'Something failed...',
                  err: err.message
            });
      }
}

//=================================GetProfile Info By ID=====================================//

  exports.getbyIDProfile = async (req, res) => {
        const { email } = req.params;
        console.log("email",email)
        const data = await Profile.find({ email });
        console.log("get",data)
        try {
            return res.status(200).json({
                  status: 200,
                  message: "Profile Info successfully fetched..",
                  data:data
            });

      }
      catch(err){
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
      console.log("recc",receiveData.email)
      const update = { $set: receiveData };
      const query = { email: receiveData.email };
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