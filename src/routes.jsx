import {AuthPage} from './pages/auth';

import {MainPage} from './pages/mainPage';

const routes = [

    {path: '/auth', element: <AuthPage/>},
    {path: '/*', element: <MainPage/>}

]

export default routes;