import Comments from "./Comments/Comments";
import "./CommentList.scss";

function CommentList({ comments }) {
	return (
		<section className="comment-list">
			{comments.map((comment) => (
				<Comments
					name={comment.name}
					date={new Date(comment.timestamp).toLocaleDateString("en-US", {
						year: "numeric",
						month: "2-digit",
						day: "2-digit",
					})}
					comment={comment.comment}
				/>
			))}
		</section>
	);
}

export default CommentList;
