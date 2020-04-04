//Create a controller object to admin the diferents operations of a CRUD
ctrlSubject = {};
//Get subject's model
const Subject = require("../models/Subject");
//Get career's model
const Career = require("../models/Career");

//Render view to show all subjects
ctrlSubject.listSubjects = async (req, res) => {
  const subjects = await Subject.find().lean();
  res.render("subject/listSubjects", { subjects });
};

//Render form to add a subject
ctrlSubject.addSubject = async (req, res) => {
  //Error
  const careers = await Career.find().lean();
  res.render("subject/addSubject", { careers });
};

//Save a subject in DB
ctrlSubject.saveSubject = async (req, res) => {
  //Destructuring from request
  const { name, grade, careerID } = req.body;
  console.log(req.body);
  //Create the object with module mongoose
  const saveSubjectDB = new Subject({
    name,
    grade,
    careerID,
  });
  console.log(saveSubjectDB);
  //Save object created
  await saveSubjectDB.save();
  res.redirect("/subjects");
};

//Render form to update a career
ctrlSubject.updateSubject = async (req, res) => {
  //Find a subject in DB with ID from request
  const subject = await Subject.findById(req.params.id).lean();
  const careers = await Career.find().lean();
  res.render("subject/updateSubject", { subject, careers });
};

//Update a career
ctrlSubject.updateSubjectDB = async (req, res) => {
  const { name, grade, careerID } = req.body;
  await Subject.findByIdAndUpdate(req.params.id, { name, grade, careerID });
  res.redirect("/subjects");
};

//Delete a career
ctrlSubject.deleteSubject = async (req, res) => {
  await Subject.findByIdAndDelete(req.params.id);
  res.redirect("/subjects");
};

module.exports = ctrlSubject;
