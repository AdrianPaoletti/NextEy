import type { NextPage } from "next";
import { GetStaticProps } from "next";
import axios from "axios";
import { IHomeProps } from "../types/propsInterface";
import { IImage } from "../types/imageInterface";
import ImageCard from "../components/ImageCard/ImageCard";
import styles from "./index.module.scss";
import { useState } from "react";

const Home: NextPage<IHomeProps> = ({ images }) => {
  const [imagesState, setImagesState] = useState(images);
  return (
    <>
      <h1 className={styles.image__title}>Images List</h1>
      <ul className={styles.image__list}>
        {images.map((image: IImage) => (
          <ImageCard image={image} />
        ))}
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apiURL = "https://jsonplaceholder.typicode.com/photos";
  const response = await axios.get(apiURL);
  const imagesList = response.data;
  return {
    props: {
      images: imagesList,
    },
    revalidate: 10,
  };
};

export default Home;
