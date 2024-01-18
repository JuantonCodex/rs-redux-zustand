interface IEcommerceEndpoint {
  API_TOKEN: string;
}

interface IGlobalConfiguration {
  ecommerceEndpoint: IEcommerceEndpoint;
}

export function getGlobalConfiguration(): IGlobalConfiguration {
  return {
    ecommerceEndpoint: {
      API_TOKEN: import.meta.env.VITE_ECOMMERCE_API_TOKEN,
    },
  };
}
