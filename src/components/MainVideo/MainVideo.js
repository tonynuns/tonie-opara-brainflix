import viewsIcon from "../../assets/images/icons/views.svg";
import likesIcon from "../../assets/images/icons/likes.svg";
import formatDate from "../../helperFunctions/formatDate";
import "./MainVideo.scss";

function MainVideo({ mainVideo }) {
	return (
		<main className="main-video">
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
					{mainVideo.comments.length} Comments
				</p>
			</section>
			<section className="main-video__form-container">
				<h1 className="main-video__form-heading">JOIN THE CONVERSATION</h1>
				<div className="main-video__form-wrapper">
					<div className="main-video__form-avatar avatar"></div>
					<form className="main-video__form">
						<textarea
							className="main-video__form-text"
							type="text"
							name="comment"
							id="comment"
							placeholder="Add a new comment"
							required></textarea>
						<button className="main-video__form-btn btn" type="submit">
							COMMENT
						</button>
					</form>
				</div>
			</section>
			<section className="main-video__comments-container">
				{mainVideo.comments.map((comment) => (
					<div key={comment.id} class="main-video__comment">
						<div class="main-video__comment-avatar avatar"></div>
						<div class="main-video__comment-text-wrapper">
							<h3 class="main-video__comment-name">{comment.name}</h3>
							<h3 class="main-video__comment-date">
								{formatDate(comment.timestamp)}
							</h3>
							<p class="main-video__comment-text">{comment.comment}</p>
						</div>
					</div>
				))}
			</section>
		</main>
	);
}

export default MainVideo;
