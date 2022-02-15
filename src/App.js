import './App.css';
import { Component } from 'react/cjs/react.production.min';
import TOC from './components/TOC';
import Control from './components/Control';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';





class App extends Component {

  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'welcome',
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
  getRead() {
    let i = 0;
    while (i < this.state.contents.length) {
      let data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data
      }
      i = i + 1;
    }
  }
  getContent() {
    let _title = null;
    let _desc = null;
    let _article = null;
    let _content = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read') {
      _content = this.getRead();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    } else if (this.state.mode === "create") {
      _article = <CreateContent onSubmit={function (_title, _desc) {
        //add
        this.max_content_id = this.max_content_id + 1;
        /* const _contents = this.state.contents.concat(
          {
            id: this.max_content_id,
            title: _title,
            desc: _desc
          }
        ); */
        const _contents = Array.from(this.state.contents);
        _contents.push({
          id: this.max_content_id,
          title: _title,
          desc: _desc
        })
        this.setState({ contents: _contents, mode: "read", selected_content_id: this.max_content_id })
      }.bind(this)}></CreateContent>
    }

    else if (this.state.mode === "update") {
      _content = this.getRead();
      _article = <UpdateContent data={_content} onSubmit={function (_id, _title, _desc) {
        //add
        //Array.from
        const _contents = Array.from(this.state.contents);
        let i = 0;
        while (i < _contents.length) {
          if (_contents[i].id === _id) {
            _contents[i] = { id: _id, title: _title, desc: _desc }
            break;
          }
          i = i + 1
        }
        this.setState({
          contents: _contents,
          mode: 'read'
        })
      }.bind(this)}></UpdateContent>
    }
    return _article
  }

  render() {


    return (

      <div className="App">

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
        <Control onChangeMode={function (_mode) {
          if (_mode === 'delete') {
            if (window.confirm('삭제하시겠습니까?')) {
              const _contents = Array.from(this.state.contents);
              let i = 0;
              while (i < _contents.length) {
                if (_contents[i].id === this.state.selected_content_id) {
                  _contents.splice(i, 1);
                  break;
                }
                i = i + 1;
              }
              this.setState({
                mode: 'welcome',
                contents: _contents
              });
              alert('deleted~~~')
            }
          } else {
            this.setState({
              mode: _mode,
            })
          }

        }.bind(this)}></Control>

        {this.getContent()}
        {/* <ReadContent title={_title} desc={_desc}></ReadContent> */}
      </div>
    );
  }
}

export default App;
