import React, { Component } from 'react';

 export default class Video_list_item extends Component {

 render() {

return (
  <li className="list-group-item" onClick={(event)=> this.props.selectVideo(event,this.props.video)}>
    <div className="video_list_media">
      <div className="media-left">
          <img className="media-object" src={this.props.video.snippet.thumbnails.default.url} alt="please check"/>
      </div>
      <div className="media-body">
          <div className="media-heading">{this.props.video.snippet.title}</div>
      </div>
    </div>
  </li>
    );
  };
};
