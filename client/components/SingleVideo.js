import React from 'react';
import ReactPlayer from 'react-player';


export default class SingleVideo extends React.Component {

    render() {
        const fileName = this.props.params.fileName;
        const url = 'http:/localhost/api/video/ln/'+fileName;
        console.log(url);
        const fullUrl=[
            {src: url, type: 'video/mp4'},
            {src: 'foo.ogg', type: 'video/ogg'}
        ];

        return(
            <div>
                <div className="single-photo">
                    <ReactPlayer width="100%" height="100%" url={url} key={0} controls={true} style={{width:'100%', height:'100%'}}/>
                    <ReactPlayer width="100%" height="100%" url={fullUrl} key={1110} controls={true} style={{width:'100%', height:'100%'}}/>
                </div>
            </div>

        )
    }
}

