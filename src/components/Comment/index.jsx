import { PostByCommentId } from "src/components/Post/PostByCommentId";

const { useComment } = require("src/hooks/useComment");

export const CommentComponent = () => {
  const { data, error, isLoading } = useComment();

  if (isLoading) {
    return <h2>Now Loading...</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h1>Comment Page</h1>
      <p>{data?.name}</p>
      <p>{data?.email}</p>
      <p>{data?.body}</p>
      <h2>元の記事</h2>
      <PostByCommentId id={data?.postId}/>
    </div>
  );
};