import { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import { useProductIds } from './entities/hooks';
import ProductsList from './components/ProductsList/ProductsList';
import Pagination from './components/Pagination/Pagination';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { productItems, isLoadingProductItems, pagesCount, isError } = useProductIds(currentPage);

  const handleIncrement = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCurrentPage((prev) => prev - 1);
  };

  console.log(isError);

  return (
    <>
      <Header />
      <main className="main">
        <h2 className="main__title">Наши товары / Our Products</h2>
        {isError ? (
          <div className="error_message">
            Something went wrong in product fetching. We are already working on it. We are sorry for
            inconvinience.
          </div>
        ) : (
          <>
            <ProductsList
              productItems={productItems}
              isLoadingProductItems={isLoadingProductItems}
            />
            <Pagination
              currentPage={currentPage}
              pagesCount={pagesCount}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
          </>
        )}
      </main>
    </>
  );
};
export default App;
