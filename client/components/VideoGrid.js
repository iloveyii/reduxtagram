import React from 'react';
import Video from './Video';
import VideoPlayer from './VideoPlayer';


class VideoGrid extends React.Component {
    constructor() {
        super();
        this.videos = [];
        console.log('constructor');
    }

    componentDidMount() {
        fetch('http://localhost/api/video/dirs.php')
            .then(res=>res.json())
            .then(result=>{
                this.videos = result;
                this.setState({videos:this.videos});
                localStorage.setItem('videos', JSON.stringify(this.videos));
                console.log(this.videos);
            })
            .catch(err=> {
                console.log(err);
            })
    }

    render() {
        return(
            <div className="photo-grid">
                {this.videos.map((url, i)=><Video url={url} key={i} i={i} />)}
            </div>
        )
    }
}

export default VideoGrid;
