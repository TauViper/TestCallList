import React, { useState } from 'react';
import classes from './Calendar.module.css';

import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { getTotalCalls } from '../Store/callsSlice';

export const Calendar = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(true);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      startDate: new Date().toLocaleDateString('en-ca'),
      endDate: new Date().toLocaleDateString('en-ca'),
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    dispatch(
      getTotalCalls(
        `https://api.skilla.ru/mango/getList?date_start=${data.startDate}&date_end=${data.endDate}`
      )
    );
  };

  return (
    <div className='frame-datepicker'>
      <div>
        <div onClick={() => setVisible(!visible)} className='frame-frame666'>
          <img
            src='/external/keyboardarrowlefti115-roqj.svg'
            alt='keyboardarrowleftI115'
            className='frame-keyboardarrowleft'
          />
          <div className='frame-frame664'>
            <img
              src='/external/iconcalendari115-4gfr.svg'
              alt='iconcalendarI115'
              className='frame-iconcalendar'
            />
            <span className='frame-text'>
              <span>3 дня</span>
            </span>
          </div>
          <img
            src='/external/keyboardarrowrighti115-fhrv.svg'
            alt='keyboardarrowrightI115'
            className='frame-keyboardarrowright'
          />
        </div>
      </div>
      <div onClick={(e) => e.stopPropagation()}>
        {!visible && (
          <form className={classes.formDate} onSubmit={handleSubmit(onSubmit)}>
            <span style={{ color: 'rgba(255, 255, 255, 1)' }}>
              Выбрать начало периода
            </span>
            <input
              className={classes.inputStart}
              type='date'
              {...register('startDate')}
            />
            <span style={{ color: 'rgba(255, 255, 255, 1)' }}>
              Выбрать конец периода
            </span>
            <input
              className={classes.inputEnd}
              type='date'
              {...register('endDate')}
            />
            <button
              type='submit'
              style={{
                cursor: 'pointer',
                margin: '3px 8px',
                width: '100px',
                height: '50px',
                backgroundColor: 'white',
              }}
            >
              Принять
            </button>
            <button
              onClick={() => setVisible(!visible)}
              style={{
                cursor: 'pointer',

                width: '100px',
                height: '50px',
                backgroundColor: 'red',
              }}
            >
              X
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
