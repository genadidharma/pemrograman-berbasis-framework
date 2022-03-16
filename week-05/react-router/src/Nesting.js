import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet
} from 'react-router-dom'

function Nesting() {
    return (
        <Router>
            <div>
                <h2>Accounts</h2>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>
                <hr />
                <Routes>
                    <Route path="/topics" element={<Topics />}>
                        <Route path="nasi-goreng" element={<Kuliner />} />
                        <Route path="wisata-alam-museum" element={<Travelling />} />
                        <Route path="ibis-jw-marriot" element={<ReviewHotel />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

function Topics() {
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to="/topics/nasi-goreng">Kuliner</Link>
                </li>
                <li>
                    <Link to="/topics/wisata-alam-museum">Travelling</Link>
                </li>
                <li>
                    <Link to="/topics/ibis-jw-marriot">Review Hotel</Link>
                </li>
            </ul>

            <Outlet />
        </div>
    )
}

function Kuliner() {
    return (
        <p>Kuliner</p>
    );
}

function Travelling() {
    return (
        <p>Travelling</p>
    );
}

function ReviewHotel() {
    return (
        <p>ReviewHotel</p>
    );
}

export default Nesting;