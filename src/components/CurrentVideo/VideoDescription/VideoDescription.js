import viewsIcon from "../../../assets/images/icons/views.svg";
import likesIcon from "../../../assets/images/icons/likes.svg";
import "./VideoDescription.scss";
import formatDate from "../../../helperFunctions/formatDate";

function VideoDescription({ ...mainVideoObj }) {
	const date = formatDate(mainVideoObj.timestamp);
	const commentCount = mainVideoObj.comments.length;

	return (
		<section className="video-desc">
			<h1 className="video-desc__title">{mainVideoObj.title}</h1>
			<div className="video-desc__info-wrapper">
				<div className="video-desc__channel-date-wrapper">
					<p className="video-desc__channel">By {mainVideoObj.channel}</p>
					<p className="video-desc__date">{date}</p>
				</div>
				<div className="video-desc__views-likes-wrapper">
					<div className="video-desc__views">
						<img
							className="video-desc__views-icon"
							src={viewsIcon}
							alt="Views Icon"
						/>
						<p className="video-desc__views-count">{mainVideoObj.views}</p>
					</div>
					<div className="video-desc__likes">
						<img
							className="video-desc__likes-icon"
							src={likesIcon}
							alt="Likes Icon"
						/>
						<p className="video-desc__likes-count">{mainVideoObj.likes}</p>
					</div>
				</div>
			</div>
			<p className="video-desc__text">{mainVideoObj.description}</p>
			<p className="video-desc__comment-count">{commentCount} Comments</p>
		</section>
	);
}

export default VideoDescription;
