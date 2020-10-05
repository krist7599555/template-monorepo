import Home from './index.svelte'
import Users from './users.svelte'
import NotFound from './notfound.svelte'

export const routes = {
    '/': Home,
    '/users': Users,
    '*': NotFound,
}
