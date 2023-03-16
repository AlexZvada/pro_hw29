import { useEffect, useState } from "react";
import Button from "./Button";

const Photos = () => {
  const [active, setActive] = useState(false);
  const [photos, setPhotos] = useState();

  const toggle = () => setActive(!active);
  const renderPhotos = () => {
    return photos.map(({ url, id }) => {
      return <img src={url} alt="" key={id} />;
    });
  };

  useEffect(() => {
    const reqest = async () => {
      const responce = await fetch(
        "https://jsonplaceholder.typicode.com/albums/1/photos"
      );
      const list = await responce.json();
      setPhotos(list);
    };
    reqest();
  }, []);
  return (
    <div className="photos">
      <Button onClick={toggle}>
        {!active ? "Show Images" : "Hide images"}
      </Button>
      <div>{active ? renderPhotos() : null}</div>
    </div>
  );
};

export default Photos;
