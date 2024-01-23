import Videos from "./Videos/Videos";
import "./VideoList.scss";

function VideoList(props) {
	return (
		<div className="video-list">
			<h1 className="video-list__heading">NEXT VIDEOS</h1>
			{props.videoList
				.filter((videoList) => videoList.id !== props.currentVideoObj.id)
				.map((video) => (
					<Videos
						id={video.id}
						image={video.image}
						title={video.title}
						channel={video.channel}
						clickHandler={props.clickHandler}
					/>
				))}
		</div>
	);
}

export default VideoList;
