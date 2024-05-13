import {AuthPage} from './pages/auth';

import {MainPage} from './pages/mainPage';

import {CommentPage} from './pages/comment';

const routes = [

    {path: '/auth', element: <AuthPage/>},
    {path: '/*', element: <MainPage/>},
    {path: '/comment', element: <CommentPage/>}

]

export default routes;