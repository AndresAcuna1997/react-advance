import { LazyExoticComponent, lazy } from 'react';

type JSXComponent = () => JSX.Element

interface Route {
    to: string;
    path: string;
    Component: JSXComponent | LazyExoticComponent<JSXComponent>;
    name: string
}

const LazyOne = lazy(() => import('../Lazyload/Pages/LazyPageOne'))
const LazyTwo = lazy(() => import('../Lazyload/Pages/LazyPageTwo'))
const LazyThree = lazy(() => import('../Lazyload/Pages/LazyPageThree'))

export const routes: Route[] = [
    {
        to: "/lazy1",
        path: "lazy1",
        Component: LazyOne,
        name: 'Lazy #1'
    },
    {
        to: "/lazy2",
        path: "lazy2",
        Component: LazyTwo,
        name: 'Lazy #2'
    },
    {
        to: "/lazy3",
        path: "lazy3",
        Component: LazyThree,
        name: 'Lazy #3'
    }
]