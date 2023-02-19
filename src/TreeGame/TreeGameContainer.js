import React from "react";
import TreeGame from "../TreeGame/TreeGame";
import { profile_path } from "../constants";
import LandingPage from "../LandingPage/LandingPage";


class TreeGameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      treeImage: localStorage.getItem("treeImage") || "",
      count: localStorage.getItem("count") || 0,
      message: localStorage.getItem("message") || "",
      buttonText: localStorage.getItem("buttonText") || "",
      date: new Date(),
      user_id: null,
      username: null,
      profile_pic: null,
    };

    this.updateTreeImage = this.updateTreeImage.bind(this);
    this.updateCount = this.updateCount.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.updateButtonText = this.updateButtonText.bind(this);
    this.updateDate = this.updateDate.bind(this);



  }

  updateTreeImage(treeImage) {
    localStorage.setItem('treeImage', treeImage); //save to local storage
    this.setState({ treeImage }); //set state to the value of the local storage item 'treeImage'
  }

  updateCount(count) {
    if(this.state.date.getDate() !== new Date().getDate()){ //if the date is not equal to today's date, then set the count to the value of the local storage item 'count' and set the state to that value as well as save it to local storage for future use. Otherwise, do nothing and return null;
      localStorage.setItem('count', count); //save to local storage
      this.setState({ count }); //set state to the value of the local storage item 'count'
    } else { return null; } //do nothing and return null;

  }

  updateMessage(message) { //save message to local storage and set state to the value of the local storage item 'message' as well as save it to local storage for future use;
    localStorage.setItem('message', message); //save to local storage
    this.setState({ message }); //set state to the value of the local storage item 'message'

  }

  updateButtonText(buttonText) { //save buttonText to local storage and set state to the value of the local storage item 'buttonText' as well as save it to local storage for future use;
    localStorage.setItem('buttonText', buttonText); //save to local storage
    this.setState({ buttonText }); //set state to the value of the local storage item 'buttonText'

  }

  updateDate(date) { //save date to local storage and set state to the value of the local storage item 'date' as well as save it to local storage for future use;
    localStorage.setItem('date', date); //save to local storage
    this.setState({ date }); //set state to the value of the local storage item 'date'

  }

  render() {
      return (
        <TreeGame
          treeImage={this.state.treeImage}
          count={this.state.count}
          message={this.state.message}
          buttonText={this.state.buttonText}
          date={this.state.date}
          updateTreeImage={this.updateTreeImage}
          updateCount={this.updateCount}
          updateMessage={this.updateMessage}
          updateButtonText={this.updateButtonText}
          updateDate={this.updateDate}
        />
      );
    }
}

export default TreeGameContainer;
