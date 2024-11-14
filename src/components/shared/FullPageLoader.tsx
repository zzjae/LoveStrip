import Flex from '@/components/shared/Flex';
import Text from '@/components/shared/Text';
import Spacing from '@/components/shared/Spacing';

function FullPageLoader({ message }: { message?: string }) {
  return (
    <Flex
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
      justify="center"
      align="center"
    >
      <Flex direction="column" align="center">
        <img
          src="https://cdn.pixaby.com/animation/2023/06/13/15/12/15-12-47-323_512.gif"
          alt=""
        ></img>
        {message != null ? (
          <>
            <Spacing size={120} />
            <Text typography="t4" bold={true}>
              {message}
            </Text>
          </>
        ) : null}
      </Flex>
    </Flex>
  );
}

export default FullPageLoader;
