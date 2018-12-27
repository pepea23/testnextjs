import React from 'react'
import styled from 'styled-components'
const TestAnimation = styled.div`
 width: 100px;
  height: 100px;
  background-color: red;
  position: relative;
  -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
  -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
  -webkit-animation-delay: 2s; /* Safari 4.0 - 8.0 */
  animation-name: box;
  animation-duration: 4s;
  animation-delay: 1s;
  animation-play-state: ${props => (props.playAnim)};

/* Standard for Safari */
  @-webkit-keyframes box {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left:200px; top:0px;}
  50%  {background-color:blue; left:200px; top:200px;}
  75%  {background-color:green; left:0px; top:200px;}
  100% {background-color:red; left:0px; top:0px;}
}

/* Standard syntax */
@keyframes box {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left:200px; top:0px;}
  50%  {background-color:blue; left:200px; top:200px;}
  75%  {background-color:green; left:0px; top:200px;}
  100% {background-color:red; left:0px; top:0px;}
}
`
export default class Registants extends React.Component {
  state={
    playAnim :'paused'
  }
  startAnim = async()=>{
    this.setState({
      playAnim:'running'
    })
  }
  render () {
    return (
      <div className='mt-5'>
      <TestAnimation playAnim={this.state.playAnim}>testja</TestAnimation>
      <button onClick={this.startAnim}>lll</button>
      </div>
    )
  }
}
