import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import { LazyPageOne, LazyPageThree, LazyPageTwo } from '../Pages';
export const LazyLayout = () => {
    return (
        <div style={{ display: 'grid' }}>
            <ul>
                <li>
                    <NavLink to="lazy1">Lazy 1</NavLink>
                </li>

                <li>
                    <NavLink to="lazy2">Lazy 2</NavLink>
                </li>

                <li>
                    <NavLink to="lazy3">Lazy 3</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path='lazy1' element={<LazyPageOne />} />
                <Route path='lazy2' element={<LazyPageTwo />} />
                <Route path='lazy3' element={<LazyPageThree />} />

                <Route path='*' element={<Navigate replace to="lazy1" />} />
            </Routes>
        </div>
    )
}

export default LazyLayout