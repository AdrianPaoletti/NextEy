import { IAction } from "../../types/actionsInterface";
import { IImage } from "../../types/imageInterface";
import actionTypes from "../actions/actionTypes";

const imagesReducer = (images: Array<IImage> = [], action: IAction) => {
  let newImages;
  switch (action.type) {
    case actionTypes.loadImages:
      newImages = [...action.images];
      break;
    default:
      newImages = images;
  }
  return newImages;
};

export default imagesReducer;
