import ListRow from '@/components/shared/ListRow';

import useReservations from '@/components/reservation-list/hooks/useReservations';

function ReservationList() {
  const { data, isLoading } = useReservations();

  if (data == null || isLoading === true) {
    return null;
  }
  return (
    <div>
      {data.map(({ hotel, reservation }) => (
        <ListRow
          key={reservation.id}
          left={
            <img
              src={hotel.mainImageUrl}
              alt={`${hotel.name} 이미지`}
              width={80}
              height={80}
            />
          }
          contents={
            <ListRow.Texts
              title={hotel.name}
              subTitle={`${reservation.startDate} ~ ${reservation.endDate}`}
            />
          }
        />
      ))}
    </div>
  );
}

export default ReservationList;
