import viewsIcon from "../../../assets/images/icons/views.svg";
import likesIcon from "../../../assets/images/icons/likes.svg";
import "./VideoDescription.scss";

function VideoDescription({ ...currentVideoObj }) {
	const date = new Date(currentVideoObj.timestamp).toLocaleDateString("en-US", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	});
	const commentCount = currentVideoObj.comments.length;

	return (
		<div className="video-desc">
			<h1 className="video-desc__title">{currentVideoObj.title}</h1>
			<div className="video-desc__info-wrapper">
				<div className="video-desc__channel-date-wrapper">
					<p className="video-desc__channel">By {currentVideoObj.channel}</p>
					<p className="video-desc__date">{date}</p>
				</div>
				<div className="video-desc__views-likes-wrapper">
					<div className="video-desc__views">
						<img
							className="video-desc__views-icon"
							src={viewsIcon}
							alt="Views Icon"
						/>
						<p className="video-desc__views-count">{currentVideoObj.views}</p>
					</div>
					<div className="video-desc__likes">
						<img
							className="video-desc__likes-icon"
							src={likesIcon}
							alt="Likes Icon"
						/>
						<p className="video-desc__likes-count">{currentVideoObj.likes}</p>
					</div>
				</div>
			</div>
			<p className="video-desc__text">{currentVideoObj.description}</p>
			<p className="video-desc__comment-count">{commentCount} Comments</p>
		</div>
	);
}

export default VideoDescription;
