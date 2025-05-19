import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const uploadImageAndPredict = async (image) => {
  const formData = new FormData();
  formData.append('image', image);
  return await axios.post(`${API_URL}/predict`, formData);
};
