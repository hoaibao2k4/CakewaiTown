export interface ProductVariant {
    size: string;
    price: number;
    discount: number;
    variant_features: string;
  }
export  interface CreateCake {
    _id?: string;
    product_name: string;
    image_link: string;
    description: string;
    product_type_id: string;
    product_variant: ProductVariant[];
  }