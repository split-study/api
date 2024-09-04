import { gql } from 'graphql-request';
import { client } from '../httpClient';
import { DraftOrder } from '../types';
import { formatIdToShopifyGID } from '../utils/formatIdToShopifyGID';

export const create = async (order: DraftOrder) => {
  const draftOrderMutation = gql`
    mutation draftOrderUpdate($id: ID!, $input: DraftOrderInput!) {
      draftOrderUpdate(id: $id, input: $input) {
        draftOrder {
          shippingAddress {
            id
          }
        }
      }
    }
  `;

  const productIds = Array.from(
    new Set(
      order.line_items.map(({ product_id }) =>
        formatIdToShopifyGID({ id: product_id, type: 'Product' }),
      ),
    ),
  ).join(', ');

  const variables = {
    id: order.admin_graphql_api_id,
    input: {
      note: productIds,
      tags: 'customTag',
    },
  };

  await client.request(draftOrderMutation, variables);
};
