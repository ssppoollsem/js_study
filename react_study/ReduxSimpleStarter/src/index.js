import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyA8iaFE6sbPDYtoVObixC6gxcAnoVsmrNw';



// 새로운 컴포넌트 생성. 이 컴포넌트는 HTML을 생성하게 된다.
class App extends Component {
    constructor(props){
        super(props);
        this.state = {videos : []};
        
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({videos:videos})
        })
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
};

// 이 컴포넌트가 만든 HTML을 가져가고 페이지에 DOM안에 반영한다.
ReactDOM.render(<App />, document.querySelector('.container'));