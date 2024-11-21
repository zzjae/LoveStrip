import { useCallback } from 'react';

interface shareProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonLabel: string;
}

function useShare() {
  //useCallback을 사용해 매번 함수가 재생성 되지 않도록
  const handleShare = useCallback(
    ({ title, description, imageUrl, buttonLabel }: shareProps) => {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title,
          description,
          imageUrl,
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: buttonLabel,
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    },
    [],
  );

  return handleShare;
}

export default useShare;
