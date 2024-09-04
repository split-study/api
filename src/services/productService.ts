import { gql } from 'graphql-request';
import { client } from '../httpClient';
import { ProductQueryResponse } from '../types';

export const getAllProducts = async (
  limit: number,
  afterCursor: string | null,
  beforeCursor: string | null,
) => {
  const productsQuery = gql`
    query GetProducts($limit: Int!, $after: String, $before: String) {
      products(${
        beforeCursor ? 'last' : 'first'
      }: $limit, after: $after, before: $before) {
        edges {
          cursor
          node {
            id
            title
            description
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
    }
  `;

  const variables = {
    limit,
    after: afterCursor,
    before: beforeCursor,
  };

  const { products } = await client.request<ProductQueryResponse>(
    productsQuery,
    variables,
  );

  const { edges, pageInfo } = products;

  const mappedProducts = edges.map(({ node, cursor }) => ({
    product: node,
    cursor,
  }));

  return { products: mappedProducts, pageInfo };
};
