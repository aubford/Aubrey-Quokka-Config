import getMuiTheme      from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ReactDOM         from 'react-dom'
import * as React       from 'react'
import {formatHtml}     from './util'
import { Provider } from 'react-redux'

export const before = config => {
  console.logg = console.log

  const muiTheme = getMuiTheme()

  global.quokka = (comp, Store) => {
    class Root extends React.Component {
      render() {
        return (
          <MuiThemeProvider muiTheme={muiTheme}>
            <div id={'comp-container'}>
              {comp}
            </div>
          </MuiThemeProvider>
        )
      }
    }
    if (Store) {
      Root = <Provider store={Store}>{<Root />}</Provider>
    }
    ReactDOM.render(<Root/>, document.getElementById('root'))
    const html = document.getElementById('comp-container').innerHTML
    console.log(formatHtml(html))
  }
}