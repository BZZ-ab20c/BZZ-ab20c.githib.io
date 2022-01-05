import Arr from "../../img/lineargleichungen/arr.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/lineareGleichungen/sbs.css'
import {Link} from "react-router-dom";

const LineareGleichungenBanner = (props) => {
    const backbutton = props.backbutton;
    return (
        <section id="banner">
            {backbutton ? (
                <div className="back-btn">
                    <Link to={"/"}> {/*todo: Link richtig machen*/}
                        <div className="btn">
                            <img className="arr-img" src={Arr} alt={"arr img"}/>
                        </div>
                    </Link>
                </div>
            ) : (<div/>)
            }
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Substitutionsverfahren</h1>
                    </div>
                    <div className="w-100"/>
                    <div className="col">
                        Lernset vom
                        <span className="tag-01"><a id="link-01" href="https://www.bzz.ch/"
                                                    target="_blank">BZZ</a></span>
                        {/*Todo: Kennzeichnung das BZZ ein Link ist*/}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LineareGleichungenBanner;