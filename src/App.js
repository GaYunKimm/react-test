import './App.css';
import { Component } from 'react/cjs/react.production.min';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';





class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subject: { title: 'webs', sub: 'world wide web입니다' },
      toc: [
        { id: 1, title: 'HTML', desc: 'html is for information' },
        { id: 2, title: 'CSS', desc: 'css is for design' },
        { id: 3, title: 'JavaScript', desc: 'js is for interaction' },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC data={this.state.toc}></TOC>
        <Content></Content>
      </div>
    );
  }
}

export default App;
