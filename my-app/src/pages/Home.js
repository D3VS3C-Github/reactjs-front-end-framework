import './Pages.scss';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const Home = ({ sm, title, version }) => {
  return (
    <main>
    <section>
      <div className='center_xy center_xy_lg fw-bold'>
        <small>{ sm }</small>
        <h1>{ title }</h1>
        <Button className='mt-1 fw-bold' 
                variant='dark'
                href='/resources'>
          Learn More
        </Button>
        <p className='mt-4'>
          <small>Version { version }</small>
        </p>
      </div>
    </section>
    </main>
  );
}

Home.defaultProps = {
  sm: 'OPENSOURCE PROJECT | REACT.JS',
  title: 'FULL-STACK DEVELOPER',
  version: '1.0.0-beta.1',
}

Home.propTypes = {
  sm: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
}

export default Home;
