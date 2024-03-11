import { Loading } from '../Loading/Loading';
import styles from './ProductCard.module.scss';

export const ProductCardSkeleton = () => {
  return (
    <div className={styles.product__card}>
      <Loading />
    </div>
  );
};
