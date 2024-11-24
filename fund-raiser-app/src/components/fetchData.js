import axios from 'axios';
const useFetchData = async () => {
   const apiUrl = 'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json';
    const data = await axios.get(apiUrl);
        return data;
}

export default useFetchData;