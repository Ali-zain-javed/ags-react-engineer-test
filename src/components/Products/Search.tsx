import React, { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { filterProduct } from "./utlils";
import { findProduct } from "./searchSlice";
const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  > input {
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    border: 1px solid #6b4eff;
    border-radius: 4px;
    box-sizing: border-box;
    > focus-visible {
      border-color: #6b4eff;
    }
  }
  .noFound {
    margintop: 20px;
    min-width: 400px;
    max-height: 150px;
    min-height: 80px;
    padding: 22px;
    border-radius: 12px;
    background-color: #f1f1f1;
  }
`;
const Search: FC = () => {
  const [searchValue, setSearchValue] = useState();
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.Products.Products);
  const filterType = useSelector((state: any) => state.Products.filterType);
  useEffect(
    () => {
      // Wait 1000ms before copying the value of tempValue into value;
      const timeout = setTimeout(() => {
        if (searchValue) {
          let filterData = filterProduct(searchValue, products);
          dispatch(findProduct(filterData));
        }
      }, 1000);
      // If the hook is called again, cancel the previous timeout
      // This creates a debounce instead of a delay
      return () => clearTimeout(timeout);
    },
    // Run the hook every time the user makes a keystroke
    [searchValue]
  );
  return (
    <InputDiv>
      <input
        onChange={(e: any) => {
          setSearchValue(e.target.value);
        }}
      ></input>
      {filterType == "3" && (
        <div className="noFound">Not Match Found for '{searchValue}'</div>
      )}
    </InputDiv>
  );
};

export default Search;
