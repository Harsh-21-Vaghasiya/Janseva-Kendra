const controller = require('../controller/controller')
const express = require('express')
const router = express.Router()
const app = express()
const auth = require('../middleware/auth');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }))

router.route('/').get(auth, controller.renderDocument).post(auth, controller.addDocument);

router.route('/api/get').get(auth, controller.loadDocument);

router.route('/office').get(auth, controller.renderOffice).post(controller.addOffice);

router.route('/detail').get(auth, controller.renderDetail);

router.route('/office-detail').get(auth, controller.renderOfficeDetail);

router.route('/api/office').get(auth, controller.renderOffice);

router.route('/api/nearby').post(auth, controller.nearby);

router.route('/add_document').get(auth, (req, res) => { res.render('add_data'); });

router.route('/delete').get(auth, controller.delete);

router.route('/update').get(auth, controller.renderUpdate).post(controller.update);


module.exports = router;
