import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';

export const resizeImage = async (imageUri, width = 120, height = 120) => {
  const resizeResult = await manipulateAsync(
    imageUri,
    [{ resize: { width, height } }],
    { compress: 0.7, format: SaveFormat.JPEG }
  );
  return resizeResult.uri;
};
