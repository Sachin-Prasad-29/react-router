import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <section className='section'>
            <h1>404</h1>
            <h2>Page Not found</h2>
            <Link to='/'>
                <button className='btn'>Home</button>
            </Link>
        </section>
    );
};
export default Error;
