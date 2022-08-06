import React,{ FC } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyle';
import Topbar from './components/Topbar';
import Product from './components/Products';
const Main = styled.main`
  display: grid;
  grid-template-columns: 80px 1fr;
  
  > article {
    padding: ${({ theme }) => theme.size24} ${({ theme }) => theme.size40};
  }
`;

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Navbar />
        <article>
          <Topbar />
          <Product />
        </article>
      </Main>
    </>
  );
}

export default App;
