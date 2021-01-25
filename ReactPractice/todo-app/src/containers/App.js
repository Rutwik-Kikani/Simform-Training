import React, { Component } from "react";
import './App.css';

/*import Component */
import Header from '../components/Header/Header';
import BtnFooter from '../components/Footer/BtnFooter';
// import ListItem from '../components/ToDoList/ListItem/ListItem';
import ToDoList from '../components/ToDoList/ToDoList';
import getData from '../data/todoListData';

//get the data of list
//while develoopment goto todoListData.js  and return todoListData1
const list = getData();

localStorage.setItem('todo-list',JSON.stringify(list)); 

function setCookie(cookieName, cookieValue, exdays){
  const currentdate = new Date();
  currentdate.setTime(today.getTime() + (exdays*5000));
  
  
} 


class App extends Component {
  constructor(props) {
    super(props);
    //set data in state
    this.state={
      listTodo: list,
      showBtn: true,
    }
    // this.buttonClickHandler = this.buttonClickHandler.bind(this);
    // this.inputKeyHandler = this.inputKeyHandler.bind(this);
    // this.listChangeHandler = this.listChangeHandler.bind(this);    
  }
  componentDidMount(){
    console.log('[App.js] componetDidMount'); 
    const localList = JSON.parse(localStorage.getItem("todo-list") || "[]")
    // console.log(localList);
    this.setState({
      listTodo: localList,
    })
    
  }

  
  componentDidUpdate(){
    console.log('[App.js] component is updated !!');
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
                //and also store it in local storage
                localStorage.setItem('todo-list',JSON.stringify(copyList));
                evt.target.value='';
            }break;
            case "Esc":
            case "Escape": {
                evt.target.value='';
            }break;
        }
  }

  //meaning list_checkbox_ChangeHanler
  list_c_ChangeHandler(item,itemIndex){
    
    /*console.log('[App.js] list_c_ChangeHandler');
    console.log('where the change happens!! at',itemIndex,',item was,',item);
    */

    //on value of checkbox change this handler fire and now update the state.
    //copy previous state list
    console.log('before the change',this.state.listTodo);
    const copyList = [...this.state.listTodo];
    copyList[itemIndex].status = !item.status;
    console.log('after the change',copyList);
    
    //set the state
    this.setState({
      listTodo: copyList,
    })
    
    //set it to localstorage
    localStorage.setItem('todo-list',JSON.stringify(copyList));
  } 

  render() {
    
    return (
      <div className="App">
        <Header></Header>

        <div className="Listbox">
          <ToDoList passlist={this.state.listTodo} 
                    checkboxChangeHappen = {(citem,cindex) => {
                        console.log('[App.js] checkbox changeHappen!!',cindex,citem);
                        this.list_c_ChangeHandler(citem,cindex)
                    }}
          >
          </ToDoList>
        </div>

        {this.state.showBtn ? 
        <BtnFooter clicked={() => {this.buttonClickHandler()}}></BtnFooter> :
        <input id="Input"type='text' width="100%" onKeyDown={(event) => {this.inputKeyHandler(event)}} autoFocus/>
        }

      </div>

    );
  }
}

export default App;

// anyChange={(itemStatus,itemIndex) => {this.listChangeHandler(itemStatus,itemIndex)}}

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