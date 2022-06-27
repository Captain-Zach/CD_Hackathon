import React from 'react';
import Channelbar from './ChannelBar';
import ContentContainer from './ContentContainer';
import SideBar from './SideBar';

const UkraineApp = () => {
  return (
    <div name= "app" className="flex">
      <SideBar />
      <Channelbar />
      <ContentContainer />
    </div>
  );
}

export default UkraineApp;