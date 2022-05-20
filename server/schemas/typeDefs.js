// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type TopStreamer {
        _id: ID
        streamerName: String
    }
    type Query {
        topStreamer: [TopStreamer]
    }
`;

// export the typeDefs 
module.exports = typeDefs