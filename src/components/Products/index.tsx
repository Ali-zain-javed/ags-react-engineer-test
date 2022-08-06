import React, { FC, useEffect } from "react";
import styled from "styled-components";
import Search from "./Search";
import { mockUp } from "./mockUp";
import { useDispatch } from "react-redux";
import { setProducts } from "./searchSlice";
import ListItem from "./List";

const Main = styled.main`
  display: grid;
  grid-template-columns: 80px 1fr;

  > article {
    padding: ${({ theme }) => theme.size24} ${({ theme }) => theme.size40};
  }
`;

const Product: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://62d7f6869088313935880018.mockapi.io/api/v1")
      .then((response) => response.json())
      .then((data) => {
        if (data !== "Not found") {
          dispatch(setProducts(data));
        } else {
          dispatch(setProducts(mockUp));
        }
      })
      .catch((error) => {
        dispatch(setProducts(mockUp));
      });
  }, []);

  return (
    <>
      <Search />
      <ListItem />
    </>
  );
};

export default Product;
