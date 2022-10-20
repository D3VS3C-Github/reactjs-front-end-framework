import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const ComponentBtn = ({ color, txt, onClick }) => {
  return (
    <Button className='mb-3 w-100' 
            variant={color}
            onClick={onClick}
    > { txt }
    </Button>
  );
}

ComponentBtn.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  txt: PropTypes.string.isRequired,
}

export default ComponentBtn;
