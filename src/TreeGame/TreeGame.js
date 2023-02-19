
import React from 'react';
import seed from "../images/treesprites/seed.png";
import sprout from "../images/treesprites/sprout.png";
import sapling from "../images/treesprites/sapling.png";
import young from "../images/treesprites/young.png";
import medium from "../images/treesprites/medium.png";
import adult from "../images/treesprites/adult.png";
import giant from "../images/treesprites/giant.png";
import "./TreeGame.css";


const TreeGame = (props) => {

  const updateTree = () => {
    let today = new Date()
    let lastDate = new Date(props.date)
    let diff = Math.abs(today - lastDate) / 36e5;
    props.updateButtonText("Water Your Tree!")
      if (props.count < 2) {
        props.updateCount(props.count + 1)
        props.updateMessage("You watered your seed! It's growing! Come back tomorrow and build a streak.")
      } else if (props.count < 4) {
        props.updateCount(props.count + 1)
        props.updateMessage("You watered your sprout! It's already grown from a seed! Come back tomorrow and build a streak.")
      } else if (props.count < 6) {
        props.updateCount(props.count + 1)
        props.updateMessage("You watered your sapling! It's already grown from a sprout! Come back tomorrow and build a streak.")
      } else if (props.count < 8) {
        props.updateCount(props.count + 1)
        props.updateMessage("You watered your young tree! It's already grown from a sapling! Come back tomorrow and build a streak.")
      } else if (props.count < 10) {
        props.updateCount(props.count + 1)
        props.updateMessage("You watered your medium tree! It's already grown from a young tree! Come back tomorrow and build a streak.")
      } else if (props.count < 12) {
        props.updateCount(props.count + 1)
        props.updateMessage("You watered your adult tree! It's already grown from a medium tree! Come back tomorrow and build a streak.")
      } else if (props.count < 14) {
        props.updateCount(props.count + 1)
        props.updateMessage("You watered your giant tree! It's already grown from an adult tree! Come back tomorrow and build a streak.")
      } else if (props.count >= 14) {
        props.updateCount(14)
        props.updateMessage("Your tree is as big as it can get! Keep watering it to keep it healthy!")
      }
      if (diff > 24) {
        props.updateCount(props.count - 1)
        props.updateMessage("You didn't water your tree today! It's starting to wilt!")
      }
      props.updateDate(today)
      renderTree()
      
  }

  const renderTree = () => {
    if (props.count < 2) {
      props.updateTreeImage(seed)
    } else if (props.count < 4) {
      props.updateTreeImage(sprout)
    } else if (props.count < 6) {
      props.updateTreeImage(sapling)
    } else if (props.count < 8) {
      props.updateTreeImage(young)
    } else if (props.count < 10) {
      props.updateTreeImage(medium)
    } else if (props.count < 12) {
      props.updateTreeImage(adult)
    } else if (props.count < 14) {
      props.updateTreeImage(giant)
    } else if (props.count >= 14) {
      props.updateTreeImage(giant)
    }
  }

  // renderTree()

  return (
    <div className="box">
    <p className="game_notification">{props.message}</p>
    <img className="tree_img" src={props.treeImage} alt="tree" style={{width: 300, height: 300}}/>
    <button className="button" onClick={updateTree}>{props.buttonText}</button>
  </div>
  );
}

export default TreeGame;