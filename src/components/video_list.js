import React from 'react';
import Video_list_item from "./video_list_item"

const Video_list = (props) => {
  const listVideo = props.videos.map(video => {
    return(
      <Video_list_item video={video} key={video.etag} selectVideo={props.selectVideo}/>
    )

  })

  return(
    <ul className="col-md-4 list-group">
    {listVideo}
    </ul>
  )
}


export default Video_list;
