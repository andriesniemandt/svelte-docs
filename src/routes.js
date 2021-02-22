import {wrap} from 'svelte-spa-router/wrap'

import Introduction from './pages/Introduction.md'
import Guide from './pages/Guide.md'

const routes = {
    '/': Introduction,
    '/guide': Guide,
    '*': Introduction
}

export default routes