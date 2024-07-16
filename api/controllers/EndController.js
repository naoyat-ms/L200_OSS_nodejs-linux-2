// api/controllers/EndController.js
module.exports = {
    endProcess: function(req, res) {
        try{
            res.send('Server is shutting down...');
            process.exit(0);
        } catch(e){
            return res.json({ message: "unexpected error"});
        }
    }
};