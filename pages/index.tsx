import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Provider } from "react-redux";
import configureStore from "../redux/store";
import axios from "axios";

const store = configureStore();

const Home: NextPage = ({ images }: any) => {
  return (
    <Provider store={store}>
      <h1>Hola</h1>;
      {images.map((image: any) => (
        <p key={image.id}>{image.url}</p>
      ))}
    </Provider>
  );
};

export const getStaticProps = async () => {
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
