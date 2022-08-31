import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

export default function NavigationHead() {
    const router = useRouter();
    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Flash Card Loader</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerFlashCards" aria-controls="navbarTogglerFlashCards" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerFlashCards">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link href="/">
                            <a className={router.pathname == "/" ? "nav-link active" : "nav-link"} aria-current="page">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/Users">
                            <a className={router.pathname == "/Users" ? "nav-link active" : "nav-link"}>Users</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/AboutUs">
                            <a className={router.pathname == "/AboutUs" ? "nav-link active" : "nav-link"}>About Us</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>)
}