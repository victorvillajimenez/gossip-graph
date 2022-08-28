import React, {useState} from 'react';
import List from './Post/List';
import Grid from './Post/Grid';
import Header from './Header';

const MainPage = () => {
  const [isList, setIsList] = useState(true);

  return (
    <>
      <Header
        isList={isList}
        setIsList={setIsList}
      />
      {isList &&
        <List />
      }
      {!isList &&
        <Grid />
      }
    </>
  );
};

export default MainPage;
