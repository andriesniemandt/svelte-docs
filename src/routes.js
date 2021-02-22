import Introduction from './pages/Introduction.md'
import GettingStarted from './pages/GettingStarted.md'

const routes = {
    '/': Introduction,
    '/usage/getting-started': GettingStarted,
    '*': Introduction
}

export default routes