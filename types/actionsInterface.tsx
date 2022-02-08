import { IImage } from "./imageInterface";

export interface IActionTypes {
  loadImages: string;
}

export interface IAction {
  type: string;
  images: Array<IImage>;
}

export interface ILoadImagesAction {
  type: IActionTypes["loadImages"];
  images: Array<IImage>;
}
