import { css } from '@emotion/react';

import { Hotel as HotelInter } from '@models/hotel';

import Flex from '@shared/Flex';
import ListRow from '@shared/ListRow';
import Text from '@shared/Text';
import Spacing from '@shared/Spacing';
import addDelimiter from '@utils/addDelimiter';

function Hotel({ hotel }: { hotel: HotelInter }) {
  return (
    <div>
      <ListRow
        contents={
          <Flex direction="column">
            <ListRow.Texts
              title={hotel.name}
              subTitle={hotel.comment}
            ></ListRow.Texts>
            <Spacing size={4} />
            <Text typography="t7" color="gray600">
              {hotel.starRating}성급
            </Text>
          </Flex>
        }
        right={
          <Flex direction="column" align="flex-end">
            <img src={hotel.mainImageUrl} alt="" css={imageStyles} />
            <Spacing size={8} />
            <Text bold={true} typography="t7">
              {addDelimiter(hotel.price)}원
            </Text>
          </Flex>
        }
        style={containerStyles}
      />
    </div>
  );
}

const containerStyles = css`
  align-items: flex-start;
`;

//이 코드를 직접 넣으면 리랜더링 할때마다 css를 새로 만듬
const imageStyles = css`
  width: 90px;
  height: 90px;
  border-radius: 8px;
  object-fit: cover;
  margin-left: 16px;
`;

export default Hotel;
