import React, { Component } from 'react'

class Choice extends Component {
    state= {
        clicked: false
      }
      
      clicked = (event) => {
        if(event.target.classList.contains("choice")){
          let pick = event.target.innerText
          let choosen = document.getElementById(`${pick}`)
          if(this.state.clicked){
            choosen.style.backgroundColor = "red"
            this.setState({
              clicked: false
            })
          }
          else{
        choosen.style.backgroundColor = "rgba(30, 130, 76, 1)"
        this.setState({
          clicked: true
        })
      }
      }
      }
    render() {
        return (
            <div className="wrap" >
    <div className ="color" onClick={(e)=>{this.props.checked(e)}}/>
      <div className="choice" id={`${this.props.choice}`} onClick={this.clicked} >
        <span className="top"></span>
        <span className="right"></span>
        <span className="bottom"></span>
        <span className="left"></span>
        <p className="checked">
          {this.props.choice}
        </p>
      </div>
      </div>
  )
}
}

export default Choice