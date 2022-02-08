import actionTypes from "./actionTypes";
import { IImage } from "../../types/imageInterface";

export const loadImagesAction = (images: Array<IImage>) => ({
  type: actionTypes.loadImages,
  images,
});
