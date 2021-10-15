import axios from "axios";

const fetchImages = async (name, page) => {
  const URL = "https://pixabay.com/api";
  const API_KEY = "23024944-26babadae282d834971f263ad";

  const response = await axios.get(
    `${URL}/?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};

export default fetchImages;
