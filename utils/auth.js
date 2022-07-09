// Both these functions check if user is authorized

// This is a check to see if the user is authorized to a PAGE
//  and redirects to the login page if not logged in
const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

// This is a check to see if the user is authorized to an API
//  and returns 401 not authorized if not logged in
const apiAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.status(401).json({ message: 'please log in!' });
    } else {
        next();
    }
};

module.exports = { withAuth, apiAuth };