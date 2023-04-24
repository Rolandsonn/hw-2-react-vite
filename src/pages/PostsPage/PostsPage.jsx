import { useState, useEffect } from "react";

import { API } from "../../api/axios";
import Post from "../../components/post/Post";
import { useNavigate } from "react-router-dom";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  const handleDeletePost = async (id) => {
    if (confirm(`Are you sure you want to delete post  №${id}?`)) {
      try {
        await API.delete(`posts/${id}`).then((res) => {
          console.log(res);
          const postsElem = posts.filter((item) => item.id !== id);
          setPosts(postsElem);
        });
      } catch (error) {
        console.log(error + "Delete Post failed PostItem");
      }
    }
  };

  const fetchPosts = async () => {
    try {
      await API.get("posts").then((resp) => setPosts(resp.data));
    } catch (error) {
      console.log(error + "Fetching posts failed PostPage");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div className="container">
        {posts.length > 0 ? (
          <Post posts={posts} handleDeletePost={handleDeletePost} />
        ) : (
          "loading posts...."
        )}
      </div>
    </>
  );
}
