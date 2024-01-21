interface IEcommerceEndpoint {
  API_TOKEN: string;
}

interface IGoogle {
  API_KEY: string;
}

interface IGlobalConfiguration {
  ecommerceEndpoint: IEcommerceEndpoint;
  google: IGoogle;
}

export function getGlobalConfiguration(): IGlobalConfiguration {
  return {
    ecommerceEndpoint: {
      API_TOKEN: import.meta.env.VITE_ECOMMERCE_API_TOKEN,
    },
    google: {
      API_KEY: import.meta.env.VITE_GOOGLE_API_KEY,
    },
  };
}
