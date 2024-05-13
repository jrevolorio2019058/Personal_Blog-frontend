import {AuthPage} from './pages/auth';

import { MainPage } from './pages/mainPage';

import { CommentPage } from './pages/comment/comment';

const routes = [

    { path: '/auth', element: <AuthPage /> },
    {path: '/comment', element: <CommentPage/>},
    {path: '/*', element: <MainPage/>}

]

export default routes;