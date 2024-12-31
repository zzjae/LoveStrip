import useReview from '@/components/hotel/hooks/useReview';
import Button from '@/components/shared/Button';
import Flex from '@/components/shared/Flex';
import ListRow from '@/components/shared/ListRow';
import Spacing from '@/components/shared/Spacing';
import Text from '@/components/shared/Text';
import TextField from '@/components/shared/TextField';
import useUser from '@/hooks/auth/useUser';
import { format } from 'date-fns';
import { ChangeEvent, useCallback, useState } from 'react';

function Review({ hotelId }: { hotelId: string }) {
  const { data: reviews, isLoading, write, remove } = useReview({ hotelId });

  const user = useUser();

  const [text, setText] = useState('');

  const reviewRows = useCallback(() => {
    if (reviews?.length === 0) {
      return (
        <Flex direction="column" align="center" style={{ margin: '40px 0' }}>
          <img
            src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_rate_review_48px-64.png"
            alt=""
          />
          <Spacing size={10} />
          <Text typography="t6">
            아직 작성된 리뷰가 없습니다. 첫 리뷰를 작성해 보세요
          </Text>
        </Flex>
      );
    }

    return (
      <ul>
        {reviews?.map((review) => (
          <ListRow
            key={review.id}
            left={
              review.user.photoUrl != null ? (
                <img src={review.user.photoUrl} alt="" width={40} height={40} />
              ) : null
            }
            contents={
              <ListRow.Texts
                title={review.text}
                subTitle={format(review.createdAt, 'yyyy-MM-dd')}
              />
            }
            right={
              review.userId === user?.uid ? (
                <Button
                  onClick={() => {
                    remove({ reviewId: review.id, hotelId: review.hotelId });
                  }}
                >
                  삭제
                </Button>
              ) : null
            }
          />
        ))}
      </ul>
    );
  }, [reviews, user, remove]);

  const handleTextChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);

  if (isLoading === true) {
    return null;
  }

  return (
    <div style={{ margin: '40px 0' }}>
      <Text bold={true} typography="t4" style={{ padding: '0 24px' }}>
        리뷰
      </Text>
      <Spacing size={16} />
      {reviewRows()}
      {user != null ? (
        <div style={{ padding: '0 24px' }}>
          <TextField value={text} onChange={handleTextChange} />
          <Spacing size={6} />
          <Flex justify="flex-end">
            <Button
              disabled={text === ''}
              onClick={async () => {
                const success = await write(text);
                if (success === true) {
                  setText('');
                }
              }}
            >
              작성
            </Button>
          </Flex>
        </div>
      ) : null}
    </div>
  );
}

export default Review;
