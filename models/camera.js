const mongoose = require("mongoose");

const cameraSchema = new mongoose.Schema({
    brand:{
        type: String
    },
    model:{
        type: String
    },
    sensorSizeDiagonal:{
        type: Number
    },
    sensorAspectRatio:{
        type: String
    },
    sensorType:{
        type: String
    },
    sensorResolutionWidth:{
        type: Number
    },
    sensorResolutionHeight:{
        type: Number
    },
    maxImageResolutionWidth:{
        type: Number
    },
    maxImageResolutionHeight:{
        type: Number
    },
    cropFactor:{
        type: Number
    },
    opticalZoom:{
        type: Number
    },
    opticalZoomBool:{
        type: Boolean
    },
    digitalZoom:{
        type: Boolean
    },
    iso:{
        type: String
    },
    autoISO:{
        type: Boolean
    },
    isoMin:{
        type: Number
    },
    isoMax:{
        type: Number
    },
    isoExpandableMin:{
        type: Number
    },
    isoExpandableMax:{
        type: Number
    },
    rawSupport:{
        type: Boolean
    },
    manualFocus:{
        type: Boolean
    },
    normalFocusRange:{
        type: String
    },
    macroFocusRange:{
        type: String
    },
    focalLengthThirtyFive:{
        type: String
    },
    aperturePriority:{
        type: Boolean
    },
    maxAperture:{
        type: String
    },
    maxApertureThirtyFive:{
        type: String
    },
    metering:{
        type: String
    },
    exposureCompensation:{
        type: String
    },
    shutterPriority:{
        type: Boolean
    },
    minShutterSpeed:{
        type: String
    },
    maxShutterSpeed:{
        type: String
    },
    builtInFlash:{
        type: Boolean
    },
    externalFlash:{
        type: Boolean
    },
    viewfinder:{
        type: String
    },
    whiteBalancePresets:{
        type: Number
    },
    screenSize:{
        type: Number
    },
    screenResolution:{
        type: Number
    },
    videoCapture:{
        type: Boolean
    },
    storageTypes:{
        type: String
    },
    usb:{
        type: String
    },
    hdmi:{
        type: Boolean
    },
    wireless:{
        type: Boolean
    },
    gps:{
        type: Boolean
    },
    battery:{
        type: String
    },
    weight:{
        type: Number
    },
    dimensions:{
        type: String
    },
    lensMount:{
        type: String
    },
    averagePrice:{
        type: Number
    },
    autofocus:{
        type: String
    },
    year:{
        type: Date
    }
});

module.exports = mongoose.model("Cameras", cameraSchema, "cameras");