// Logs the error and sends a error response

module.exports = (err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something broke!');
};
