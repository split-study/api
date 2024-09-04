export type Product = {
  id: string;
  title: string;
  description: string;
};

export type Price = {
  amount: string;
  currencyCode: string;
};

export type ProductVariant = {
  id: string;
  inventoryQuantity: number;
  sku: string;
  title: string;
  contextualPricing: {
    price: Price;
  };
};

export type ProductQueryResponse = {
  products: {
    edges: {
      cursor: string;
      node: Product;
    }[];
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  };
};

export type ProductVariantsQueryResponse = {
  productVariants: {
    edges: {
      node: ProductVariant;
    }[];
  };
};

export type ProductVariantsUpdateMutationResponse = {
  productVariantsBulkUpdate: {
    productVariants: ProductVariant[];
  };
};

export type LineItem = {
  id: number;
  variant_id: number;
  product_id: number;
  title: string;
  variant_title: string;
  sku: string;
  vendor: string;
  quantity: number;
  requires_shipping: boolean;
  taxable: boolean;
  gift_card: boolean;
  fulfillment_service: string;
  grams: number;
  name: string;
  properties: any[];
  custom: boolean;
  price: string;
  admin_graphql_api_id: string;
};

export type DraftOrder = {
  id: number;
  note: string | null;
  email: string | null;
  taxes_included: boolean;
  currency: string;
  invoice_sent_at: string | null;
  created_at: string;
  updated_at: string;
  tax_exempt: boolean;
  completed_at: string | null;
  name: string;
  status: string;
  line_items: LineItem[];
  tags: string;
  total_price: string;
  subtotal_price: string;
  total_tax: string;
  admin_graphql_api_id: string;
};
