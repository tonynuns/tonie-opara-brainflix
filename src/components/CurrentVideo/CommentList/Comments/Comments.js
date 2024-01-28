import "./Comments.scss";

function Comments({ name, date, comment }) {
	return (
		<div class="comments">
			<div class="comments__avatar avatar"></div>
			<div class="comments__text-wrapper">
				<h3 class="comments__name">{name}</h3>
				<h3 class="comments__date">{date}</h3>
				<p class="comments__text">{comment}</p>
			</div>
		</div>
	);
}

export default Comments;
