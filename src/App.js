import './App.css';
import { Component } from 'react/cjs/react.production.min';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';





class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      selected_content_id: 2,
      subject: { title: 'webs', sub: 'world wide web입니다' },
      welcome: { title: 'welcome', desc: 'heoll, react!!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'html is for information' },
        { id: 2, title: 'CSS', desc: 'css is for design' },
        { id: 3, title: 'JavaScript', desc: 'js is for interaction' },
      ]
    }
  }

  render() {
    console.log('app render');
    let _title = null;
    let _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      let i = 0;

      while (i < this.state.contents.length) {
        let data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }

    }

    return (

      <div className="App">
        {/* <header>
          <h1><a href="/" onClick={function (e) {
            console.log(e);
            e.preventDefault();
            if (this.state.mode === 'welcome') {
               this.state.mode = 'read';
              this.setState({ mode: 'read' })
            } else {
              this.state.mode = 'welcome';
              this.setState({ mode: 'welcome' })

            }

          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function (e) {
            this.setState({ mode: 'welcome' })
          }.bind(this)} >
        </Subject>

        <TOC onChangePage={function (id) {
          this.setState({
            mode: 'read',
            selected_content_id: Number(id),
          })
        }.bind(this)}
          data={this.state.contents}>

        </TOC>

        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
