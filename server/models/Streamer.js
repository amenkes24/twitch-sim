const { Schema, model } = require('mongoose');

const streamerSchema = new Schema(
    {
        streamerName: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        views: {
            type: Number,
            required: true,

        },
        category: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

// create the streamer model using the StreamerSchema
const Streamer = model('Streamer', streamerSchema)

module.exports = Streamer;
