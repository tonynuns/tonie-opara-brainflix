import json from "../../../data/video-details.json";
import viewsIcon from "../../../assets/images/icons/views.svg";
import likesIcon from "../../../assets/images/icons/likes.svg";
import "./VideoDescription.scss";

function VideoDescription() {
	const title = json[0].title;
	const channel = json[0].channel;
	const date = new Date(json[0].timestamp).toLocaleDateString("en-US", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	});
	const views = json[0].views;
	const likes = json[0].likes;
	const description = json[0].description;
	const commentCount = json[0].comments.length;

	return (
		<div className="video-desc">
			<h1 className="video-desc__title">{title}</h1>
			<div className="video-desc__info-wrapper">
				<div className="video-desc__channel-date-wrapper">
					<p className="video-desc__channel">By {channel}</p>
					<p className="video-desc__date">{date}</p>
				</div>
				<div className="video-desc__views-likes-wrapper">
					<div className="video-desc__views">
						<img
							className="video-desc__views-icon"
							src={viewsIcon}
							alt="Views Icon"
						/>
						<p className="video-desc__views-count">{views}</p>
					</div>
					<div className="video-desc__likes">
						<img
							className="video-desc__likes-icon"
							src={likesIcon}
							alt="Likes Icon"
						/>
						<p className="video-desc__likes-count">{likes}</p>
					</div>
				</div>
			</div>
			<p className="video-desc__text">{description}</p>
			<p className="video-desc__comment-count">{commentCount} Comments</p>
		</div>
	);
}

export default VideoDescription;
