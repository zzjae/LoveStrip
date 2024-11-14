// 호텔에 대한 데이터를 가져오는 곳
import { getHotels } from '@remote/hotel';
import { useCallback } from 'react';
import { useInfiniteQuery } from 'react-query'; //인피니트 쿼리 사용

function useHotels() {
  const {
    data,
    hasNextPage = false,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(['hotels'], ({ pageParam }) => getHotels(pageParam), {
    getNextPageParam: (snapshot) => {
      return snapshot.lastVisible;
    },
  }); //첫번째는 키값 두번째는 패치함수

  //다음페이지 호출 가능 여부
  const loadMore = useCallback(() => {
    if (hasNextPage === false || isFetching) {
      //다음페이지가 없거나 패칭 중이면
      return; //null
    }
    //다음 페이지가 있으면 다음 페이지 패치
    fetchNextPage();
  }, [fetchNextPage, hasNextPage, isFetching]);

  const hotels = data?.pages.map(({ items }) => items).flat(); //뽑아온 아이템들을 원하는 형태로 flat하게 변경

  return { data: hotels, loadMore, isFetching, hasNextPage };
}

export default useHotels;
