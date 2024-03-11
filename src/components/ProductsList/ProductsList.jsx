import { ProductCard, ProductCardSkeleton } from '../../shared/UI/ProductCard';
import styles from './ProductsList.module.scss';

const ProductsList = ({ productItems, isLoadingProductItems }) => {
  return (
    <div className={styles.product__block}>
      {(() => {
        if (productItems && productItems.length > 0) {
          return productItems.map((item) => <ProductCard key={item.id} item={item} />);
        } else {
          return Array.from({ length: 50 }, (v, i, k) => (
            <ProductCardSkeleton key={'loading' + i} />
          ));
        }
      })()}
    </div>
  );
};

export default ProductsList;
