import React, {useState, memo} from 'react';

const SHOW = 'Show comments';
const HIDE = 'Hide comments'

const Link = ({isOpen, setIsOpen}) => {
  const [label, setLabel] = useState(SHOW);

  const onClick = e => {
    setLabel(!isOpen ? HIDE : SHOW);
    setIsOpen(!isOpen);
  };

  return (
    <button
      type='button'
      onClick={onClick}
      style={{
        display: 'inline',
        margin: 0,
        padding: 0,
        border: 'none',
        backgroundColor: 'transparent',
        textDecoration: 'none',
        color: '#0A66C2',
        cursor: 'pointer'
      }}
    >
      {label}
    </button>
  );
};

export default memo(Link);
