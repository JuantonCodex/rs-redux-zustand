import { GraphQLClient } from "graphql-request";
import { endpoint } from "../../api/constants";
import { getGlobalConfiguration } from "../../configuration/global";

interface IGraphQLClient {
  method: "GET" | "POST";
}

const { ecommerceEndpoint } = getGlobalConfiguration();

export const graphQLClient = ({ method = "POST" }: IGraphQLClient) => {
  return new GraphQLClient(endpoint, {
    method,
    jsonSerializer: {
      parse: JSON.parse,
      stringify: JSON.stringify,
    },
    headers: {
      authorization: `Bearer ${ecommerceEndpoint.API_TOKEN}`,
    },
  });
};
