import React, { FC } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  .tableStyle {
    width: 100%;
    th {
      text-align: left;
    }
  }
  .card {
    margin: 10px;
    min-width: 1000px;
    max-height: 150px;
    padding: 12px;
    border-radius: 12px;
    border: 1px solid #f1f1f1;
  }
`;

const List: FC = (props) => {
  const products = useSelector((state: any) => state.Products.filterData);
  const filterType = useSelector((state: any) => state.Products.filterType);
  return (
    <Main>
      {products &&
        products.map((item: any) => {
          return (
            <div className="card">
              <table className="tableStyle">
                <tr>
                  <th>Product</th>
                  <th>Spec</th>
                  <th>Sku</th>
                  <th>Price</th>
                </tr>
                <tr>
                  <td>
                    {item.brand} {item.model}
                  </td>
                  <td>
                    {item.capacity}/{item.color}
                  </td>
                  <td>{item.sku}</td>
                  <td>{item.price}</td>
                  <td>
                    {filterType == "2" &&
                      `${item.percentage} %
                    Match`}
                  </td>
                  <td>
                    {filterType == "3" &&
                      `${item.searchCount}
                    Searches`}
                  </td>
                </tr>
              </table>
            </div>
          );
        })}
    </Main>
  );
};

export default List;
