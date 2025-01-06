import { parse } from 'qs';
import { useEffect } from 'react';
import useReservation from '@/components/reservation/hooks/useReservation';
import Summary from '@/components/reservation/Summary';
import Spacing from '@/components/shared/Spacing';
import Form from '@/components/reservation/Form';
import addDelimiter from '@/utils/addDelimiter';
import useUser from '@/hooks/auth/useUser';
import { useNavigate } from 'react-router-dom';

function ReservationPage() {
  const navigate = useNavigate();
  const user = useUser();

  const { startDate, endDate, nights, roomId, hotelId } = parse(
    window.location.search,
    { ignoreQueryPrefix: true },
  ) as {
    startDate: string;
    endDate: string;
    nights: string;
    roomId: string;
    hotelId: string;
  };

  useEffect(() => {
    if (
      [user, startDate, endDate, nights, roomId, hotelId].some((param) => {
        return param == null;
      })
    ) {
      window.history.back();
    }
  }, [user, startDate, endDate, nights, roomId, hotelId]);

  const { data, isLoading, makeReservation } = useReservation({
    hotelId,
    roomId,
  });

  if (data == null || isLoading === true) {
    return null;
  }

  const { hotel, room } = data;

  const handleSubmit = async (formValues: { [key: string]: string }) => {
    const newReservation = {
      userId: user?.uid as string,
      hotelId,
      roomId,
      startDate,
      endDate,
      price: room.price * Number(nights),
      formValues,
    };

    await makeReservation(newReservation);

    navigate(`/reservation/done?hotelName=${hotel.name}`);
  };

  const buttonLabel = `${nights}박 ${addDelimiter(room.price * Number(nights))}원 예약하기`;

  return (
    <div>
      <Summary
        hotelName={hotel.name}
        room={room}
        startDate={startDate}
        endDate={endDate}
        nights={nights}
      />
      <Spacing size={8} backgroundColor="gray100" />
      <Form
        forms={hotel.forms}
        onSubmit={handleSubmit}
        buttonLabel={buttonLabel}
      />
    </div>
  );
}

export default ReservationPage;
