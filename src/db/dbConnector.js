const mongoose = require('mongoose');
const { environment } = require('../config/config');
const { friendSchema } = require('./schemas/friendSchema.js');
const { seriesSchema } = require('./schemas/seriesSchema.js');
const env = process.env.NODE_ENV || "development";


mongoose.connect(environment[env].dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;

db.on('error', () => {
    console.error("Error connecting to the database");
});

const Friends = mongoose.model('Friends', friendSchema);
const Series = mongoose.model('Series', seriesSchema);

export {Friends, Series}