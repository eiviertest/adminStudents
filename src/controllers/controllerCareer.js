//Create a controller object to admin the diferents operations of a CRUD
ctrlCareer = {};
//Get career's model
const Career = require("../models/Career");

//Render view to show all careers
ctrlCareer.listCareers = async (req, res) => {
  const careers = await Career.find().lean();
  res.render("career/listCareers", { careers });
};

//Render form to add a career
ctrlCareer.addCareer = async (req, res) => {
  res.render("career/addCareer");
};

//Save a career in DB
ctrlCareer.saveCareer = async (req, res) => {
  //Destructuring from request
  const { name } = req.body;
  //Create the object with module mongoose
  const saveCareerDB = new Career({
    name
  });
  //Save object created
  await saveCareerDB.save();
  res.redirect("/careers");
};

//Render form to update a career
ctrlCareer.updateCareer = async (req, res) => {
  //Find a career in DB with ID from request
  const career = await Career.findById(req.params.id).lean();
  res.render("career/updateCareer", { career });
};

//Update a career
ctrlCareer.updateCareerDB = async (req, res) => {
  const { name } = req.body;
  await Career.findByIdAndUpdate(req.params.id, { name });
  res.redirect("/careers");
};

//Delete a career
ctrlCareer.deleteCareer = async (req, res) => {
  await Career.findByIdAndDelete(req.params.id);
  res.redirect("/careers");
};

module.exports = ctrlCareer;
