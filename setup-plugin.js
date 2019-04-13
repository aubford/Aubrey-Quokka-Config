import '@babel/polyfill'
import 'raf/polyfill'
import ReactDOM         from 'react-dom'
import * as React       from 'react'
import {formatHtml}     from './util'
import { Provider } from 'react-redux'

export const before = config => {
  console.logg = console.log

  const muiTheme = getMuiTheme()
  global.quokka = (comp, Store) => {
    let Root = () => (
        <div id={'comp-container'}>
          {comp}
        </div>
    )
    if (Store) {
      Root = <Provider store={Store}>{Root}</Provider>
    }
    ReactDOM.render(<Root/>, document.getElementById('root'))
    const html = document.getElementById('comp-container').innerHTML
    console.logg(formatHtml(html))
  }
}