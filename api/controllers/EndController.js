// api/controllers/EndController.js
module.exports = {
    endProcess: function(req, res) {
      res.send('Server is shutting down...');
      process.exit(0);
    }
  };
  