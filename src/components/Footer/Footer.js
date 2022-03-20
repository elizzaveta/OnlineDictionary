import React from "react";

export default function Footer() {
    return (
        <footer className="container page-footer font-small pt-5 mt-5">

            <div className="text-center pt-5 text-md-left">

                <div className="row">

                    <div className="col-md-6 mt-md-0 mt-3">

                        <form>
                            <h5 className="text-uppercase">Newsletter</h5>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Email"
                                       aria-label="Email" aria-describedby="button-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button"
                                            id="button-addon2">Submit
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>

                    <hr className="clearfix w-100 d-md-none pb-3"/>

                    <div className="col-md-3 mb-md-0 mb-3">

                        <h5 className="text-uppercase">About us</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!">Historical background</a>
                            </li>
                            <li>
                                <a href="#!">Publications</a>
                            </li>
                            <li>
                                <a href="#!">artmuseum@artmuseum.com</a>
                            </li>
                            <li>
                                <a href="#!">+38 (050) 111-22-33 </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">

                        <h5 className="text-uppercase">Social</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="https://www.instagram.com/">Instagram</a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/">Facebook</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="footer-copyright text-center py-3">© 2022 Copyright:
                <a href='https://github.com/elizzaveta' target="_blank" rel="noreferrer"> elizzaveta</a>
            </div>

        </footer>

    )
}