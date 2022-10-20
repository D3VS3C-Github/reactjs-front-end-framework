import './Pages.scss';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';

function Resources({ sm, title }) {
  return (
    <div className='p-3 fw-bold'>
      <div>
        <Container>
          <div>
           <small>{ sm }</small>
           <h1>{ title }</h1>
          </div>
        </Container>
      </div>
    </div>
  );
}

Resources.defaultProps = {
  sm: 'OPENSOURCE PROJECT | MIT',
  title: 'RESOURCES',
}

Resources.propTypes = {
  sm: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Resources; 
