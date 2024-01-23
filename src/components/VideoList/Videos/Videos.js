import "./Videos.scss";

function Videos(props) {
	return (
		<div className="videos">
			<div className="videos__img-wrapper">
				<img
					onClick={(event) => props.clickHandler(event)}
					className="videos__img"
					id={props.id}
					src={props.image}
					alt="Video Thumbnail"></img>
			</div>
			<div className="videos__text-wrapper">
				<h1 className="videos__title">{props.title}</h1>
				<p className="videos__channel">{props.channel}</p>
			</div>
		</div>
	);
}

export default Videos;
