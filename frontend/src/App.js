// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Router from './Router';
// import './assets/style.css';
// import Header from './components/Common/Header';
// import Footer from './components/Common/Footer';
// import { getUser } from './reducks/users/selectors';
// import { fetchUserFromLocalStorage } from './reducks/users/operations';
// import { getSubtotal } from './reducks/carts/selectors';
// import CommonFooterText from './components/Common/CommonFooterText';
// let pageUrl = window.location.toString();

// function App() {
//     const [showFooter, setShowFooter] = useState(true);
//     const [showCommonFooter, setshowCommonFooter] = useState(true);
//     const [header, showHeader] = useState(true);
//     const dispatch = useDispatch();
//     const selector = useSelector(state => state);
//     const user = getUser(selector);
//     const subtotal = getSubtotal(selector);

//     useEffect(() => {
//         if (
//             pageUrl.includes('/shipping') ||
//             pageUrl.includes('/order-confirmation') ||
//             pageUrl.includes('/signin') ||
//             pageUrl.includes('/signup')
//         ) {
//             setShowFooter(false);
//             setshowCommonFooter(false);
//         }
//         if (pageUrl.includes('/signin') || pageUrl.includes('/signup')) {
//             setshowCommonFooter(false);
//         }
//         if (pageUrl.includes('/signin') || pageUrl.includes('/signup')) {
//             showHeader(false);
//         }
//         if (pageUrl.includes('/')) {
//             showHeader(true);
//             setShowFooter(true);
//             setshowCommonFooter(true);
//         }
//         dispatch(fetchUserFromLocalStorage());
//     }, []);
//     return (
//         <>
//             {header && <Header />}
//             <Router />
//             {showFooter && <Footer price={subtotal} />}
//             {showCommonFooter && <CommonFooterText price={subtotal} />}
//         </>
//     );
// }

// export default App;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from './Router';
import './assets/style.css';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import { getUser } from './reducks/users/selectors';
import { fetchUserFromLocalStorage } from './reducks/users/operations';
import { getSubtotal } from './reducks/carts/selectors';
import CommonFooterText from './components/Common/CommonFooterText';
let pageUrl = window.location.toString();

function App() {
    const [showFooter, setShowFooter] = useState(true);
    const [showCommonFooter, setshowCommonFooter] = useState(false);
    const [header, showHeader] = useState(true);
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const user = getUser(selector);
    const subtotal = getSubtotal(selector);

    useEffect(() => {
        if (pageUrl.includes('/Shipping') || pageUrl.includes('/order-confirmation')) {
            setShowFooter(false);
        }
        if (pageUrl.includes('/signin') || pageUrl.includes('/signup')) {
            setshowCommonFooter(false);
        }
        if (pageUrl.includes('/signin') || pageUrl.includes('/signup')) {
            showHeader(false);
        }
        if (pageUrl.includes('/')) {
            showHeader(true);
        }

        dispatch(fetchUserFromLocalStorage());
    }, []);
    return (
        <>
            {header && <Header />}
            <Router />
            {showFooter && <Footer />}
            {showCommonFooter && <CommonFooterText />}
        </>
    );
}

export default App;
