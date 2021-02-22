import {wrap} from 'svelte-spa-router/wrap'

import Main from './Components/Main/Main.svelte'

const routes = {
    '/': wrap({
        component: Main,
        props: {
            page: 'pages/introduction.md'
        }}),
    '/guide': wrap({
        component: Main,
        props: {
            page: 'pages/guide.md'
        }}),
    '*': Main
}

export default routes