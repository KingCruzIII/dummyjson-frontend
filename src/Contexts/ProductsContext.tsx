import { useContext, createContext, useReducer, ReactNode } from "react";
import BaseClient from "../Clients/BaseClient";
import { mergeLeft } from "ramda";
import { useQuery } from "@tanstack/react-query";

const client = BaseClient();

enum PRODUCT_ACTIONS {
  GET_PRODUCT = "GET_PRODUCT",
  GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS",
  GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES",
  GET_CATEGORY_PRODUCTS = "GET_CATEGORY_PRODUCTS",
  SEARCH_PRODUCTS = "SEARCH_PRODUCTS",
}

const initialProducts = {
  products: [],
  categories: [],
};

type ProductActionType = {
  type: PRODUCT_ACTIONS;
  payload: any;
};

type ProductStateType = {
  products: any[];
  categories: string[];
};

const ProductsContext = createContext<ProductStateType>(initialProducts);

export const useProducts = () => {
  return useContext(ProductsContext);
};

const productsReducer = (
  state: ProductStateType,
  action: ProductActionType
): ProductStateType => {
  switch (action.type) {
    case PRODUCT_ACTIONS.GET_PRODUCT:
      return state;
    case PRODUCT_ACTIONS.GET_ALL_PRODUCTS:
      return state;
    case PRODUCT_ACTIONS.GET_ALL_CATEGORIES:
      return mergeLeft(state, { categories: action.payload });
    case PRODUCT_ACTIONS.GET_CATEGORY_PRODUCTS:
      return state;
    case PRODUCT_ACTIONS.SEARCH_PRODUCTS:
      return state;
    default:
      return state;
  }
};

type ProductsProviderType = {
  children: ReactNode;
};

export const ProductsProvider = ({ children }: ProductsProviderType) => {
  const [products, productsDispatch] = useReducer(
    productsReducer,
    initialProducts
  );

  const getAllCategories = async () => {
    const categories =
      (await client.get("https://dummyjson.com/products/categories")) || [];

    productsDispatch({
      type: PRODUCT_ACTIONS.GET_ALL_CATEGORIES,
      payload: categories,
    });
    return categories;
  };

  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  console.log(data);

  const value = {
    ...products,
  };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
