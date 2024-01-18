import { GraphQLClient } from "graphql-request";
import { endpoint } from "../constants";

interface IGraphQLClient {
  method: "GET" | "POST";
}

export const graphQLClient = ({ method = "POST" }: IGraphQLClient) => {
  return new GraphQLClient(endpoint, {
    method,
    jsonSerializer: {
      parse: JSON.parse,
      stringify: JSON.stringify,
    },
  });
};
