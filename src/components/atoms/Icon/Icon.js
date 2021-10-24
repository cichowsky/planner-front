import styled from 'styled-components';
import PropTypes from 'prop-types';
import icons from 'assets/icons';

const Wrapper = styled.span`
  height: 1em;
  min-width: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  & > svg {
    height: 100%;
    width: auto;
    fill: currentColor;
  }
`;

const Icon = ({ icon, ...props }) => {
  const SVG = icons[icon];
  return <Wrapper {...props}>{SVG && <SVG />}</Wrapper>;
};

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
};

export default Icon;
