/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export const ProductContext = React.createContext({
  Products: [],
  toggleFav:(id)=>{}
});
export default (props) => {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);
  const toggleFavourite=(productId)=>{
    setProductsList(prevProductsList=>{
      const existingProductIndex=prevProductsList.findIndex(product=>{
        return product.id===productId
      })
      const newProduct={...prevProductsList[existingProductIndex]}
      newProduct.isFavorite=!newProduct.isFavorite
      const updatedProduct=[...prevProductsList]
      updatedProduct[existingProductIndex]=newProduct
      return updatedProduct
    })
  }

  return (
    <ProductContext.Provider value={{ products: productsList ,toggleFav:toggleFavourite}}>
      {props.children}
    </ProductContext.Provider>
  );
};
