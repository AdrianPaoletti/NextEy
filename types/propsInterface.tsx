import { IImage } from "./imageInterface";

export interface IHomeProps {
  images?: Array<IImage>;
}

export interface IImageCardProps {
  image: IImage;
}
