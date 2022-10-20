import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <header>
      <small>
        OPEN SOURCE PROJECT |•| MIT
      </small>
      <h1 className='display-1 fw-bolder'>
        { props.heading }
      </h1>
    </header>
  )
}

Header.deafaultProps = {
  heading: 'REACT FRONT-END FRAMEWORK',
}

Header.propTypes = {
  heading: PropTypes.string.isRequired,
}

export default Header;
