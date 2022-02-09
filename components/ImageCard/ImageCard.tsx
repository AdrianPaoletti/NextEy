import { IImageCardProps } from "../../types/propsInterface";
import styles from "./ImageCard.module.scss";

const ImageCard = ({ image }: IImageCardProps) => {
  return (
    <li className={styles.image__element} key={image.id}>
      <div className={styles.image__image_container}>
        <img
          src={image.thumbnailUrl}
          alt="picture"
          className={styles.image__image_thumbnail}
        />
      </div>
      <h3 className={styles.image__sub_title}>{image.title}</h3>
    </li>
  );
};

export default ImageCard;
