import { gql } from 'graphql-request';
import { client } from '../httpClient';
import {
  ProductVariantsQueryResponse,
  ProductVariantsUpdateMutationResponse,
} from '../types';
import { formatPrice } from '../utils/formatPrice';
import { createQueryString } from '../utils/createQueryString';

export const getProductVariantsByProductId = async (productId: string) => {
  const formattedProductId = productId.split('/').at(-1) ?? '';

  const productVariantsQuery = gql`
    query GetProductVariants($limit: Int!, $queryString: String!) {
      productVariants(first: $limit, query: $queryString) {
        edges {
          node {
            id
            title
            sku
            inventoryQuantity
            contextualPricing(context: { country: UA }) {
              price {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    limit: 3,
    queryString: createQueryString({
      key: 'product_id',
      value: formattedProductId,
    }),
  };

  const { productVariants } =
    await client.request<ProductVariantsQueryResponse>(
      productVariantsQuery,
      variables,
    );

  return productVariants.edges.map(({ node }) => {
    const { contextualPricing, ...restNode } = node;

    return {
      ...restNode,
      price: formatPrice(contextualPricing.price),
    };
  });
};

export const updateProductVariants = async (
  productId: string,
  variants: {
    id: string;
    price: string;
  },
) => {
  const productVariantMutation = gql`
    mutation productVariantsBulkUpdate(
      $productId: ID!
      $variants: [ProductVariantsBulkInput!]!
    ) {
      productVariantsBulkUpdate(productId: $productId, variants: $variants) {
        productVariants {
          id
          title
          sku
          inventoryQuantity
          contextualPricing(context: { country: UA }) {
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  `;

  const {
    productVariantsBulkUpdate: { productVariants },
  } = await client.request<ProductVariantsUpdateMutationResponse>(
    productVariantMutation,
    {
      productId,
      variants,
    },
  );

  return productVariants.map((variant) => {
    const { contextualPricing, ...restVariant } = variant;

    return {
      ...restVariant,
      price: formatPrice(contextualPricing.price),
    };
  });
};
