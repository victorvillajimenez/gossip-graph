import React, {useRef, useState, useEffect} from 'react';
import Author from './Author';
import Comments from '../Comments';

const Card = ({post}) => {
  const cardRef = useRef(null);
  const [spans, setSpans] = useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      const height = cardRef.current.clientHeight;
      setSpans(Math.ceil(height / 20));
    });
    resizeObserver.observe(cardRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        gridRowEnd: `span ${spans + 1}`,
        alignSelf: 'start',
        border: '1px solid black',
        borderRadius: '8px',
        padding: '1rem 2rem',
        // margin: '1rem',
        visibility: `${spans === 0 ? 'hidden' : 'visible'}`
      }}
    >
      <Author userId={post.userId} />
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <Comments postId={post.id} />
    </div>
  );
};

export default Card;
