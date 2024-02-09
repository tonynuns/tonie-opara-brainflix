import "./UploadVideo.scss";
import thumbnail from "../../assets/images/images/Upload-video-preview.jpg";

function UploadVideo() {
	return (
		<main className="upload-video">
			<div className="upload-video__container">
				<h1 className="upload-video__header">Upload Video</h1>
				<div className="upload-video__thumbnail-form-wrapper">
					<div className="upload-video__thumbnail-wrapper">
						<p className="upload-video__title form-label">VIDEO THUMBNAIL</p>
						<img
							className="upload-video__thumbnail"
							src={thumbnail}
							alt="Thumbnail"
						/>
					</div>
					<form className="upload-video__form">
						<label className="upload-video__form-label form-label">
							TITLE YOUR VIDEO
							<br />
							<input
								className="upload-video__form-input form-text"
								type="text"
								name="title"
								placeholder="Add a title to your video"
								required></input>
						</label>
						<br />
						<label className="upload-video__form-label form-label">
							ADD A VIDEO DESCRIPTION
							<br />
							<textarea
								className="upload-video__form-input-long form-long-text"
								type="text"
								name="description"
								placeholder="Add a description to your video"
								required></textarea>
						</label>
						<div className="upload-video__form-btn-wrapper">
							<button className="upload-video__form-btn btn" type="submit">
								PUBLISH
							</button>
							<p className="upload-video__form-cancel">CANCEL</p>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
}

export default UploadVideo;
