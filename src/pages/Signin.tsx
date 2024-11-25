import Spacing from '@shared/Spacing';
import Flex from '@shared/Flex';
import Button from '@shared/Button';

import useGoogleSingin from '@/hooks/useGoogleSignin';

function SinginPage() {
  const { signin } = useGoogleSingin();
  return (
    <Flex direction="column" align="center" style={{ padding: 24 }}>
      <Spacing size={100} />
      <img
        src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_send-64.png"
        alt=""
        width={120}
        height={120}
      />
      <Spacing size={60} />
      <Button size="medium" onClick={signin}>
        <Flex align="center" justify="center">
          <img
            src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-512.png"
            alt=""
            width={20}
            height={20}
          />
          <Spacing direction="horizontal" size={4} />
          Google 로그인
        </Flex>
      </Button>
    </Flex>
  );
}

export default SinginPage;
