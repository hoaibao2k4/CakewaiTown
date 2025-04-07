export interface Item {
  product_id: string;
  type_id: string;
  name: string;
  variant: string;
  discount: number;
  price: number;
  image_link: string;
  buy_quantity: number;
}

export interface Invoice {
  name: string;
  email: string;
  address: string;
  phone: string;
  notes: string;
  order_items: Item[] | Item;
  service_type: number;
}
