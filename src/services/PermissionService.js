const verifyUserLoggedIn = (req, res) => {
    if (!req.user) {
        return res.status(401).send('user not logged in');
        throw new Error ('user is not logged in')
    }
};

const verifyUserIsAdmin = (req, res) => {
    verifyUserLoggedIn(req, res)

    // if (!req.user) {
    //     return res.status(401).send('user not logged in')
    // };

    if (!req.user.isAdmin){
        return res.status(403).send('user does not have access');
        throw new Error ('user is not an admin');
    };
};

const PermissionService = {
    verifyUserLoggedIn,
    verifyUserIsAdmin
}

module.exports = PermissionService;