var bull = require('../models/bull');
// List of all Costumes
exports.bull_list = async function(req, res) {
    try{
        thebull = await bull.find();
        res.send(thebull);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
       
};
// for a specific Costume.
exports.bull_detail = function(req, res) {
res.send('NOT IMPLEMENTED: bull detail: ' + req.params.id);
};

// for a specific Costume.
exports.bull_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await bull.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    return;
    }
    };
    
// Handle Costume create on POST.
exports.bull_create_post = async function(req, res) {
console.log(req.body)
let document = new bull();
document.Bull_Breed = req.body.Bull_Breed;
document.Bull_Size = req.body.Bull_Size;
document.Bull_Value = req.body.Bull_Value;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}


};
// Handle Costume delete form on DELETE.
exports.bull_delete = function(req, res) {
res.send('NOT IMPLEMENTED: bull delete DELETE ' + req.params.id);
};
// Handle Costume delete on DELETE.
exports.bull_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await bull.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    
// Handle Costume update form on PUT.
exports.bull_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: kite update PUT' + req.params.id);
    };
// Handle Costume update form on PUT.
exports.bull_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
try {
let toUpdate = await bull.findById( req.params.id)
// Do updates of properties
if(req.body.Bull_Breed) toUpdate.Bull_Breed = req.body.Bull_Breed;
if(req.body.Bull_Size) toUpdate.Bull_Size = req.body.Bull_Size;
if(req.body.Bull_Value) toUpdate.size = req.body.Bull_Value;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

// VIEWS
// Handle a show all view
exports.bull_view_all_Page = async function(req, res) {
    try{
    thebull = await bull.find();
    res.render('bull', { title: 'bull Search Results', results: thebull });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };


    // Handle a show one view with id specified by query
    exports.bull_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    results = await bull.findById( req.query.id)
    res.render('bulldetail',
    { title: 'bull Detail', toShow: results });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
 
    // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.bull_create_Page = function(req, res) {
console.log("create view")
try{
res.render('bullcreate', { title: 'bull Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// Handle building the view for updating a costume.
// query provides the id
exports.bull_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
results = await bull.findById( req.query.id)
res.render('bullupdate', { title: 'bull Update', toShow: results });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
    
// Handle a delete one view with id from query
exports.bull_delete_Page = async function(req, res) {
console.log("Delete view for id " + req.query.id)
try{
results = await bull.findById(req.query.id)
res.render('bulldelete', { title: 'bull Delete', toShow:
results });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
    

