import '@babel/polyfill'
import 'raf/polyfill'
import * as React       from 'react'
import ReactDOM         from 'react-dom'
import {formatHtml}     from './util'
import { Provider } from 'react-redux'

export const before = config => {
  console.logg = console.log

  global.quokka = (comp, Store) => {
    class Root extends React.Component {
      render() {
        return (
        <div id={'comp-container'}>
          {comp}
        </div>
    )}
    }
    if (Store) {
      Root = <Provider store={Store}>{<Root />}</Provider>
    }
    ReactDOM.render(<Root/>, document.getElementById('root'))
    const html = document.getElementById('comp-container').innerHTML
    console.log(formatHtml(html))
  }
}