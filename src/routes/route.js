import React, {lazy, Suspense} from "react";
import {Routes, Route} from 'react-router-dom';

const Layout = lazy(() => import('../components/layout'));
const Layout1 = lazy(() => import('../pages/electronika'));
const Posts = lazy(() => import('../pages/posts/posts'));
const Users = lazy(() => import('../pages/users/users'));
const Albums = lazy(() => import('../pages/albums/albums'));
const Todos = lazy(() => import('../pages/todos/todos'));
const Electronika = lazy(() => import('../pages/electronika'));
const Rassrochka = lazy(() => import('../components/rasssrochka'));
const Texnika = lazy(() => import('../components/texnika'));
const Elctronica = lazy(() => import('../components/elektronika'));
const Odejda = lazy(() => import('../components/odejda'));
const Obuv = lazy(() => import('../components/Obuv'));
const Lovely = lazy(() => import('../components/lovelyProduct'));
const Loader = lazy(() => import('../components/Loader'));
const Corzina = lazy(() => import('../pages/users/corzina'));
const Aksessuari = lazy(() => import('../components/Aksessuari'));
const Krasota = lazy(() => import('../components/krasota'));
const Zdorove = lazy(() => import('../components/zdarove'));
const Zdorovee = lazy(() => import('../components/zdorovee'));
const Krasotaa = lazy(() => import('../components/krasotaa'));
const Aksesuarii = lazy(() => import('../components/aksessuarii'));
const DlyaDoma = lazy(() => import('../components/dlyadoma'));
const Remont = lazy(() => import('../components/remont'));
const Avtotovar = lazy(() => import('../components/avtotovar'));
const Detskiy = lazy(() => import('../components/detskiytovar'));
const Xobbi = lazy(() => import('../components/xobbi'));
const Sport = lazy(() => import('../components/sport'));
const Pitaniya = lazy(() => import('../components/product'));
const Ximiya = lazy(() => import('../components/ximiya'));
const Konstovar = lazy(() => import('../components/konstovar'));
const Zootovar = lazy(() => import('../components/zootovar'));
const Knigi = lazy(() => import('../components/knigi'));
const Dacha = lazy(() => import('../components/daxha'));




const Routing = () => <Suspense fallback={<Loader/>}>
    <Routes>
        <Route path={'/'} element={<Layout/>} >
            <Route path={'/posts'} element={<Posts/>}/>
            <Route path={'/users'} element={<Users/>}/>
            <Route path={'/albums'} element={<Albums/>}/>
            <Route path={'/todos'} element={<Todos/>}/>
            <Route path={'/zdorovee'} element={<Zdorovee/>}/>
            <Route path={'/lovely'} element={<Lovely/>}/>
            <Route path={'/aksessuarii'} element={<Aksesuarii/>}/>
            <Route path={'/corzina'} element={<Corzina/>}/>
            <Route path={'/krasotaa'} element={<Krasotaa />}/>
            <Route path={'/electronica'} element={<Electronika/>}/>
        <Route path={'/'} element={<Layout1/>} >
            <Route path={'/dlyadoma'} element={<DlyaDoma/>}/>
            <Route path={'/texnika'} element={<Texnika/>}/>
            <Route path={'/odejda'} element={<Odejda/>}/>
            <Route path={'/obuv'} element={<Obuv/>}/>
            <Route path={'/ximiya'} element={<Ximiya/>}/>
            <Route path={"/Elctronica"} element={<Elctronica/>}/>
            <Route path={'/electronica'} element={<Electronika/>}/>
            <Route path={'/zdorove'} element={<Zdorove/>}/>
            <Route path={"/aksessuari"} element={<Aksessuari/>}/>
            <Route path={"/Krasota"} element={<Krasota/>}/>
            <Route path={'/akksesuari'} element={<Electronika/>}/>
            <Route path={'/remont'} element={<Remont/>}/>
            <Route path={'/avtotovar'} element={<Avtotovar/>}/>
            <Route path={'/detskiy'} element={<Detskiy/>}/>
            <Route path={'/xobbi'} element={<Xobbi/>}/>
            <Route path={'/sport'} element={<Sport/>}/>
            <Route path={'/pitaniya'} element={<Pitaniya/>}/>
            <Route path={'/konstovar'} element={<Konstovar/>}/>
            <Route path={'/ootovar'} element={<Zootovar/>}/>
            <Route path={'/knigi'} element={<Knigi/>}/>
            <Route path={'/dacha'} element={<Dacha/>}/>
        </Route>
        </Route>
    </Routes>
</Suspense>

export default Routing