import { useState } from "react";
import CommentDetail from "./CommentDetail/CommentDetail";
import "./VideoComments.scss";

function VideoComments({ comments }) {
	const [newComment, setNewComment] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		setNewComment("");
	};
	const handleCommentChange = (event) => {
		setNewComment(event.target.value);
	};

	return (
		<>
			<section className="main-video__form-container">
				<div className="main-video__form-wrapper">
					<div className="main-video__form-avatar avatar"></div>
					<form className="main-video__form" onSubmit={handleSubmit}>
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
				{comments &&
					comments.map((comment) => (
						<CommentDetail
							key={comment.id}
							name={comment.name}
							timestamp={comment.timestamp}
							comment={comment.comment}
						/>
					))}
			</section>
		</>
	);
}

export default VideoComments;
