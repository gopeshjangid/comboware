import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class SimpleForm extends Component {

  constructor(){
    super();
    this.state = {
      steps : [
        {
          id: 'welcome',
          message: 'Hi there, Welcome to Comboware !',
          trigger: '1',
        },
        {
          id: '1',
          message: 'What is your name?',
          trigger: 'name',
        },
        {
          id: 'name',
          user: true,
          trigger: '3',
        },
        {
          id: '3',
          message: 'Hi {previousValue}! What is your email?',
          trigger: 'email'
        },
        {
          id: 'email',
          user: true,
          trigger: 'confirm',
          validator: (value) => {
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (!reg.test(value)) {
              return 'Please enter valid email address.';
            } 
            return true;
          },
        },
        {
          id: 'confirm',
          message: 'Ok great! how may i help you ?',
          trigger: 'start_chat',
          
        },
        {
          id: 'start_chat',
          user: true,
          trigger:this.fetchMessage,
        },
        {
          id: 'finish',
          message: 'Ok great!',
          trigger :"email"
        }
       
      ]
    }
  }

  componentDidMount(){

    // setInterval(()=>{
    //   this.setState({...this.state , steps : [...this.state.steps ,{id : "finish2", message : "hi new fetched22" ,trigger : "finish"}]})
    // },2000)
  }

  fetchMessage = (e) =>{
    this.setState({...this.state , steps : [...this.state.steps ,{id : "finish1", message : "hi new fetched" ,trigger : "finish"}]})
  }

  
  render() {
    console.log("steps" ,this.state.steps);
    return (
      <ChatBot
      floating={true}
      headerTitle="Comboware Support"
        steps={this.state.steps}
        cache={true}
      />
    );
  }
}

export default SimpleForm;