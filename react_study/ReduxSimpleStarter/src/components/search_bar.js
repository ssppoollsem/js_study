import React, { Component } from 'react';

// 함수형
// const SearchBar = () => {
//     return <input />;
// }

// 클래스형
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term : ''}
    }
    render(){
        return (
            <div>
                <input vlue={this.state.term} onChange={event => this.setState({ term : event.target.value }) } />
            </div>
        );
    }
}

export default SearchBar;