import PostItem from "../PostItem";

const Post = ({ posts, handleDeletePost }) => {
  const postElem = posts.map((post) => (
    <PostItem key={post.id} {...post} handleDeletePost={handleDeletePost} />
  ));

  return (
    <>
      <ul>{postElem}</ul>
    </>
  );
};

export default Post;
