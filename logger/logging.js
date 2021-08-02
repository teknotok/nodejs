
//custom middleware
function log1(req,res,next) {
    console.log('custom log1 middleware is start');
    next();
}
//custom middleware 2
function log2(req,res,next) {
    console.log('custom log2 middleware is start');
    next();
}

module.exports = {log1,log2};