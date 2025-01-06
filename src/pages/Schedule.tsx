import FixedBottomButton from '@/components/shared/FixedBottonButton';
import RangePicker from '@/components/shared/RangePicker';
import qs from 'qs';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SchedulePage() {
  const navigate = useNavigate();

  const { roomId = '', hotelId = '' } = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  }) as { roomId: string; hotelId: string };

  const [selectedDate, setSelectedDate] = useState<{
    startDate?: string;
    endDate?: string;
    nights: number;
  }>({
    startDate: undefined,
    endDate: undefined,
    nights: 0,
  });

  useEffect(() => {
    if (roomId === '' || hotelId === '') {
      window.history.back();
    }
  }, [roomId, hotelId]);

  const 제출가능한가 =
    selectedDate.startDate != null && selectedDate.endDate != null;

  const buttonLabel = 제출가능한가
    ? `${selectedDate.startDate} - ${selectedDate.endDate} (${selectedDate.nights}박)`
    : '예약날짜를 선택해 주세요';

  const moveToReservationPage = () => {
    const params = qs.stringify(
      {
        hotelId,
        roomId,
        ...selectedDate,
      },
      { addQueryPrefix: true },
    );

    navigate(`/reservation${params}`);
  };

  return (
    <div>
      <RangePicker
        startDate={selectedDate.startDate}
        endDate={selectedDate.endDate}
        onChange={(dateRange) => {
          setSelectedDate({
            startDate: dateRange.from,
            endDate: dateRange.to,
            nights: dateRange.nights,
          });
        }}
      />
      <FixedBottomButton
        label={buttonLabel}
        disabled={제출가능한가 === false}
        onClick={moveToReservationPage}
      />
    </div>
  );
}

export default SchedulePage;
