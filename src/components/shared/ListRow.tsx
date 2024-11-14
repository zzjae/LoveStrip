import { css, SerializedStyles } from '@emotion/react';

import Flex from './Flex';
import Text from './Text';
import Skeleton from '@shared/Skeleton';
import Spacing from '@/components/shared/Spacing';

interface ListRowProps {
  left?: React.ReactNode;
  contents: React.ReactNode;
  right?: React.ReactNode;
  withArrow?: boolean;
  onClick?: () => void;
  as?: 'div' | 'li';
  style?: SerializedStyles;
}

function ListRow({
  as = 'li',
  left,
  contents,
  right,
  withArrow,
  onClick,
  style,
}: ListRowProps) {
  return (
    <Flex
      as={as}
      css={[listRowContainerStyles, style]}
      onClick={onClick}
      align="center"
    >
      {left && <Flex css={listRowLeftStyles}>{left}</Flex>}
      <Flex css={listRowContentsStyles}>{contents}</Flex>
      {right && <Flex>{right}</Flex>}
      {withArrow ? <IconArrowRight /> : null}
    </Flex>
  );
}

const listRowContainerStyles = css`
  padding: 8px 24px;
`;

const listRowLeftStyles = css`
  margin-right: 14px;
`;

const listRowContentsStyles = css`
  flex: 1;
`;

function ListRowTexts({
  title,
  subTitle,
}: {
  title: React.ReactNode;
  subTitle: React.ReactNode;
}) {
  return (
    <Flex direction="column">
      <Text bold={true}>{title}</Text>
      <Text typography="t7">{subTitle}</Text>
    </Flex>
  );
}

function ListRowSkeleton() {
  return (
    <Flex as="li" css={listRowContainerStyles} align="center">
      <Flex css={listRowLeftStyles}></Flex>
      <Flex css={listRowContentsStyles}>
        <ListRow.Texts
          title={
            <>
              <Skeleton width={67} height={23} />
              <Spacing size={2} />
            </>
          }
          subTitle={<Skeleton width={85} height={20} />}
        />
      </Flex>
      <IconArrowRight />
    </Flex>
  );
}

function IconArrowRight() {
  return (
    <svg
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      width={20}
      height={20}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
    </svg>
  );
}

ListRow.Texts = ListRowTexts;
ListRow.Skeleton = ListRowSkeleton;
export default ListRow;
