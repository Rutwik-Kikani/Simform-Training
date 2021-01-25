import React, { Component } from "react";
import './App.css';

/*import Component */
import Header from '../components/Header/Header';
import BtnFooter from '../components/Footer/BtnFooter';
// import ListItem from '../components/ToDoList/ListItem/ListItem';
import ToDoList from '../components/ToDoList/ToDoList';
// import getData from '../data/todoListData';
// import toDoList from "../components/ToDoList/ToDoList";

//get the data of list
//while develoopment goto todoListData.js  and return todoListData1
//const list = getData();
//localStorage.setItem('todo-list',JSON.stringify(list)); 

const list1 = [];



function setCookie(cookieName, cookieValue, exdays){
  console.log('[App.js] setCookie fire!!');

  const cdate = new Date(); // cdate meaning cookie set date
  cdate.setTime(cdate.getTime() + ((exdays)*24*60*60*1000)); 
  const expires = "expires="+ cdate.toUTCString();
  localStorage.setItem('extTime',cdate.getTime());
  console.log('[App,js>setCookie] expires',cdate.toUTCString());

  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";

} 

function getCookieValue(cookieName){
  const name = cookieName+'=';
  const decodedCookies = decodeURIComponent(document.cookie);
  // console.log(decodedCookies);
  const cookiesArr = decodedCookies.split(';');
  // console.log(cookieArr);
  for(let i =0 ; i<cookiesArr.length ; i++){
    let currentC = cookiesArr[i];
    // console.log(currentC);

    //check for starting space in the current cookie item
    if(currentC.charAt(0) == ' '){
      currentC = currentC.substr(1);
    }
    //find the cookieName in current cookie.
    //if it's occure at start then return the value or substring after '='
    if(currentC.indexOf(cookieName) == '0'){
      // console.log(currentC.substring(name.length,currentC.length));
      return currentC.substring(name.length,currentC.length);
    }  
  }
  //otherwise return empty string
  return "";
}

function removeCookie(cookieName){
  console.log('[App.js] removeCookie fire!!');
  const cdate = new Date();
  cdate.setTime(+localStorage.getItem("extTime"));
  console.log('[App.js>removeCookie] expires',cdate.toUTCString());
  document.cookie = cookieName + "=;"+"expires="+cdate.toUTCString()+ ";path=/";
}

function updateCookie(cookieName, cookieValue){
  console.log('[App.js] updateCookie fire!!');
  const cdate = new Date();
  cdate.setTime(+localStorage.getItem("extTime"));
  console.log('[App.js > updateCookie] expires on',cdate.toUTCString());
  document.cookie = cookieName + "="+cookieValue+";"+"expires="+cdate.toUTCString()+";path=/"
}




class App extends Component {
  constructor(props) {
    super(props);
    //set data in state
    this.state={
      listTodo: [],
      showBtn: true,
    }
    // this.buttonClickHandler = this.buttonClickHandler.bind(this);
    // this.inputKeyHandler = this.inputKeyHandler.bind(this);
    // this.listChangeHandler = this.listChangeHandler.bind(this);    
  }

  componentDidMount(){
    console.log('[App.js] componetDidMount');    

    //at first check for cookie list is available or not
    //if not then set cookie with emptylist
    const cookieList = getCookieValue('todo-list');
    if(cookieList === ''){
      setCookie('todo-list',JSON.stringify(list1),1);
    }

    //then check for that seted cookie is expire or not while setting cookie 
    //it's expirey date is set to localstorage while creating cookie
    //is cookie is not there or expire then remove the cookie and 
    //set new cookie with empty list 
    if(localStorage.getItem('extTime') != null && 
       localStorage.getItem('extTime') < new Date().getTime()){
         removeCookie('todo-list');
         setCookie('todo-list',JSON.stringify(list1),1);
    }


    console.log('[App.js] current time', new Date().toUTCString());
    const exdate = new Date()
    exdate.setTime(+localStorage.getItem('extTime'));
    console.log('[App.js] expire time', exdate.toUTCString())

    this.setState({
      listTodo: JSON.parse(getCookieValue('todo-list')),  
    })

    // const localList = JSON.parse(localStorage.getItem("todo-list") || "[]")
    // console.log(localList);
    // this.setState({
    //   listTodo: localList,
    // })
    
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
                //and also store it in local storage or cookie
                updateCookie('todo-list',JSON.stringify(copyList));
                // localStorage.setItem('todo-list',JSON.stringify(copyList));
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
    
    //set it to localstorage or cookie
    updateCookie('todo-list',JSON.stringify(copyList));
    // localStorage.setItem('todo-list',JSON.stringify(copyList));
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

/* // While development used but keep it for syntax purpose.
{ anyChange={(itemStatus,itemIndex) => {this.listChangeHandler(itemStatus,itemIndex)}}


this.state = {
  isChecked: true,
};
this.toggleChange = this.toggleChange.bind(this);

toggleChange (){
  this.setState({
    isChecked: !this.state.isChecked,
  });
}
} */