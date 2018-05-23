import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {
  
  const videoArray = props.ListOfVideos.map((vid) => {
    return (
      <VideoListItem 
      onVideoSelect = {props.onVideoSelect}
      key = {vid.etag} 
      video = {vid} />
    );
  });


  return (
    <ul className = "col-md-4 list-group">
      {videoArray}
    </ul>
  );
}

export default VideoList;