import viewsIcon from "../../../assets/images/icons/views.svg";
import likesIcon from "../../../assets/images/icons/likes.svg";
import "./VideoDescription.scss";
import formatDate from "../../../helperFunctions/formatDate";

function VideoDescription({ mainVideo }) {
	const date = formatDate(mainVideo.timestamp);
	const commentCount = mainVideo.comments.length;

	return (
		<section className="video-desc">
			<h1 className="video-desc__title">{mainVideo.title}</h1>
			<div className="video-desc__info-wrapper">
				<div className="video-desc__channel-date-wrapper">
					<p className="video-desc__channel">By {mainVideo.channel}</p>
					<p className="video-desc__date">{date}</p>
				</div>
				<div className="video-desc__views-likes-wrapper">
					<div className="video-desc__views">
						<img
							className="video-desc__views-icon"
							src={viewsIcon}
							alt="Views Icon"
						/>
						<p className="video-desc__views-count">{mainVideo.views}</p>
					</div>
					<div className="video-desc__likes">
						<img
							className="video-desc__likes-icon"
							src={likesIcon}
							alt="Likes Icon"
						/>
						<p className="video-desc__likes-count">{mainVideo.likes}</p>
					</div>
				</div>
			</div>
			<p className="video-desc__text">{mainVideo.description}</p>
			<p className="video-desc__comment-count">{commentCount} Comments</p>
		</section>
	);
}

export default VideoDescription;
