import {NavLink, Route, Routes, useLocation} from "react-router-dom";
import Vektoren from "../pages/Vektoren";
import NavItems from "../pages/energie-stromerzeugung/containers/NavItems/NavItems";
import Klima from "../pages/Klima";
import Linearegleichungen from "../pages/Linearegleichungen";
import AM from "../pages/lineareGleichungenSubPages/am";
import SUBM from "../pages/lineareGleichungenSubPages/subm";
import LineareFunktionen from "../pages/LineareFunktionen";
import Energie from "../pages/Energie";
import Kuehlschrank from "../pages/Kuehlschrank";
import Home from "../pages/energie-stromerzeugung/energie-components/Home/Home";
import {Kernkraftwerk} from "../pages/energie-stromerzeugung/energie-components/Kernkraftwerk/Kernkraftwerk";
import {Solar} from "../pages/energie-stromerzeugung/energie-components/Solar/Solar";
import {Wasserkraftwerk} from "../pages/energie-stromerzeugung/energie-components/Wasserkraftwerk/Wasserkraftwerk";
import {Generator} from "../pages/energie-stromerzeugung/energie-components/Generator/Generator";
import MainPage from "../pages/MainPage";
import Temperatur from "../pages/temperatur/pages/Home";

const Navigation = () => {
    const style = {
        color: '#fa923f',
        textDecoration: 'underline'
    }

    const {pathname} = useLocation();

    return (
        <div>
            <div className="Blog">
                <nav>
                    <ul>
                        <li><NavLink
                            to="/"
                            activeStyle={style}>Home</NavLink>
                        </li>
                        <li><NavLink
                            to="/vektoren"
                            activeStyle={style}>Vektoren</NavLink>
                        </li>
                        <li><NavLink
                            to="/klima"
                            activeStyle={style}>Klima</NavLink></li>
                        <li><NavLink
                            to="/energie-stromerzeugung"
                            isActive={() => ['kernkraft/', 'solar/', 'wasserkraftwerk/', 'generator/'].includes(pathname)}
                            activeStyle={style}>Energie-Stromerzeugung</NavLink>
                        </li>
                        <li><NavLink
                            to="/linearegeleichungen"
                            activeStyle={style}>Lineare Gleichungen</NavLink>
                        </li>
                        <li><NavLink
                            to="/linearefunktionen"
                            activeStyle={style}>Lineare Funktionen</NavLink>
                        </li>
                        <li><NavLink
                            to="/energie"
                            activeStyle={style}>Energiearten</NavLink>
                        </li>
                        <li><NavLink
                            to="/kuehlschrank"
                            activeStyle={style}>Kühlschrank</NavLink>
                        </li>
                        <li><NavLink
                            to="/temperatur"
                            activeStyle={style}>Temperatur</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

            <Routes>
                <Route path="/" element={<MainPage/>}/>

                <Route path="/vektoren" element={<Vektoren/>}/>

                <Route path="/klima" element={<Klima/>}/>

                <Route path="/energie-stromerzeugung/*" element={<NavItems/>}>
                    <Route path="" element={<Home/>}/>
                    <Route path="kernkraftwerk/" element={<Kernkraftwerk/>}/>
                    <Route path="solar/" element={<Solar/>}/>
                    <Route path="wasserkraftwerk/" element={<Wasserkraftwerk/>}/>
                    <Route path="generator/" element={<Generator/>}/>
                </Route>

                <Route path="/linearegeleichungen" element={<Linearegleichungen/>}/>
                <Route path="/linearegeleichungen/AM" element={<AM/>}/>
                <Route path="/linearegeleichungen/SUBM" element={<SUBM/>}/>

                <Route path="/linearefunktionen" element={<LineareFunktionen/>}/>

                <Route path="/energie" element={<Energie/>}/>

                <Route path="/kuehlschrank" element={<Kuehlschrank/>}/>

                <Route path="/temperatur" element={<Temperatur/>}/>
            </Routes>
        </div>
    );
}

export default Navigation;
