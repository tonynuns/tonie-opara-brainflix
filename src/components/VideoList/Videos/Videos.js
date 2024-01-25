import "./Videos.scss";

function Videos(props) {
	return (
		<div
			onClick={(event) => props.clickHandler(event)}
			className={`videos ${props.id}`}>
			<div className={`videos__img-wrapper ${props.id}`}>
				<img
					className={`videos__img ${props.id}`}
					src={props.image}
					alt="Video Thumbnail"></img>
			</div>
			<div className={`videos__text-wrapper ${props.id}`}>
				<h1 className={`videos__title ${props.id}`}>{props.title}</h1>
				<p className={`videos__channel ${props.id}`}>{props.channel}</p>
			</div>
		</div>
	);
}

export default Videos;
