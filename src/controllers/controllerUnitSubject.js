//Create a controller object to admin the diferents operations of a CRUD
ctrlUnitSubject = {};
//Get subject's model
const Subject = require("../models/Subject");
//Get unitSubject's model
const UnitSubject = require("../models/UnitSubject");

//Render view to show all Unit-Subject
ctrlUnitSubject.listUnitSubject = async (req, res) => {
  const unitSubjects = await UnitSubject.find().lean();
  res.render("unitSubject/listUnitSubject", { unitSubjects });
};

//Render form to add a Unit-Subject
ctrlUnitSubject.addUnitSubject = async (req, res) => {
  const subjects = await Subject.find().lean();
  res.render("unitSubject/addUnitSubject", { subjects });
};

//Save a Unit-Subject in DB
ctrlUnitSubject.saveUnitSubject = async (req, res) => {
  //Destructuring from request
  const { noUnit, nameUnit, hoursUnit, hoursWeek, subjectID } = req.body;
  console.log(req.body);
  //Create the object with module mongoose
  const saveUnitSubjectDB = new UnitSubject({
    noUnit,
    nameUnit,
    hoursUnit,
    hoursWeek,
    subjectID,
  });
  console.log(saveUnitSubjectDB);
  //Save object created
  await saveUnitSubjectDB.save();
  res.redirect("/unitSubject");
};

//Render form to update a Unit-Subject
ctrlUnitSubject.updateUnitSubject = async (req, res) => {
  //Find a subject in DB with ID from request
  const subject = await Subject.findById(req.params.id).lean();
  const careers = await Career.find().lean();
  res.render("unitSubject/updateUnitSubject", { subject, careers });
};

//Update a Unit-Subject
ctrlUnitSubject.updateUnitSubjectDB = async (req, res) => {
  const { noUnit, nameUnit, hoursUnit, hoursWeek, subjectID } = req.body;
  await Subject.findByIdAndUpdate(req.params.id, {
    noUnit,
    nameUnit,
    hoursUnit,
    hoursWeek,
    subjectID,
  });
  res.redirect("/unitSubject");
};

//Delete a Unit-Subject
ctrlUnitSubject.deleteUnitSubject = async (req, res) => {
  await Subject.findByIdAndDelete(req.params.id);
  res.redirect("/unitSubject");
};

module.exports = ctrlUnitSubject;
