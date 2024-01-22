import "./Comments.scss";

function Comments(props) {
	return (
		<div class="comments">
			<div class="comments__avatar avatar"></div>
			<div class="comments__text-wrapper">
				<h3 class="comments__name">{props.name}</h3>
				<h3 class="comments__date">{props.date}</h3>
				<p class="comments__text">{props.comment}</p>
			</div>
		</div>
	);
}

export default Comments;
