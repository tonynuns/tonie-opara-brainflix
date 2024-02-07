import { Link } from "react-router-dom";
import "./VideoDetail.scss";

function VideoDetail({ id, image, title, channel }) {
	return (
		<div className="side-videos__video">
			<div className="side-videos__video-img-wrapper">
				<Link to={`/${id}`}>
					<img
						className="side-videos__video-img"
						src={image}
						alt="Video Thumbnail"></img>
				</Link>
			</div>
			<div className="side-videos__video-text-wrapper">
				<h1 className="side-videos__video-title">{title}</h1>
				<p className="side-videos__video-channel">{channel}</p>
			</div>
		</div>
	);
}

export default VideoDetail;
