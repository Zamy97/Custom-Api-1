module.exports = function(app, db) {
    const collection =
    // Create route
    app.post('/notes', (req, res) => {
        const note = { text: req.body.body, title: req.body.title};
        db.collection('notes').insert(note, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occured' });
            } else {
                res.send(result.ops[0]);
            }
        });
        // console.log(req.body);
        // res.send("hello there! Does this respond something")
    });
};
