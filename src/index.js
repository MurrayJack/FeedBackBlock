import React from "react";
import ReactDOM from "react-dom";
import { Person } from "./Person";
import styled, { keyframes } from "styled-components";

const data = require("./Info.json");

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PersonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`;

const PersonSlider = styled.div`
  display: flex;
  justify-content: center;
`;

const closingAnimation = keyframes`
    to {
        transform: translatey(-40px);
        opacity: 0;
    }
`;

const loadingAnimation = keyframes`
    from {
       transform: translatey(-40px);
        opacity: 0;
    }
    
    to {
        transform: translatey(0px);
        opacity: 1;
    }
`;

const QuoteWrapper = styled.div`
  height: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 60px;
  color: #1c364c;
  font-size: 26px;
  line-height: 35px;
  text-align: center;
  width: 90%;
  padding: 20px;

  animation: ${loadingAnimation} 0.25s ease-in-out 0s forwards;

  &.loading {
    animation: ${closingAnimation} 0.25s ease-in-out 0s forwards;
  }
`;

const PageWrapper = styled.div`
  display: flex;
`;

const PageCircle = styled.button`
  height: 20px;
  width: 20px;
  background-color: #1c364c;
  border-radius: 50%;
  margin: 1em 0.25em;
  opacity: 0.4;
  transition: opacity ease-in-out 0.25s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &.selected {
    opacity: 1;
  }
`;

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Info: data.Person[2].Quote,
      QuoteChange: "",
      SelectedIndex: 2
    };
  }

  render() {
    return (
      <Wrapper>
        <QuoteWrapper className={this.state.QuoteChange}>
          <div>
            <svg
              width="28px"
              height="25px"
              viewBox="0 0 28 25"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>“</title>
              <desc>Created with Sketch.</desc>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Careers-Concept-v3-Copy"
                  transform="translate(-739.000000, -3087.000000)"
                  fill="#1C364C"
                >
                  <g
                    id="Group-8"
                    transform="translate(186.000000, 3087.000000)"
                  >
                    <path
                      d="M558.67,24.12 C556.869991,24.12 555.475005,23.4300069 554.485,22.05 C553.494995,20.6699931 553,18.6600132 553,16.02 C553,12.419982 553.809992,9.3000132 555.43,6.66 C557.050008,4.0199868 559.419984,1.800009 562.54,0 L564.7,3.51 C562.419989,5.0100075 560.710006,6.61499145 559.57,8.325 C558.429994,10.0350085 557.86,12.1499874 557.86,14.67 C558.040001,14.6099997 558.309998,14.58 558.67,14.58 C559.870006,14.58 560.964995,14.9699961 561.955,15.75 C562.945005,16.5300039 563.44,17.6699925 563.44,19.17 C563.44,20.7300078 562.990005,21.9449956 562.09,22.815 C561.189996,23.6850043 560.050007,24.12 558.67,24.12 Z M574.51,24.12 C572.709991,24.12 571.315005,23.4300069 570.325,22.05 C569.334995,20.6699931 568.84,18.6600132 568.84,16.02 C568.84,12.419982 569.649992,9.3000132 571.27,6.66 C572.890008,4.0199868 575.259984,1.800009 578.38,0 L580.54,3.51 C578.259989,5.0100075 576.550006,6.61499145 575.41,8.325 C574.269994,10.0350085 573.7,12.1499874 573.7,14.67 C573.880001,14.6099997 574.149998,14.58 574.51,14.58 C575.710006,14.58 576.804995,14.9699961 577.795,15.75 C578.785005,16.5300039 579.28,17.6699925 579.28,19.17 C579.28,20.7300078 578.830005,21.9449956 577.93,22.815 C577.029996,23.6850043 575.890007,24.12 574.51,24.12 Z"
                      id="“"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          {this.state.Info}
        </QuoteWrapper>
        <PersonWrapper>
          <PersonSlider
            style={{
              transform: `translateX(-${this.state.SelectedIndex * 70}vw)`
            }}
          >
            {data.Person.map((item, index) => (
              <Person
                key={item.Name}
                Item={item}
                Index={index}
                Selected={this.state.SelectedIndex === index}
                OnClick={this.handleClick}
              />
            ))}
          </PersonSlider>
        </PersonWrapper>
        <PageWrapper>
          {data.Person.map((item, index) => (
            <PageCircle
              className={this.state.SelectedIndex === index ? "selected" : ""}
            />
          ))}
        </PageWrapper>
      </Wrapper>
    );
  }

  handleClick = (item, index) => {
    this.setState({ QuoteChange: "loading", SelectedIndex: index }, () => {
      window.setTimeout(() => {
        this.setState({
          Info: item.Quote,
          QuoteChange: ""
        });
      }, 250);
    });
  };
}

const App = () => <Application />;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
