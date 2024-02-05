import "./VideoDetail.scss";

function VideoDetail({ id, image, title, channel, handleVideoClick }) {
	return (
		<div onClick={() => handleVideoClick(id)} className="side-videos__video">
			<div className="side-videos__video-img-wrapper">
				<img
					className="side-videos__video-img"
					src={image}
					alt="Video Thumbnail"></img>
			</div>
			<div className="side-videos__video-text-wrapper">
				<h1 className="side-videos__video-title">{title}</h1>
				<p className="side-videos__video-channel">{channel}</p>
			</div>
		</div>
	);
}

export default VideoDetail;
