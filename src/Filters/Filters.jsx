import React from 'react';
import { SimpleMenu } from '../DropMenu/DropMenu';

export const Filters = () => {
  return (
    <div className='frame-frame19'>
      <div className='frame-search'>
        <div className='frame-deafult'>
          <span className='frame-text258'>Поиск по звонкам</span>
          <img
            src='/external/vectori116-2eai.svg'
            alt='VectorI116'
            className='frame-vector'
          />
        </div>
      </div>
      <div className='frame-filters'>
        <div className='frame-frame20'>
          <div className='frame-frame21'>
            <span className='frame-text260'>Все типы</span>
            <img
              src='/external/dropdowni116-xjjp.svg'
              alt='dropdownI116'
              className='frame-dropdown'
            />
          </div>
          <div className='frame-frame22'>
            <span className='frame-text262'>Все сотрудники</span>
            <img
              src='/external/dropdowni116-bln.svg'
              alt='dropdownI116'
              className='frame-dropdown1'
            />
          </div>
          <div className='frame-frame23'>
            <div className='frame-text264'>
              <SimpleMenu
                title='Все звонки'
                btn1='Входящие'
                btn2='Исходящие'
                btn3='Все звонки'
              />
            </div>
            <img
              src='/external/dropdowni116-iwfm.svg'
              alt='dropdownI116'
              className='frame-dropdown2'
            />
          </div>
          <div className='frame-frame24'>
            <div className='frame-text266'>Все источники</div>
            <img
              src='/external/dropdowni116-hlqkl.svg'
              alt='dropdownI116'
              className='frame-dropdown3'
            />
          </div>
          <div className='frame-frame25'>
            <span className='frame-text268'>Все оценки</span>
            <img
              src='/external/dropdowni116-m7x.svg'
              alt='dropdownI116'
              className='frame-dropdown4'
            />
          </div>
          <div className='frame-frame26'>
            <span className='frame-text270'>Все ошибки</span>
            <img
              src='/external/dropdowni116-6u2w.svg'
              alt='dropdownI116'
              className='frame-dropdown5'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
