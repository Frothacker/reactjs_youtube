import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div> loading ... </div>;
  } 
// this will display a "loading ..." , in order to avoid the error when .id.videoId 
// called called on "video", and video dosen't exist yet, beaucse the YTseach
// hasn't finished updating state from the default we set it to of empthy 

  const videoID = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoID}`;

  return (
    <div className = "video-detail col-md-8">
      <div className = "embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src = {url} ></iframe>
      </div>
      <div className= "details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}; 

export default VideoDetail;