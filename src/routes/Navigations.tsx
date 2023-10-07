import { Suspense } from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom"

import logo from '../assets/react.svg';
import { routes } from "./routes";

export const Navigations = () => {
    return (
        <Suspense fallback={<span>Loading</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React logo" />
                        <ul>
                            <li>
                                <NavLink to="/home" className={(isActive) => isActive ? 'nav-active' : ''} >Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={(isActive) => isActive ? 'nav-active' : ''} >About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/users" className={(isActive) => isActive ? 'nav-active' : ''} >Users</NavLink>
                            </li>

                            {
                                routes.map((route) => (
                                    <li key={route.name}>
                                        <NavLink to={route.to} className={(isActive) => isActive ? 'nav-active' : ''} >{route.name}</NavLink>
                                    </li>
                                ))
                            }

                        </ul>
                    </nav>

                    <Routes>
                        <Route path="about" element={<h1>About Page</h1>} />
                        <Route path="users" element={<h1>Users Page</h1>} />
                        <Route path="home" element={<h1>Home Page</h1>} />

                        {
                            routes.map((route) => (
                                <Route key={route.path} path={route.path} element={<route.Component />} />
                            ))
                        }


                        <Route path="/*" element={<Navigate to="home" replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}
