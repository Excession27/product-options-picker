import axios from "../httpClient";

export interface Product {
  id?: string; // ID of the product record. We can have many products with the same type (product_id)
  product_type_id?: number; // Represents id of product type. In relation with name
  product_type_name?: string; // Name of the product type
  format?: string;
  pages?: number; //Number of pages
  weight?: number;
  material?: string;
  color?: string;
}

export const products: Product[] = [
  {
    id: "1",
    product_type_id: 1,
    product_type_name: "Postcard",
    format: "DIN A5 quer",
    pages: 4,
    weight: 170,
    material: "matt",
    color: "4/4-farbig",
  },
  {
    id: "2",
    product_type_id: 1,
    product_type_name: "Postcard",
    format: "DIN A5 quer",
    pages: 6,
    weight: 170,
    material: "matt",
    color: "4/4-farbig",
  },
  {
    id: "3",
    product_type_id: 1,
    product_type_name: "Postcard",
    format: "DIN A5 quer",
    pages: 6,
    weight: 250,
    material: "matt",
    color: "4/4-farbig",
  },
  {
    id: "4",
    product_type_id: 1,
    product_type_name: "Postcard",
    format: "DIN A5 quer",
    pages: 6,
    weight: 250,
    material: "shiny",
    color: "4/4-farbig",
  },
  {
    id: "5",
    product_type_id: 1,
    product_type_name: "Postcard",
    format: "DIN A5 quer",
    pages: 6,
    weight: 250,
    material: "shiny",
    color: "4/0-farbig",
  },
  {
    id: "6",
    product_type_id: 1,
    product_type_name: "Postcard",
    format: "DIN A5 quer",
    pages: 6,
    weight: 170,
    material: "shiny",
    color: "4/0-farbig",
  },
  {
    id: "7",
    product_type_id: 1,
    product_type_name: "Postcard",
    format: "DIN A5 quer",
    pages: 8,
    weight: 170,
    material: "shiny",
    color: "4/0-farbig",
  },
  {
    id: "8",
    product_type_id: 1,
    product_type_name: "Postcard",
    format: "DIN A5 quer",
    pages: 8,
    weight: 170,
    material: "matt",
    color: "4/0-farbig",
  },
  {
    id: "9",
    product_type_id: 1,
    product_type_name: "Postcard",
    format: "DIN A5 quer",
    pages: 8,
    weight: 250,
    material: "shiny",
    color: "4/0-farbig",
  },
  {
    id: "10",
    product_type_id: 1,
    product_type_name: "Postcard",
    format: "DIN A6 quer",
    pages: 4,
    weight: 250,
    material: "shiny",
    color: "4/0-farbig",
  },
  {
    id: "11",
    product_type_id: 1,
    product_type_name: "Postcard",
    format: "DIN A6 quer",
    pages: 4,
    weight: 170,
    material: "shiny",
    color: "4/0-farbig",
  },
  {
    id: "12",
    product_type_id: 1,
    product_type_name: "Postcard",
    format: "DIN A6 quer",
    pages: 4,
    weight: 250,
    material: "matt",
    color: "4/4-farbig",
  },
];

export const find = (params?: Product): Product[] => {
  if (!params) {
    return products;
  }

  return products.filter((product) => {
    let valid = true;
    for (let param of Object.keys(params)) {
      const pKey = param as keyof typeof product;
      if (product[pKey] != params[pKey]) {
        valid = false;
      }
    }
    return valid;
  });
};

export const getData = (): any => find();
