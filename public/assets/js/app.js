axios.post('/note',function(req,res) {
  var text = $('#body').val().trim();
  res.send('notes',{ note:text})
})