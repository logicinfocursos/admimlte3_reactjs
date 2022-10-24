import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/dashboard'
import Products from './pages/products'


export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>

                <Route exact path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<Products />} />

            </Routes>
        </BrowserRouter>
    )
}
