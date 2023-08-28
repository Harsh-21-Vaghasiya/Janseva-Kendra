const controller = require('../controller/controller')
const express = require('express')
const router = express.Router()
const app = express()
const auth=require('../middleware/auth');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }))

router.route('/')
        .get(auth,controller.renderDocument)
        .post(controller.addDocument);

router.route('/api/get').get(controller.loadDocument);

router.route('/office').get(controller.renderOffice).post(controller.addOffice);

router.route('/detail').get(controller.renderDetail);
router.route('/office-detail').get(controller.renderOfficeDetail);

router.route('/api/office').get(controller.renderOffice);
router.route('/api/nearby').post(controller.nearby);
router.route('/add_document').get((req,res)=>{
        res.render('add_data');
})
router.route('/delete').get(controller.delete);
router.route('/update').get(controller.renderUpdate).post(controller.update);


module.exports = router;
