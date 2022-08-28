import React, {useState} from 'react';
import Link from './Link';
import List from './List';

const Comments = ({postId}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Link
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <List
        isOpen={isOpen}
        postId={postId}
      />
    </>
  );
};

export default Comments;
