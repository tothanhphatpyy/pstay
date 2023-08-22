import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { getColor, getItemFromStore } from '@helpers/utils';
import useToggleStyle from './hooks/useToggleStyle';

import { Chart as ChartJS, registerables } from 'chart.js';
import { useConfigValue } from './atom/config_app';
import { useUserInfo, useUserValue } from './atom/user_info';
import { useMount } from 'ahooks';
ChartJS.register(...registerables);

const Main = props => {
  const { getProfileUser } = useUserInfo();
  useMount(() => {
    getProfileUser();
  });
  
  const config = useConfigValue();
  const configDispatch = ()=>{}

  const { isLoaded } = useToggleStyle(
    config.isRTL,
    config.isDark,
    configDispatch
  );

  if (!isLoaded) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: config.isDark ? getColor('dark') : getColor('light')
        }}
      />
    );
  } 

  return (
    <div>
      {props.children}
    </div>
  );
};

Main.propTypes = { children: PropTypes.node };

export default Main;
