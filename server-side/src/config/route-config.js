module.exports = {
    init(app){
        const staticRoutes = require("../routes/static");
        app.use(staticRoutes);

        const apiRoutes = require("../routes/api");
        app.use(apiRoutes);
    }
}