import axios from "axios";
const apiKey = "980a73a9-10b8-48ab-a4db-6198b6c8c4c2";
const apiBaseUrl = "https://project-2-api.herokuapp.com";

const getMainVideo = async (id) => {
	try {
		const response = await axios.get(
			`${apiBaseUrl}/videos/${id}?api_key=${apiKey}`
		);
		return response.data;
	} catch (error) {
		console.log(
			`Failed to get Main Video from back-end API with error message: ${error}`
		);
	}
};

const getSideVideos = async () => {
	try {
		const response = await axios.get(`${apiBaseUrl}/videos?api_key=${apiKey}`);
		return response.data;
	} catch (error) {
		console.log(
			`Failed to get Side Videos from back-end API with error message: ${error}`
		);
	}
};

export { getMainVideo, getSideVideos };
