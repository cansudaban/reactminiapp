import React, {Component} from "react";
import AddUser from "./Components/AddUser";
import Users from "./Components/Users";

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      users:[
        {
          id: 1,
          name : "Cansu Daban",
          email: "cansu@gmail.com"
        },
        {
          id: 2,
          name : "Arzu Daban",
          email: "arzu@gmail.com"
        },
        {
          id: 3,
          name : "Ediz Ayyıldız",
          email: "ediz@gmail.com"
        }
      ]
    };
    this.deleteUser=this.deleteUser.bind(this);
    this.addUser=this.addUser.bind(this);
  };
  addUser(newUser){
    let updatedUsers=this.state.users;
    updatedUsers.push(newUser);
    this.setState({
      users:updatedUsers
    });
  }
  deleteUser(id) {
    let updatedUsers=this.state.users;
    updatedUsers=updatedUsers.filter(user=> user.id !== id);
    //State Direct Immutable
    this.setState({
      users:updatedUsers
    })
  }

  render() {
    return (
      <div className="container">
        <h5>User App</h5>
        <hr/>
        <AddUser addUser={this.addUser} />
        <hr/>
        <Users deleteUser={this.deleteUser} users= {this.state.users}/>
      </div>
    );
  }
}

export default App;
