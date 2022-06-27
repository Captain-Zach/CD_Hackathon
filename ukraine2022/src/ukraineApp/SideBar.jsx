import React from 'react';
import { 
    FaCross, 
    FaHandsHelping, 
    FaMoneyBill, 
    FaSearch , 
    FaMapSigns
} from 'react-icons/fa';

const SideBar = () => {
    return(
        <div className="fixed top-0 left-0 w-16 m-0 h-screen flex flex-col bg-gray-900 text-white shadow-lg">
            <SideBarIcons icon={<FaHandsHelping size="28"/>} text={'Support'}/>
            <SideBarIcons icon={<FaCross size="28"/>} text={'Red Cross'}/>
            <SideBarIcons icon={<FaMapSigns size="28"/>} text={'Shelter'}/>
            <SideBarIcons icon={<FaMoneyBill size="28"/>} text={'Donate'}/>
            <SideBarIcons icon={<FaSearch size="28"/>} text={'Search'}/>
        </div>
    );
};

const SideBarIcons = ({ icon, text = "💡description💡" }) => (
    <div className="sidebar-icon group">
      {icon}
      <span class="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  );

// const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;