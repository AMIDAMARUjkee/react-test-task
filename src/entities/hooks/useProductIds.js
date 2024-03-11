import { useQuery } from '@tanstack/react-query';
import { apiProducts } from '../../shared/api/apiProducts';

const config = { refetchOnWindowFocus: false, refetchOnReconnect: false, refetchOnMount: false };

export const useProductIds = (page, limit = 50) => {
  const {
    data: productIds,
    isLoading: isLoadingProductIds,

    isSuccess: isSuccessProductIds,
    isError: isErrorProductIds,
  } = useQuery({
    ...config,
    queryKey: ['get_ids'],
    queryFn: () =>
      apiProducts({
        action: 'get_ids',
        params: { offset: 0 },
      }).then((data) => [...new Set(data.data.result)]),
  });

  const {
    data: productItems,
    isLoading: isLoadingProductItems,
    isError: isErrorProductItems,
  } = useQuery({
    ...config,
    enabled: isSuccessProductIds,
    queryKey: ['get_items', limit, page],
    queryFn: () =>
      apiProducts({
        action: 'get_items',
        params: { ids: productIds.slice((page - 1) * limit, page * limit) },
      }).then((data) => {
        const uniqueIds = {};
        const items = data.data.result.filter((item) => {
          if (!uniqueIds[item.id]) {
            uniqueIds[item.id] = true;
            return true;
          }
          return false;
        });

        return items;
      }),
  });

  return {
    productItems,
    isLoadingProductIds,
    isLoadingProductItems,
    isError: isErrorProductIds || isErrorProductItems,
    pagesCount: isSuccessProductIds ? Math.ceil(productIds.length / limit) : undefined,
  };
};
