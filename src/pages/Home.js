import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className='section'>
            <h1>Home element</h1>
            <Link to='/about'>
                <button className='btn'>About</button>
            </Link>
        </section>
    );
};
export default Home;
