import React from "react";
import ReactDOM from "react-dom";
import { Person } from "./Person";
import styled from "styled-components";

const data = require("./Info.json");
import "./styles.css";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PersonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 1100px;
`;

const QuoteWrapper = styled.div`
  height: 200px;
  width: 800px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 40px;
  color: #1c364c;
  font-size: 32px;
  line-height: 35px;
  text-align: center;
`;

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Info: "Info Here"
    };
  }

  render() {
    return (
      <Wrapper>
        <QuoteWrapper>{this.state.Info}</QuoteWrapper>
        <PersonWrapper>
          {data.Person.map(item => (
            <Person Item={item} OnClick={this.handleClick} />
          ))}
        </PersonWrapper>
      </Wrapper>
    );
  }

  handleClick = item => {
    this.setState({ Info: item.Quote });
  };
}

const App = () => <Application />;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
