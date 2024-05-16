// Logs the HTTP method and path of each incoming request
module.exports = (req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
};
