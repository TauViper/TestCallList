import React from 'react';
import classes from './DropMenu.module.css';
import { useDispatch } from 'react-redux';
import { getTotalCalls } from '../Store/callsSlice';

export const SimpleMenu = (props) => {
  const dispatch = useDispatch();

  const inCoomingCall = () =>
    dispatch(
      getTotalCalls('https://api.skilla.ru/mango/getList?limit=20&in_out=1')
    );
  const outCall = () =>
    dispatch(
      getTotalCalls('https://api.skilla.ru/mango/getList?limit=20&in_out=0')
    );
  const allCall = () =>
    dispatch(getTotalCalls('https://api.skilla.ru/mango/getList?limit=20'));

  return (
    <div className={classes.dropdown}>
      <button className={classes.dropbtn}> {props.title}</button>
      <div className={classes.dropdownContent}>
        <button
          style={{ cursor: 'pointer' }}
          onClick={() => {
            inCoomingCall();
          }}
        >
          {props.btn1}
        </button>
        <button
          style={{ cursor: 'pointer' }}
          onClick={() => {
            outCall();
          }}
        >
          {props.btn2}
        </button>

        <button
          style={{ cursor: 'pointer' }}
          onClick={() => {
            allCall();
          }}
        >
          {props.btn3}
        </button>
      </div>
    </div>
  );
};
