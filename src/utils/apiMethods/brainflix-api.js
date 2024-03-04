import axios from "axios";

const apiBaseUrl = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

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

const postVideo = async (title, description) => {
	try {
		const response = await axios.post(
			`${apiBaseUrl}/videos?api_key=${apiKey}`,
			{
				title,
				description,
				channel: "Tonie Opara",
				image: "/images/newimage.jpeg",
				duration: "6.48",
				video: "/videos/samplevideo.mp4",
			}
		);
		return response.data;
	} catch (error) {
		console.log(
			`Failed to post video to back-end API with error message: ${error}`
		);
	}
};

const postComment = async (videoId, name, comment) => {
	try {
		const response = await axios.post(
			`${apiBaseUrl}/videos/${videoId}/comments?api_key=${apiKey}`,
			{
				name,
				comment,
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

const likeVideo = async (videoId) => {
	try {
		const response = await axios.put(
			`${apiBaseUrl}/videos/${videoId}/likes?api_key=${apiKey}`
		);
		return response.data;
	} catch (error) {
		console.log(
			`Failed to increase count of video likes from back-end API with error message: ${error}`
		);
	}
};

export {
	getMainVideo,
	getSideVideos,
	postVideo,
	postComment,
	deleteComment,
	likeVideo,
};
