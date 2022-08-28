import React from 'react';

const Header = ({isList, setIsList}) => {
  const onClick = e => {
    const value = e.target.value;
    if (value === 'list' && !isList) setIsList(true);
    if (value === 'grid' && isList) setIsList(false);
  };

  return (
    <div
      style={{
        width: 'calc(100vw - 30%)',
        backgroundColor: '#0A66C2',
        color: '#FFF',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 auto',
        padding: '16px',
        borderRadius: '4px'
      }}
    >
      <span>Welcome to Gossip Graph</span>
      <div>
        <button
          type='button'
          onClick={onClick}
          value='list'
          style={{
            backgroundColor: 'transparent',
            color: 'inherit',
            borderRadius: '4px',
            border: `${isList ? '2' : '1'}px solid #FFF`,
            boxShadow: 'none',
            cursor: 'pointer',
            margin: '0 8px',
          }}
        >
          List
        </button>
        <button
          type='button'
          onClick={onClick}
          value='grid'
          style={{
            backgroundColor: 'transparent',
            color: 'inherit',
            borderRadius: '4px',
            border: `${isList ? '1' : '2'}px solid #FFF`,
            boxShadow: 'none',
            cursor: 'pointer'
          }}
        >
          Grid
        </button>
      </div>
    </div>
  );
};

export default Header;
