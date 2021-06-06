import logo from './images/panda.png';
import './css/App.css';

// Components
import MySubsection from './components/MySubsection';
import SectionCard from './components/SectionCard'
import React from 'react';

function helloWorld(pName, pCountry){
  return (
    <React.Fragment>
      <h2>Hello I'm {pName}, it's a pleasure</h2>
      <h3>I'm from {pCountry}</h3>
    </React.Fragment>
  );
};

// This data, now it's mocked data, but in the future it would come from database
const blogArray = [
        {
          title: 'Fried chips',
          description: 'You will learn about preparing fired chips',
          theme: 'chips',
          ingredients: ['potato', 'oil', 'salt']
        }, {
          title: 'Salad',
          description: 'I can tell you a bit about cooking a salad',
          theme: 'salad',
          ingredients: ['tomato', 'lettuce', 'beans', 'oil', 'salt', 'vinegar']
        }, {
          title: 'Sauce',
          description: 'The best sauce you will ever taste on your life!',
          theme: 'sauce',
          ingredients: ['tomato', 'pepper', 'onion', 'salt']
        }, {
          title: 'Lemonade',
          description: 'Try this lemonade!',
          theme: 'lemonade',
          ingredients: ['lemon', 'sugar', 'mint']
        }
      ],
      blogArrayIsEmpty = blogArray?.length <= 0,
      blogCards = blogArrayIsEmpty ? [] : blogArray.map((item, pos) => {
        return (
          <SectionCard key={pos} title={item.title} description={item.description} theme={item.theme} />
        )
      }),
      recipes = blogArrayIsEmpty ? [] : blogArray.map((item, pos) => {
        return (
          <MySubsection key={pos} item={item}/>
        )
      });


//React app
class App extends React.Component  {
  constructor(props){
    super(props)
    this.showSections = true;
    this.state = {
      showSections: true
    }
    console.log('--> App.js: Creation - constructor() has been executed');
  }

  /* BUTTONS */
  // This will NOT render the changes
  onHideVariableClick = () => { 
    this.showSections = !this.showSections;
    console.log('this.showSections =', this.showSections);
    console.log('onHideVariableClick has been executed. BUT this will NOT render the changes');
  }
  // This WILL render the changes
  onHideStateClick = () => {
    // let updatedState = !this.state.showSections;
    // this.setState({ showSections: updatedState });

    this.setState((prevState, prevProps) => {
      return { showSections: !prevState.showSections }
    })
    console.log('this.state.showSections =', this.state.showSections);
    console.log('onHideStateClick has been executed. We are using this.setState(), so This WILL render the changes!');
  }

  /* LIFECYCLE METHODS*/
  componentDidMount() {
    console.log('--> App.js: Creation - componentDidMount')
  }
  shouldComponentUpdate(nextProps, nextState) { // returns a boolean
    console.log('--> App.js: Updation - shouldComponentUpdate');
    return true;
  }
  componentDidUpdate() {
    console.log('--> App.js: Updation - componentDidUpdate')
  }

  render() {
    console.log('--> App.js: render() method has been called')
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1 style={
            {
              margin: '0 10px',
              borderRadius: '5px',
              boxShadow: '0 2px 5px #ccc'
            }
          }>
            This is my little React app!
          </h1>
          {helloWorld('Chef Mr Panda', 'Argentina')}
        </header>

        <div className='container'>
          <div>
            <h2>Hide/Show Sections</h2>
            <label>Without this.state: <button className="buttonHideSections" onClick={this.onHideVariableClick}>HIDE W/O</button>
            </label>
            <label>With this.state: <button className="buttonHideSections" onClick={this.onHideStateClick}>{this.state.showSections ? 'HIDE' : 'SHOW'} WITH</button>
            </label>
          </div>
          <section className="sections">
            <h1>Sections</h1>
            { this.showSections && this.state.showSections ? blogCards : 'Sections have been hidden!' }
          </section>
          <section className="subsections">
            <h1>Subsections</h1>
            {recipes}
          </section>
        </div>

        <footer>Thanks for walking around. See you next time!</footer>
      </div>
    );
  }
}

export default App;
