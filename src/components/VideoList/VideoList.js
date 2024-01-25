import Videos from "./Videos/Videos";
import "./VideoList.scss";

function VideoList(props) {
	return (
		<section className="video-list">
			<h1 className="video-list__heading">NEXT VIDEOS</h1>
			{props.sideVideosList
				.filter((sideVideo) => sideVideo.id !== props.mainVideoObj.id)
				.map((video) => (
					<Videos
						id={video.id}
						image={video.image}
						title={video.title}
						channel={video.channel}
						clickHandler={props.clickHandler}
					/>
				))}
		</section>
	);
}

export default VideoList;
