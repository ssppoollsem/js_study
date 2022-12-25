import logo from './logo.svg';
import './App.css';
import StyledButton from './components/StyledButton';
import styled, { createGlobalStyle } from 'styled-components';
import StyledA from './components/StyledA';

const PrimaryStyledButton = styled(StyledButton)`
    background: red;
    color: #fff;
`;

const UppercaseButton = (props) => <button {...props} children={props.children.toUpperCase()} />;

const MyButton = (props) => <button {...props} children={`MyButton ${props.children}`} />;

const StyledMyButton = styled(MyButton)`
    background: transparent;
    border-radius: 3px;
    border: 2px solid ${(props) => props.color || 'red'};
    color: ${(props) => props.color || 'red'};
    margin: 1em;
    padding: 0.25em 1em;
    font-size: 20px;

    :hover {
        border: 2px solid #fff;
    }

    ::before {
        content: '@';
    }
`;

// 전역 스타일 적용
const GlobalStyle = createGlobalStyle`
	button {
		color: yellow;
	}
`;

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <StyledButton>StyledButton1</StyledButton>
                <StyledButton primary>StyledButton2</StyledButton>
                <PrimaryStyledButton>StyledButton3</PrimaryStyledButton>
                <StyledButton as="a" href="/">
                    StyledButton4
                </StyledButton>
                <StyledButton as={UppercaseButton}>StyledButton5</StyledButton>
                <StyledMyButton>StyledButton6</StyledMyButton>
                <StyledMyButton color="yellow">StyledButton7</StyledMyButton>
                <StyledA href="https://www.naver.com/">태그</StyledA>
            </header>
        </div>
    );
}

export default App;
