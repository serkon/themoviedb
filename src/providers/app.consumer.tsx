import { AppContext } from './app.provider'

export const AppConsumer = ({ children }) => {
  return (
    <AppContext.Consumer>
      {children}
    </AppContext.Consumer>
  )
}
