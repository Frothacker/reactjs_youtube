import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imgUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
 // instead of (props), ({video}) == this --> `const video = props.video;1
  return (
    <li onClick={ () => onVideoSelect(video)} className = "list-group-item">
      <div className = "video-list media">
        <div className = "media-left">
          <img className = "media-object" src={imgUrl} />
        </div>
        <div className = "media-body">
          <div className = "media-heading">{title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;