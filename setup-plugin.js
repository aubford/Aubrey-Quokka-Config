import '@babel/polyfill'
import 'raf/polyfill'
import getMuiTheme      from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ReactDOM         from 'react-dom'
import * as React       from 'react'
import {formatHtml}     from './util'

export const before = config => {
  console.logg = console.log

  const muiTheme = getMuiTheme({
    palette: {
      primary1Color: 'rgb(0,167,225)', disabledColor: 'rgb(118,118,121)'
    }, menuItem: {
      selectedTextColor: 'rgb(0,167,225)'
    }, datePicker: {
      selectColor: 'rgb(0,167,225)'
    }, timePicker: {
      headerColor: 'rgb(0,167,225)', textColor: 'rgb(255,255,255)'
    }, appBar: {
      color: 'rgb(255,255,255)'
    }
  })

  global.renderQuokka = comp => {
    const Root = () => (<MuiThemeProvider muiTheme={muiTheme}>
        <div id={'comp-container'}>
          {comp}
        </div>
      </MuiThemeProvider>
    )
    ReactDOM.render(<Root/>, document.getElementById('root'))
    const html = document.getElementById('comp-container').innerHTML
    console.logg(formatHtml(html))
  }


}