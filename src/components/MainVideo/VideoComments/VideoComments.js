import { useState, useEffect } from "react";
import CommentDetail from "./CommentDetail/CommentDetail";
import {
	getMainVideo,
	postComment,
} from "../../../utils/apiMethods/brainflix-api";
import "./VideoComments.scss";

function VideoComments({ videoId, comments, setMainVideo }) {
	const [user, setUser] = useState("");
	const [newComment, setNewComment] = useState("");

	useEffect(() => {
		setUser("Tonie Opara");
	}, []);

	const handleCommentChange = (event) => {
		setNewComment(event.target.value);
	};
	const handleCommentPost = async (event) => {
		event.preventDefault();
		await postComment(videoId, user, newComment);
		const mainVideo = await getMainVideo(videoId);
		setMainVideo(mainVideo);
		setNewComment("");
	};

	return (
		<>
			<section className="main-video__form-container">
				<div className="main-video__form-wrapper">
					<div className="main-video__form-avatar avatar"></div>
					<form className="main-video__form" onSubmit={handleCommentPost}>
						<label className="main-video__form-label form-label">
							JOIN THE CONVERSATION
							<textarea
								onChange={handleCommentChange}
								className="main-video__form-text form-long-text"
								type="text"
								name="comment"
								id="comment"
								placeholder="Add a new comment"
								value={newComment}
								required></textarea>
						</label>

						<button className="main-video__form-btn btn" type="submit">
							COMMENT
						</button>
					</form>
				</div>
			</section>
			<section className="main-video__comments-container">
				{comments?.map((comment) => (
					<CommentDetail
						key={comment.id}
						comment={comment}
						videoId={videoId}
						setMainVideo={setMainVideo}
					/>
				))}
			</section>
		</>
	);
}

export default VideoComments;
