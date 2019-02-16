let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET products page. */
router.get('/products', indexController.displayProductsPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET contact page. */
router.get('/contact', indexController.displayContactPage);

/* GET Displays the login page. */
router.get('/login', indexController.displayLoginPage);
/* POST - processes the login page. */
router.post('/login', indexController.processLoginPage);
/* GET Displays the user regestration page. */
router.get('/register', indexController.displayRegisterPage);
/* POST - processes the user User regestration Page */
router.post('/register', indexController.processRegisterPage);
/* GET - perform user Logout */
router.get('/logout', indexController.performLogout);
module.exports = router;
