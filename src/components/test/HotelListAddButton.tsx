import Button from '@shared/Button';
import { EVENTS, HOTEL, HOTEL_NAMES, IMAGES, ROOMS } from '@/mock/data';
import { store } from '@remote/firebase';
import { doc, collection, writeBatch } from 'firebase/firestore';
import { COLLECTIONS } from '@/constants';

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function HotelListAddButton() {
  const batch = writeBatch(store);

  const handleListAddButton = () => {
    const hotels = HOTEL_NAMES.map((hotelName, idx) => {
      return {
        name: hotelName,
        mainImageUrl: IMAGES[Math.floor(Math.random() * IMAGES.length)],
        images: IMAGES,
        price: random(130000, 200000),
        starRating: random(1, 5),
        ...HOTEL,
        ...(EVENTS[idx] != null && { events: EVENTS[idx] }),
      };
    });

    //계층구조 hotel->room
    hotels.forEach((hotel) => {
      const hotelDocRef = doc(collection(store, COLLECTIONS.HOTEL));

      batch.set(hotelDocRef, hotel);

      ROOMS.forEach((room) => {
        const subDocRef = doc(collection(hotelDocRef, COLLECTIONS.ROOM));
        batch.set(subDocRef, room);
      });
    });

    batch.commit();
  };

  return <Button onClick={handleListAddButton}>호텔 리스트 추가</Button>;
}

export default HotelListAddButton;
