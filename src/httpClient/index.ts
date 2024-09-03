import { GraphQLClient } from 'graphql-request';

const url = 'https://a1842c-78.myshopify.com/admin/api/2024-07/graphql.json';

const headers = {
  'X-Shopify-Access-Token': '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',
};

export const client = new GraphQLClient(url, { headers });
