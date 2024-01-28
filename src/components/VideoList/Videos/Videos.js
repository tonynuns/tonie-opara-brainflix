import "./Videos.scss";

function Videos({ id, image, title, channel, handleVideoClick }) {
	return (
		<div onClick={() => handleVideoClick(id)} className="videos">
			<div className="videos__img-wrapper">
				<img className="videos__img" src={image} alt="Video Thumbnail"></img>
			</div>
			<div className="videos__text-wrapper">
				<h1 className="videos__title">{title}</h1>
				<p className="videos__channel">{channel}</p>
			</div>
		</div>
	);
}

export default Videos;
