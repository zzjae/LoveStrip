import {
  QuerySnapshot,
  collection,
  limit,
  getDocs,
  query,
  startAfter,
} from 'firebase/firestore';

import { COLLECTIONS } from '@/constants';
import { store } from './firebase';
import { Hotel } from '@models/hotel';
export async function getHotels(pageParams?: QuerySnapshot<Hotel>) {
  // pageParams가 없다면 첫번째 호출이므로 데이터를 가져옴
  // 최대 10개를 가져옴
  const hotelsQuery =
    pageParams == null
      ? query(collection(store, COLLECTIONS.HOTEL), limit(10))
      : query(
          collection(store, COLLECTIONS.HOTEL),
          startAfter(pageParams), //10개 이후부터
          limit(10), //10개
        );

  const hotelsSnapshot = await getDocs(hotelsQuery); //문서를 가져옴 getDocs는 비동기라 async/await

  const items = hotelsSnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as Hotel,
  );

  const lastVisible = hotelsSnapshot.docs[hotelsSnapshot.docs.length - 1];

  return {
    items,
    lastVisible,
  };
}
