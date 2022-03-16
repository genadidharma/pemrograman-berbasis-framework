import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useLocation,
    useNavigate,
    Navigate,
    Outlet
} from 'react-router-dom'

function Auth() {
    return (
        <Router>
            <div>
                <AuthButton />

                <ul>
                    <li>
                        <Link to="public">Public Page</Link>
                    </li>
                    <li>
                        <Link to="private">Private Page</Link>
                    </li>
                </ul>
            </div>

            <Routes>
                <Route path='public' element={<PublicPage />} />
                <Route path='login' element={<LoginPage />} />
                <Route element={<PrivateRoute/>}>
                    <Route path='private' element={<ProtectedPage/>}/>
                </Route>
            </Routes>
        </Router>
    );
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true
        setTimeout(cb, 100)
    },
    signOut(cb) {
        fakeAuth.isAuthenticated = false
        setTimeout(cb, 100)
    }
}

function AuthButton() {
    let history = useNavigate()
    return fakeAuth.isAuthenticated ? (
        <p>
            Welcome! {" "}
            <button onClick={() => {
                fakeAuth.signOut(() => history('/'))
            }}>
                Sign Out
            </button>
        </p>
    ) : (
        <p>You are not logged in</p>
    )
}

function PrivateRoute() {
    const location = useLocation()

    return fakeAuth.isAuthenticated
        ? <Outlet/>
        : <Navigate to = {
            {
                pathname: '/login',
                state: { from: location.pathname }
            }
        } />
}

function PublicPage() {
    return (
        <h3>Public</h3>
    )
}

function ProtectedPage() {
    return (
        <h3>Protected</h3>
    )
}

function LoginPage() {
    let history = useNavigate()
    let location = useLocation()

    let { from } = location.state || { from: { pathname: "/" } }
    let login = () => {
        fakeAuth.authenticate(() => {
            history(from)
        })
    }

    return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={login}>Log In</button>
        </div>
    )
}

export default Auth;