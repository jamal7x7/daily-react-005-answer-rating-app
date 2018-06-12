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
              <div className='lamp-icon'>

                <svg width='14' height='20' viewBox='0 0 14 20' xmlns='http://www.w3.org/2000/svg'>
                  <defs>
                    <linearGradient x1='100%' y1='-23.751%' x2='-136.662%' y2='246.702%' id='linearGradient-1'>
                      <stop stopColor='#DD8EDA' offset='0%' />
                      <stop stopColor='#42A3F9' offset='100%' />
                    </linearGradient>
                  </defs>
                  <g id='Page-1' fill='none' fillRule='evenodd'>
                    <g id='Desktop-HD-Copy' transform='translate(-439 -295)' fill='url(#linearGradient-1)'>
                      <path d='M445.894531,295 C446.858078,295 447.759761,295.185545 448.599609,295.556641 C449.439457,295.927736 450.168617,296.429033 450.787109,297.060547 C451.405602,297.69206 451.893878,298.434241 452.251953,299.287109 C452.610028,300.139978 452.789062,301.048172 452.789062,302.011719 C452.789062,303.378913 452.528648,304.420569 452.007812,305.136719 C451.486977,305.852868 450.946617,306.458331 450.386719,306.953125 C449.97005,307.31771 449.638022,307.633462 449.390625,307.900391 C449.143228,308.167319 449.019531,308.489581 449.019531,308.867188 L449.019531,309.921875 C449.019531,309.934896 449.016276,309.947917 449.009766,309.960938 C449.003255,309.973958 449,309.986979 449,310 L449.019531,310 L449.019531,311.816406 C449.019531,312.766932 448.733076,313.535153 448.160156,314.121094 C447.587237,314.707034 446.838546,315 445.914062,315 C444.963537,315 444.201826,314.707034 443.628906,314.121094 C443.055987,313.535153 442.769531,312.766932 442.769531,311.816406 L442.769531,310 L442.789062,310 C442.789062,309.986979 442.785807,309.973958 442.779297,309.960938 C442.772786,309.947917 442.769531,309.934896 442.769531,309.921875 L442.769531,308.867188 C442.769531,308.61979 442.658855,308.382163 442.4375,308.154297 C442.216145,307.926431 441.923179,307.649741 441.558594,307.324219 C440.998695,306.816404 440.432295,306.168624 439.859375,305.380859 C439.286455,304.593095 439,303.470059 439,302.011719 C439,301.048172 439.179035,300.139978 439.537109,299.287109 C439.895184,298.434241 440.38346,297.69206 441.001953,297.060547 C441.620446,296.429033 442.349605,295.927736 443.189453,295.556641 C444.029301,295.185545 444.930985,295 445.894531,295 Z M445.875,313.75 C446.473961,313.75 446.939451,313.580731 447.271484,313.242188 C447.603517,312.903644 447.769531,312.428388 447.769531,311.816406 L447.769531,310.957031 C447.548176,311.035157 447.281252,311.103515 446.96875,311.162109 C446.656248,311.220703 446.298179,311.25 445.894531,311.25 C445.477863,311.25 445.116538,311.223959 444.810547,311.171875 C444.504556,311.119791 444.240887,311.054688 444.019531,310.976562 L444.019531,311.816406 C444.019531,312.415368 444.18229,312.887368 444.507812,313.232422 C444.833335,313.577476 445.28906,313.75 445.875,313.75 Z M445.693359,304.638672 L446.449219,304.638672 L446.449219,304.445312 C446.449219,304.074217 446.512695,303.777345 446.639648,303.554688 C446.766602,303.33203 447.027342,303.052736 447.421875,302.716797 C447.914065,302.287107 448.234374,301.975587 448.382812,301.782227 C448.531251,301.588866 448.643554,301.38379 448.719727,301.166992 C448.795899,300.950194 448.833984,300.69922 448.833984,300.414062 C448.833984,299.74609 448.626955,299.228517 448.212891,298.861328 C447.798826,298.494139 447.218754,298.310547 446.472656,298.310547 C445.667965,298.310547 444.896488,298.503904 444.158203,298.890625 L444.503906,299.681641 C444.882814,299.490233 445.218749,299.358399 445.511719,299.286133 C445.804689,299.213867 446.105467,299.177734 446.414062,299.177734 C446.894534,299.177734 447.262694,299.286132 447.518555,299.50293 C447.774415,299.719728 447.902344,300.027342 447.902344,300.425781 C447.902344,300.746095 447.833009,301.01953 447.694336,301.246094 C447.555663,301.472657 447.220706,301.810545 446.689453,302.259766 C446.306639,302.587892 446.044923,302.899413 445.904297,303.194336 C445.763671,303.489259 445.693359,303.865232 445.693359,304.322266 L445.693359,304.638672 Z M445.40625,306.378906 C445.40625,306.660158 445.472656,306.862304 445.605469,306.985352 C445.738282,307.108399 445.906249,307.169922 446.109375,307.169922 C446.332032,307.169922 446.505859,307.100587 446.630859,306.961914 C446.75586,306.823241 446.818359,306.628908 446.818359,306.378906 C446.818359,306.121092 446.756837,305.923829 446.633789,305.787109 C446.510742,305.65039 446.335939,305.582031 446.109375,305.582031 C445.640623,305.582031 445.40625,305.847654 445.40625,306.378906 Z'
                        id='Combined-Shape' />
                    </g>
                  </g>
                </svg>

              </div>
              <div className='question-text'>What framework should I learn and why?</div>
              <div className='bar-right' />
            </div>
          </div>
          <div className='answers'>

            <div className='answer-c'>
              <div className='answer-num'>
                <div className='answer-num-icon'>1</div>
              </div>
              <div className='answer'>
                <div className='counter'>17</div>
                <p className='answer-text'>
                  I use a bunch of them and in my opinion, the best yet to
                  come is still the good old vanilla js! but,  answering your question, try React because It’s easy and it’s fast to create projects with.
                </p>
                <div className='bar-right' />
              </div>
            </div>

            <div className='answer-c'>
              <div className='answer-num'>
                <div className='answer-num-icon'>2</div>
              </div>
              <div className='answer'>
                <div className='counter'>0</div>
                <p className='answer-text'>
                  My answer: None.
                </p>
                <div className='bar-right' />
              </div>
            </div>

          </div>

          <div className='your-answer-c'>
            <div className='your-lamp-icon'>
              <svg width='14' height='20' viewBox='0 0 14 20' xmlns='http://www.w3.org/2000/svg'>
                <g id='Page-1' fill='none' fillRule='evenodd' opacity='0.6'>
                  <g id='Desktop-HD-Copy' transform='translate(-439 -761)' fill='#FFF'>
                    <path d='M445.894531,761 C446.858078,761 447.759761,761.185545 448.599609,761.556641 C449.439457,761.927736 450.168617,762.429033 450.787109,763.060547 C451.405602,763.69206 451.893878,764.434241 452.251953,765.287109 C452.610028,766.139978 452.789062,767.048172 452.789062,768.011719 C452.789062,769.378913 452.528648,770.420569 452.007812,771.136719 C451.486977,771.852868 450.946617,772.458331 450.386719,772.953125 C449.97005,773.31771 449.638022,773.633462 449.390625,773.900391 C449.143228,774.167319 449.019531,774.489581 449.019531,774.867188 L449.019531,775.921875 C449.019531,775.934896 449.016276,775.947917 449.009766,775.960938 C449.003255,775.973958 449,775.986979 449,776 L449.019531,776 L449.019531,777.816406 C449.019531,778.766932 448.733076,779.535153 448.160156,780.121094 C447.587237,780.707034 446.838546,781 445.914062,781 C444.963537,781 444.201826,780.707034 443.628906,780.121094 C443.055987,779.535153 442.769531,778.766932 442.769531,777.816406 L442.769531,776 L442.789062,776 C442.789062,775.986979 442.785807,775.973958 442.779297,775.960938 C442.772786,775.947917 442.769531,775.934896 442.769531,775.921875 L442.769531,774.867188 C442.769531,774.61979 442.658855,774.382163 442.4375,774.154297 C442.216145,773.926431 441.923179,773.649741 441.558594,773.324219 C440.998695,772.816404 440.432295,772.168624 439.859375,771.380859 C439.286455,770.593095 439,769.470059 439,768.011719 C439,767.048172 439.179035,766.139978 439.537109,765.287109 C439.895184,764.434241 440.38346,763.69206 441.001953,763.060547 C441.620446,762.429033 442.349605,761.927736 443.189453,761.556641 C444.029301,761.185545 444.930985,761 445.894531,761 Z M445.875,779.75 C446.473961,779.75 446.939451,779.580731 447.271484,779.242188 C447.603517,778.903644 447.769531,778.428388 447.769531,777.816406 L447.769531,776.957031 C447.548176,777.035157 447.281252,777.103515 446.96875,777.162109 C446.656248,777.220703 446.298179,777.25 445.894531,777.25 C445.477863,777.25 445.116538,777.223959 444.810547,777.171875 C444.504556,777.119791 444.240887,777.054688 444.019531,776.976562 L444.019531,777.816406 C444.019531,778.415368 444.18229,778.887368 444.507812,779.232422 C444.833335,779.577476 445.28906,779.75 445.875,779.75 Z'
                      id='-copy' />
                  </g>
                </g>
              </svg>
            </div>
            <form action=''>
              <input type='text' placeholder='Type your answer here' />
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
