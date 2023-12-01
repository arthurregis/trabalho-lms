import React, { useState } from 'react';
import Lottie from 'react-lottie';
import './FavAnimation.css';

import animationData from './Animation.json';

const FavAnimation = ({ product, addItemFav}) => {

  const [isLiked, setLikeState] = useState(false);

  const [animationState, setAnimationState] = useState({
    isStopped: true, isPaused: false,
    direction: -1,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <div className='buttonWrapper' onClick={() => {
        addItemFav(product.id, product.img, product.name, product.price, product.size)
        
        const reverseAnimation = -1;
        const normalAnimation = 1;

        setAnimationState({
          ...animationState,
          isStopped: false,
          direction: animationState.direction === normalAnimation 
            ? reverseAnimation
            : normalAnimation,
        })
        setLikeState(!isLiked);
      }}>
        <div className="animation">
          <Lottie
            options={defaultOptions}
            width={50}
            height={50}
            direction={animationState.direction}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
            speed={4}
            />
        </div>
      </div>
    </div>
  );
}

export default FavAnimation;