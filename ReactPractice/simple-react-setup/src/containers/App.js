import React, { Component } from "react";
import './App.css';

/*import Component */
import Header from '../components/Header/Header';
import BtnFooter from '../components/Footer/BtnFooter';
// import ListItem from '../components/ToDoList/ListItem/ListItem';
import ToDoList from '../components/ToDoList/ToDoList';
import getData from '../data/todoListData';

//get the data of list 
const list = getData();


class App extends Component {
  constructor(props) {
    super(props);
    //set data in state
    this.state={
      listTodo: list,
      showBtn: true,
    }
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.inputKeyHandler = this.inputKeyHandler.bind(this,event);
    
  }
  componentDidMount(){
    // console.log('[App.js] componetDidMount');
    console.log(this.state.listTodo);
    
  }

  buttonClickHandler(){
    // console.log('[App.js] btnclickhandler fire');
    this.setState({
      showBtn: !this.state.showBtn,
    });    
  }

  inputKeyHandler(event){
    // console.log('[App.js] inputkeyhandler fire');
    let evt = event || window.event;
        // console.log('[footer.js]',"key " + evt.key + " pressed");    
        switch (evt.key) {
            case "Enter":{
                // add task in list
                const copyList  = [...this.state.listTodo];
                // push the input value to copy list if value is not empty
                if(evt.target.value){
                  copyList.push({status: false, text: evt.target.value});
                }
                // console.log(copyList);
                // set this copylist in state also
                //on enter input should disappear]
                this.setState({
                    showBtn:!this.state.showBtn,
                    listTodo: copyList,
                })
                evt.target.value='';
            }break;
            case "Esc":
            case "Escape": {
                evt.target.value='';
            }break;
        }
  }

  render() {
    
    return (
      <div className="App">
        <Header></Header>

        <div className="Listbox">
          <ToDoList passlist={this.state.listTodo}></ToDoList>
        </div>

        {this.state.showBtn ? 
        <BtnFooter clicked={() => {this.buttonClickHandler()}}></BtnFooter> :
        <input id="Input"type='text' width="100%" onKeyDown={() => {this.inputKeyHandler()}} autoFocus/>
        }

      </div>

    );
  }
}

export default App;


/*
this.state = {
  isChecked: true,
};
this.toggleChange = this.toggleChange.bind(this);

toggleChange (){
  this.setState({
    isChecked: !this.state.isChecked,
  });
}*/