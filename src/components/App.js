import React, { Component } from 'react'
// import logo from './logo.svg'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Answer Rating</h1>
  </header>
)

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />

        <div className='main-win' >

          <div className='question-c' >
            <p className='answers-num'>2 Answers</p>
            <div className='question'>
              <div className='lamp-icon'>?</div>
              <div className='question-text'>What framework should I learn and why?</div>
              <div className='bar-right' />
            </div>
          </div>

          <div className='answer-c'>
          I use a bunch of them and in my opinion, the best yet to
          come is still the good old vanilla js! but,  answering your question, try React because It’s easy and it’s fast to create projects with.
          </div>

          <div className='your-answer-c'>
            <form action=''>
              <input type='text' />
              <button>Answer</button>
            </form>
          </div>

          {/* <div className='v-line' /> */}

        </div>

      </div>
    )
  }
}

export default App
