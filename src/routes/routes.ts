// import { LazyPageOne, LazyPageThree, LazyPageTwo } from '../Lazyload/Pages';
import { LazyExoticComponent, lazy } from 'react';
import { NoLazyload } from '../Lazyload/Pages/NoLazyload';

type JSXComponent = () => JSX.Element

interface Route {
    to: string;
    path: string;
    Component: JSXComponent | LazyExoticComponent<JSXComponent>;
    name: string
}

const LazyLayout = lazy(() => import('../Lazyload/layout/LazyLayout'))
// const LazyOne = lazy(() => import('../Lazyload/Pages/LazyPageOne'))
// const LazyTwo = lazy(() => import('../Lazyload/Pages/LazyPageTwo'))
// const LazyThree = lazy(() => import('../Lazyload/Pages/LazyPageThree'))

export const routes: Route[] = [
    {
        to: "/lazyload/",
        path: "/lazyload/*",
        Component: LazyLayout,
        name: 'Lazy #1'
    },
    {
        to: "/no-lazy",
        path: "no-lazy",
        Component: NoLazyload,
        name: 'NO Lazy'
    },
]