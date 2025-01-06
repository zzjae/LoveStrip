import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { css } from '@emotion/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Carousel({ images }: { images: string[] }) {
  return (
    <div>
      <Swiper css={ContainerStyles} spaceBetween={8}>
        {images.map((imageUrl, idx) => (
          <SwiperSlide key={imageUrl}>
            {/* <img
              src={imageUrl}
              alt={`${idx + 1}번째 호텔의 이미지`}
              css={imageStyles}
            /> */}
            <LazyLoadImage
              src={imageUrl}
              alt={`${idx + 1}번째 호텔의 이미지`}
              css={imageStyles}
              height={300}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const ContainerStyles = css`
  padding: 0 24px;
  height: 300px;
`;

const imageStyles = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;
export default Carousel;
