exports.checkTime = async (req, res, next) => {
    const date = new Date();
    const hour = date.getHours();

    if (9 < hour < 17) {
        next();
    }
    else {
        res.status(403).send("You can only access this page during work hour (9-17)");
    };
};

