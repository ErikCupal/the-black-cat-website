/* tslint:disable:no-var-requires */
const { ConnectedRouter } = require('connected-react-router')
import { History } from 'history'
import Routes from '../common/routes'

const App = ({ history }: { history: History }) => (
  <ConnectedRouter history={history}>
    <Routes />
  </ConnectedRouter>
)

export default App