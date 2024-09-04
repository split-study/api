import { GraphQLClient } from 'graphql-request';
import config from '../config';

const url = `https://${config.SHOPIFY_STORE_DOMAIN}/admin/api/2024-07/graphql.json`;

const headers = {
  'X-Shopify-Access-Token': config.SHOPIFY_ACCESS_KEY,
};

export const client = new GraphQLClient(url, { headers });
