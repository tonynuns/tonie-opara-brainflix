import CommentDetail from "./CommentDetail/CommentDetail";
import "./VideoComments.scss";

function VideoComments({ comments }) {
	return (
		<>
			<section className="main-video__form-container">
				{/* <h1 className="main-video__form-heading">JOIN THE CONVERSATION</h1> */}
				<div className="main-video__form-wrapper">
					<div className="main-video__form-avatar avatar"></div>
					<form className="main-video__form">
						<label className="main-video__form-label form-label">
							JOIN THE CONVERSATION
							<textarea
								className="main-video__form-text form-long-text"
								type="text"
								name="comment"
								id="comment"
								placeholder="Add a new comment"
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
