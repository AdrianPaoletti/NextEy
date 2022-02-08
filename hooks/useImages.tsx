import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadImagesThunk } from "../redux/thunk/imagesThunk";

const useImages = () => {
  const dispatch = useDispatch();
  const images = useSelector(({ images }: any) => images);

  const loadImages = useCallback(() => {
    dispatch(loadImagesThunk());
  }, [dispatch]);

  return { loadImages, images };
};

export default useImages;
