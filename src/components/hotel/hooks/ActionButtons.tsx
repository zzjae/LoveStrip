import { css } from '@emotion/react';
import Flex from '@shared/Flex';
import Spacing from '@shared/Spacing';
import Text from '@shared/Text';

import useShare from '@/hooks/useShare';
import { Hotel } from '@models/hotel';

import { CopyToClipboard } from 'react-copy-to-clipboard';

function ActionButtons({ hotel }: { hotel: Hotel }) {
  const share = useShare();

  const { name, comment, mainImageUrl } = hotel;
  return (
    <Flex css={containerStyles}>
      <Button
        label="찜하기"
        onClick={() => {
          //TODO
        }}
        iconUrl="https://consent.cookiefirst.com/sites/iconfinder.com-a78e075e-557f-41cd-be61-cc12d6cc8be8/consent.js"
      />
      <Button
        label="공유하기"
        onClick={() => {
          share({
            title: name,
            description: comment,
            imageUrl: mainImageUrl,
            buttonLabel: 'Love Trip에서 보기',
          });
        }}
        iconUrl="https://cdn3.iconfinder.com/data/icons/social-network-flat-3/100/Kakao_Talk-64.png"
      />
      <CopyToClipboard
        text={window.location.href}
        onCopy={() => {
          alert('링크가 복사 되었습니다');
        }}
      >
        <Button
          label="링크복사"
          iconUrl="https://consent.cookiefirst.com/sites/iconfinder.com-a78e075e-557f-41cd-be61-cc12d6cc8be8/consent.js"
        />
      </CopyToClipboard>
    </Flex>
  );
}

function Button({
  label,
  iconUrl,
  onClick,
}: {
  label: string;
  iconUrl: string;
  onClick?: () => void;
}) {
  return (
    <Flex direction="column" align="center" onClick={onClick}>
      <img src={iconUrl} alt="" width={30} height={30} />
      <Spacing size={6} />
      <Text typography="t7">{label}</Text>
    </Flex>
  );
}

const containerStyles = css`
  padding: 24px;
  cursor: pointer;

  & * {
    flex: 1;
  }
`;
export default ActionButtons;
