import React, {Component} from 'react';
import PropTypes from 'prop-types';


class MyComponent extends Component {
    static defaultProps = {
        name:'기본 이름'
    };
    static propTypes = {
        name:PropTypes.string,
        favoriteNumber:PropTypes.number.isRequired
    };
    render() {
        const {name,favoriteNumber,children} = this.props; // 비구조화 할당
        return (
            <>
             안녕하세요. 제 이름은{name}입니다.
             children 값은 {children}.<br />
             제가 가장 좋아하는 숫자는 {favoriteNumber} 입니다.
            </>
        )
    }
}


export default MyComponent;