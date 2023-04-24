import { Link, NavLink } from "react-router-dom";
import styles from "./PostItem.module.css";

const PostItem = ({ title, id, handleDeletePost }) => {
  return (
    <>
      <div className={styles.container}>
        <button
          className="delete-btn"
          onClick={() => handleDeletePost(id, title)}
        >
          delete
        </button>
        <Link to={`${id}`}>
          <h2>{title}</h2>
        </Link>
      </div>
    </>
  );
};

export default PostItem;
