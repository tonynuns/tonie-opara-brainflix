import "./CommentForm.scss";

function CommentForm() {
	return (
		<section className="comment-form">
			<h1 className="comment-form__heading">JOIN THE CONVERSATION</h1>
			<div className="comment-form__avatar-form-wrapper">
				<div className="comment-form__avatar avatar"></div>
				<form className="comment-form__form">
					<textarea
						className="comment-form__text"
						type="text"
						name="comment"
						id="comment"
						placeholder="Add a new comment"
						required></textarea>
					<button className="comment-form__btn btn" type="submit">
						COMMENT
					</button>
				</form>
			</div>
		</section>
	);
}

export default CommentForm;
