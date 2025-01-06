import { useParams } from 'react-router-dom';
import useHotel from '@components/hotel/hooks/useHotel';
import Top from '@shared/Top';
import Carousel from '@components/hotel/Carousel';
import Contents from '@components/hotel/Contents';
import Rooms from '@components/hotel/Rooms';
import RecommendHotels from '@components/hotel/RecommendHotels';
import ActionButtons from '@components/hotel/hooks/ActionButtons';
import Review from '@components/hotel/Review';
import ScrollProgressBar from '@/components/shared/ScrollProgressBar';
import { css } from '@emotion/react';

function HotelPage() {
  const { id } = useParams() as { id: string };

  const { isLoading, data } = useHotel({ id });

  if (data == null || isLoading) {
    return <div>Loading...</div>;
  }

  const { name, comment, images, contents, recommendHotels } = data;
  return (
    <div>
      <ScrollProgressBar style={ScrollProgressBarStyles} />
      <Top title={name} subTitle={comment} />
      <Carousel images={images} />
      <ActionButtons hotel={data} />
      <Rooms hotelId={id} />
      <Contents contents={contents} />
      <RecommendHotels recommendHotels={recommendHotels} />
      <Review hotelId={id} />
    </div>
  );
}

const ScrollProgressBarStyles = css`
  position: sticky;
  top: 64px;
  z-index: 2;
`;

export default HotelPage;
