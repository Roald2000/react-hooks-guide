import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Link, Outlet } from 'react-router-dom';

import UseStateHook from './Hooks/UseStateHook';
import UseEffectHook from './Hooks/UseEffectHook';
import UseContextHook from './Hooks/UseContextHook';
const NavigationBar = () => {
    return <>
        <header className='flex flex-row gap-3 p-2'>
            <Link to={'react-hooks/'}>use_state</Link>
            <Link to={'/react-hooks/use_effect'}>use_effect</Link>
            <Link to={'/react-hooks/use_context'}>use_context</Link>
        </header>
        <main>
            <Outlet />
        </main>
    </>
}

export default function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='react-hooks' element={<NavigationBar />}>
            <Route path='react-hooks/' element={<UseStateHook />} />
            <Route path='/react-hooks/use_effect' element={<UseEffectHook />} />
            <Route path='/react-hooks/use_context' element={<UseContextHook />} />
        </Route>
    ))

    return <RouterProvider router={router} />
}