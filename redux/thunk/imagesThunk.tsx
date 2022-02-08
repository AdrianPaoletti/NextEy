import axios from "axios";
import { Dispatch } from "react";
import { loadImagesAction } from "../actions/actionsCreator";
import { ILoadImagesAction } from "../../types/actionsInterface";

const url: string = "https://jsonplaceholder.typicode.com/photos";

export const loadImagesThunk = () => {
  return async (dispatch: Dispatch<ILoadImagesAction>) => {
    try {
      const images = await axios.get(url);
      if (images.status === 200) {
        dispatch(loadImagesAction(images.data));
      }
    } catch (error) {
      return error;
    }
  };
};
