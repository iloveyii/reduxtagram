import React from 'react';
import Video from './Video';
import ReactPlayer from 'react-player';


export default class SingleVideo extends React.Component {

    render() {
        const fileName = this.props.params.fileName;
        const url = 'http:/localhost/api/video/ln/'+fileName;
        console.log(url);

        return(
            <div>
                <div className="single-photo">
                    <ReactPlayer playing width="100%" height="100%" url={url} key={1110} controls={true} style={{width:'100%', height:'100%'}}/>
                </div>
            </div>

        )
    }
}

