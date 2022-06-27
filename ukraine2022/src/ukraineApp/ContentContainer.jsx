import React from 'react';
import TopNavigation from './TopNavigation';
import { BsPlusCircleFill } from 'react-icons/bs';
import turtleIcon from '../assets/googleturtle.svg';

const ContentContainer = () => {
  return (
    <div className='content-container'>
      <TopNavigation />
      <div className='content-list'>
        <Post
          name='Antoine'
          timestamp='one week ago'
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.`}
        />
        <Post name='Carl-Bot' timestamp='one week ago' text={`Lorem ipsum dolor. `} />
        <Post name='Jordan9' timestamp='5 days ago' text={`Lorem.`} />
        <Post
          name='ZelenskyyFan1991'
          timestamp='4 days ago'
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
        />
        <Post
          name='triciadrich'
          timestamp='4 days ago'
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
        />
        <Post
          name='Zack'
          timestamp='4 days ago'
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.`}
        />
      </div>
      <BottomBar />
    </div>
  );
};

const BottomBar = () => (
  <div className='bottom-bar'>
    <PlusIcon />
    <input type='text' placeholder='Enter message...' className='bottom-bar-input' />
  </div>
);

const Post = ({ name, timestamp, text }) => {
  return (
    <div className={'post'}>
      <div className='avatar-wrapper'>
        <img src={turtleIcon} alt='user icons' className='avatar' />
      </div>

      <div className='post-content'>
        <p className='post-owner'>
          {name}
          <small className='timestamp'>{timestamp}</small>
        </p>
        <p className='post-text'>{text}</p>
      </div>
    </div>
  );
};

const PlusIcon = () => (
  <BsPlusCircleFill
    size='22'
    className='text-green-500 dark:shadow-lg mx-2 dark:text-primary'
  />
);

export default ContentContainer;