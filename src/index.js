import React, { Component } from 'react';
import ReactDOM from "react-dom"
import Search_bar from "./components/search_bar"
import YTSearch from "youtube-api-search"
import Video_list from "./components/video_list"
import VideoDetail from "./components/video_detail"

const API_KEY = `AIzaSyDaoyQuUybFJYAhLapYq-aXuaWkV3ZTnuI`;

class App extends Component {
    constructor(){
      super()
    this.state={
      videos: [],
      videoDetail: null
    }
      this.youtubeSearch("relax music 2018")
  }

    youtubeSearch = (search) => {
      YTSearch({key: API_KEY,term: search, maxResults:50},
      data=> this.displayVideosList(data))
    }

    displayVideosList = (data) => {
      this.setState({
        videos: data,
        videoDetail: data[0],
      })
    }

    handleUserSearch = (event,userInput) => {
      YTSearch({key: API_KEY,term: userInput, maxResults: 50},data=> this.displayVideosListOnly(data))
    }

    displayVideosListOnly = (data) => {
      this.setState({
        videos: data,
      })
    }

    selectVideoDetail = (event,video) => {
      event.preventDefault()
      this.setState({
        videoDetail: video,
      })
    }

   render() {
    console.log(this.state)
  return (<div>
      <Search_bar handleSearch={this.handleUserSearch}/>
      <Video_list videos={this.state.videos} selectVideo={this.selectVideoDetail} />
      <VideoDetail video = {this.state.videoDetail} />
    </div>)
   }
   }

  ReactDOM.render(<App />,document.getElementsByClassName('container')[0])
