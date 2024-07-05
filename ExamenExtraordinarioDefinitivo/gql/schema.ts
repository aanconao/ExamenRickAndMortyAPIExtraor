export const typeDefs = `#graphql
    type Character{
        id: ID!
        name: String!
        status: String!
        species: String!
        type: String!
        gender: String!
        episode: [Episode!]!
        location: [Location!]!
        url: String!
        created: String!
    }

    type Location{
        id: ID!
        name: String!
        characters:[Character!]!
    }

    type Episode{
        id:ID!
        name: String!
        characters:[Character!]!
    }

    type Query{
        character(id: ID!): Character 
        charactersByIds(ids: [ID!]!):[Character] 
    }
`;
