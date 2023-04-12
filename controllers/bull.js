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
        
        
res.send('NOT IMPLEMENTED: bull list');
};
// for a specific Costume.
exports.bull_detail = function(req, res) {
res.send('NOT IMPLEMENTED: bull detail: ' + req.params.id);
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
// Handle Costume update form on PUT.
exports.bull_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: bull update PUT' + req.params.id);
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
    
    
    
