const mongoose = require('mongoose')
const express = require('express')
const app = express()
const dotenv = require('dotenv')
const Document = require('../models/document')
const Office = require('../models/office')

exports.addDocument = async (req, res) => {
  try {
    console.log(req.body)
    const document = await Document.create(req.body)

    res.redirect('/');
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    })
  }
}

exports.renderDocument = async (req, res) => {
  try {
    const document = await Document.find();
    res.status(200).render('document', { data: document });
  } catch (err) {
    console.log(err);
  }
}

exports.renderDetail = async (req, res) => {
  try {
    const id = req.query.id;
    const document = await Document.findOne({ _id: id });
    console.log(document);
    res.status(200).render('detail', { data: document });
  } catch (err) {
    console.log(err);

  }
}

exports.addOffice = async (req, res) => {
  try {
    console.log(req.body)
    const office = await Office.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        office,
      },
    })
  } catch (err) {
    console.log(err);
  }
}



exports.renderOffice = async (req, res) => {
  try {
    const office = await Office.find({});
    res.status(200).render('office', { data: office })
  } catch (err) {
    console.log(err);

  }
}


exports.loginpage = async (req, res) => {
  try {
    // const office = await Office.find({});
    res.status(200).render('login')
  } catch (err) {
    console.log(err);

  }
}


exports.loadDocument = async (req, res) => {
  // console.log(req.body,req.query,"loadDocument");
  // send data after first 3 docum
  try {
    const document = await Document.find({});
    console.log(document, "is sent");
    res.status(200).json({
      data: document,
    })
  } catch (err) {
    console.log(err);

  }
}
exports.nearby = async (req, res) => {
  try {
    const office = await Office.find({});
    res.status(200).json({
      data: office,
    })
  } catch (err) {
    console.log(err);

  }
}

exports.renderOfficeDetail = async (req, res) => {
  try {
    const id = req.query.id;
    const office = await Office.findOne({ _id: id });
    console.log(office);
    res.status(200).render('office-detail', { data: office });
  } catch (err) {
    console.log(err);

  }
}

exports.delete = async (req, res) => {
  try {
    const id = req.query.id;
    console.log(id);
    const data = await Document.findByIdAndRemove(id);
    console.log("deleted");
    res.redirect('/');
  } catch (err) {
    console.log(err);

  }
}


exports.update = async (req, res) => {
  try {
    const id = req.query.id;
    console.log(id, req.body);
    const data = await Document.findByIdAndUpdate(id, {
      doc_name: req.body.doc_name,
      doc_image: req.body.doc_image,
      doc_discription: req.body.doc_discription,
      online_site: req.body.online_site,
      video_link: req.body.video_link,
      esteemated_time: req.body.esteemated_time,
    }, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log("updated")
    });
    res.redirect('/');
  }
  catch (err) {
    console.log(err);
    res.redirect('/');
  }
}

exports.renderUpdate = async (req, res) => {
  try {
    console.log(req.query.id);
    const data = await Document.findOne({ _id: req.query.id });
    console.log(data);
    res.render("update", { data });
  } catch (err) {
    console.log("error");
  }
}
