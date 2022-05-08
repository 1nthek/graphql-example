import { gql } from "apollo-server-express";

const messageSchema = gql`
  type Message {
    id: ID! #! 반드시 들어가야 한다
    text: String!
    userId: ID!
    timestamp: Float #13자리 숫자 //정수형은 자릿수 제한이 있다.
  }
  extend type Query { #sql 의 get 과 같은 기능
    messages: [Message!]! # getMessages
    message(id: ID!): Message! # getMessage
  }
  extend type Mutation {
    createMessage(text: String!, userId: ID!): Message!
    updateMessage(id: ID!, text: String!, userId: ID!): Message!
    deleteMessage(id: ID!, userId: ID!): ID!
  }
`;

export default messageSchema;
