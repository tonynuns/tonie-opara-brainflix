import viewsIcon from "../../../assets/images/icons/views.svg";
import likesIcon from "../../../assets/images/icons/likes.svg";
import formatDate from "../../../utils/helperFunctions/formatDate";
import "./VideoDescription.scss";

function VideoDescription({ mainVideo }) {
	return (
		<>
			<div className="main-video__video-wrapper">
				<video
					className="main-video__video"
					controls
					src={mainVideo.video}
					poster={mainVideo.image}></video>
			</div>
			<section className="main-video__desc">
				<h1 className="main-video__desc-title">{mainVideo.title}</h1>
				<div className="main-video__desc-info-wrapper">
					<div className="main-video__desc-channel-date-wrapper">
						<p className="main-video__desc-channel">By {mainVideo.channel}</p>
						<p className="main-video__desc-date">
							{formatDate(mainVideo.timestamp)}
						</p>
					</div>
					<div className="main-video__desc-views-likes-wrapper">
						<div className="main-video__desc-views">
							<img
								className="main-video__desc-views-icon"
								src={viewsIcon}
								alt="Views Icon"
							/>
							<p className="main-video__desc-views-count">{mainVideo.views}</p>
						</div>
						<div className="main-video__desc-likes">
							<img
								className="main-video__desc-likes-icon"
								src={likesIcon}
								alt="Likes Icon"
							/>
							<p className="main-video__desc-likes-count">{mainVideo.likes}</p>
						</div>
					</div>
				</div>
				<p className="main-video__desc-text">{mainVideo.description}</p>
				<p className="main-video__desc-comment-count">
					{mainVideo.comments && mainVideo.comments.length} Comments
				</p>
			</section>
		</>
	);
}

export default VideoDescription;
