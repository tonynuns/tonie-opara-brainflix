import axios from "axios";
const apiKey = "980a73a9-10b8-48ab-a4db-6198b6c8c4c2";
const apiBaseUrl = "https://project-2-api.herokuapp.com";

const getMainVideo = async (videoId) => {
	try {
		const response = await axios.get(
			`${apiBaseUrl}/videos/${videoId}?api_key=${apiKey}`
		);
		response.data.comments.sort((a, b) => {
			return b.timestamp - a.timestamp;
		});
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

const postComment = async (videoId, name, comment) => {
	try {
		const response = await axios.post(
			`${apiBaseUrl}/videos/${videoId}/comments?api_key=${apiKey}`,
			{
				name: name,
				comment: comment,
			}
		);
		return response.data;
	} catch (error) {
		console.log(
			`Failed to post comment to back-end API with error message: ${error}`
		);
	}
};

const deleteComment = async (videoId, commentId) => {
	try {
		const response = await axios.delete(
			`${apiBaseUrl}/videos/${videoId}/comments/${commentId}?api_key=${apiKey}`
		);
		return response.data;
	} catch (error) {
		console.log(
			`Failed to delete comment from back-end API with error message: ${error}`
		);
	}
};

export { getMainVideo, getSideVideos, postComment, deleteComment };
