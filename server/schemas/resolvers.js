const { Streamer } = require('../models')

const resolvers = {
    Query: {
        topStreamer: async () => {
            return Streamer.find();
        }
    }
};

module.exports = resolvers;