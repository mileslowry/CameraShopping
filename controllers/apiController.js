"use strict";

const Camera = require('../models/camera');

module.exports = {

    searchCameras: async (req, res) => {
        db.default
    },

    getCamera: async (req, res) => {
        let cameraId = req.query.id;
        let cameraName = req.query.name;
        console.log(cameraName);
        let camera;
        if (typeof cameraID != 'undefined') {
            camera = await Camera.findById(cameraId);    
        } else {
            camera = await Camera.findOne({model:cameraName});
        }
        res.json(camera);
    },

    getAllCameras: async (req, res) => {
        let allCameras = await Camera.find({});
        res.json(allCameras);
    },

    // getFilteredCameras: async (req, res) => {

    // },

    // getLens: async (req, res) => {

    // },

    // getAllLenses: async (req, res) => {

    // },

    // getFilteredLenses: async (req, res) => {

    // },

    // getBrand: async (req, res) => {

    // },

    // getAllBrands: async (req, res) => {

    // },

    // getFilteredBrands: async (req, res) => {

    // }
}