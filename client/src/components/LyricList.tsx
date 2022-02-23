import { gql, useMutation } from "@apollo/client";

interface LyricListProps {
  lyrics: [
    {
      id: string;
      content: string;
      likes: number;
    }
  ];
}

const LIKE_LYRIC = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

const LyricList = ({ lyrics }: LyricListProps) => {
  const [likeLyric] = useMutation(LIKE_LYRIC);

  const onLike = (id: string, likes: number) => {
    likeLyric({
      variables: { id },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id,
          __typename: "LyricType",
          likes: likes + 1,
        },
      },
    });
  };

  return (
    <div>
      <ul className="collection">
        {lyrics.map(({ id, content, likes }) => (
          <li key={id} className="collection-item">
            {content}
            <div className="vote-box">
              <i className="material-icons" onClick={() => onLike(id, likes)}>
                thumb_up
              </i>
              {likes}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LyricList;
