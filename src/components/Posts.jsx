import { useEffect, useState } from "react";
import Button from "./Button";

const Posts = () => {
  const [active, setActive] = useState(false);
  const [posts, setPosts] = useState();

  const toggle = () => setActive(!active);
  const renderPosts = () => {
    return (
      <div>
        {posts.map(({ title, body, id }) => (
          <div key={id}>
            <h1>{title}</h1>
            <p>{body}</p>
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    const reqest = async () => {
      const responce = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const list = await responce.json();
      setPosts(list);
    };
    reqest();
  }, []);
  return (
    <div className="posts">
      <Button onClick={toggle}>{!active ? "Show Posts" : "Hide posts"}</Button>
      <div>{active ? renderPosts() : null}</div>
    </div>
  );
};

export default Posts;
