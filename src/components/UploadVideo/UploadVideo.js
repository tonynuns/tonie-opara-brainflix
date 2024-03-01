import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadVideo.scss";
import thumbnail from "../../assets/images/images/Upload-video-preview.jpg";

function UploadVideo() {
	const [videoTitle, setVideoTitle] = useState("");
	const [videoDescription, setVideoDescription] = useState("");
	const navigate = useNavigate();

	const handleTitleChange = (event) => {
		setVideoTitle(event.target.value);
	};
	const handleDescriptionChange = (event) => {
		setVideoDescription(event.target.value);
	};
	const handleVideoUpload = (event) => {
		event.preventDefault();
		alert("Video Upload Successful");
		navigate("/");
	};
	const handleCancel = () => {
		setVideoTitle("");
		setVideoDescription("");
		navigate("/");
	};

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
					<form className="upload-video__form" onSubmit={handleVideoUpload}>
						<label className="upload-video__form-label form-label">
							TITLE YOUR VIDEO
							<br />
							<input
								onChange={handleTitleChange}
								className="upload-video__form-input form-text"
								type="text"
								name="title"
								placeholder="Add a title to your video"
								value={videoTitle}
								required></input>
						</label>
						<br />
						<label className="upload-video__form-label form-label">
							ADD A VIDEO DESCRIPTION
							<br />
							<textarea
								onChange={handleDescriptionChange}
								className="upload-video__form-input-long form-long-text"
								type="text"
								name="description"
								placeholder="Add a description to your video"
								value={videoDescription}
								required></textarea>
						</label>
						<div className="upload-video__form-btn-wrapper">
							<button className="upload-video__form-btn btn" type="submit">
								PUBLISH
							</button>
							<p className="upload-video__form-cancel" onClick={handleCancel}>
								CANCEL
							</p>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
}

export default UploadVideo;
