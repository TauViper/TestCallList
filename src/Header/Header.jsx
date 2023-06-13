import React from 'react';
// import "./Header.module.css";

export const Header = () => {
  return (
    <div className='frame-header'>
      <div className='frame-avatars'>
        <div className='frame-avatar22 frame-avatar22'>
          <img
            src='/external/ellipse1180-nwk5-200h.png'
            alt='Ellipse1180'
            className='frame-ellipse'
          />
          <img
            src='/external/img1180-edf-200h.png'
            alt='img1180'
            className='frame-img'
          />
        </div>
        <img
          src='/external/keyboardarrowdownblack24dp11180-xk8n.svg'
          alt='keyboardarrowdownblack24dp11180'
          className='frame-keyboardarrowdownblack24dp1'
        />
      </div>
      <span className='frame-text275'>
        <span>ИП Сидорова Александра Михайловна</span>
      </span>
      <span className='frame-text277'>
        <span>Среда, 13 окт</span>
      </span>
      <img
        src='/external/keyboardarrowdownblack24dp11181-txdo.svg'
        alt='keyboardarrowdownblack24dp11181'
        className='frame-keyboardarrowdownblack24dp11'
      />
      <div className='frame-vector2'></div>
      <img
        src='/external/basicsearch1181-lxt9.svg'
        alt='basicsearch1181'
        className='frame-basicsearch'
      />
      <div className='frame-frame27'>
        <div className='frame-frame28'>
          <span className='frame-text279'>
            <span className='frame-text280'>
              Новые звонки
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>20 из 30 шт</span>
          </span>
          <img
            src='/external/bar1182-b43-200h.png'
            alt='bar1182'
            className='frame-bar'
          />
          <img
            src='/external/bar1182-p0r3-200h.png'
            alt='bar1182'
            className='frame-bar1'
          />
        </div>
        <div className='frame-frame29'>
          <span className='frame-text282'>
            <span className='frame-text283'>
              Качество разговоров
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>40%</span>
          </span>
          <img
            src='/external/bar1182-boyvo-200h.png'
            alt='bar1182'
            className='frame-bar2'
          />
          <img
            src='/external/bar1182-c1to-200h.png'
            alt='bar1182'
            className='frame-bar3'
          />
        </div>
        <div className='frame-frame30'>
          <span className='frame-text285'>
            <span className='frame-text286'>
              Конверсия в заказ
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>67%</span>
          </span>
          <img
            src='/external/bar1182-9yoj-200h.png'
            alt='bar1182'
            className='frame-bar4'
          />
          <img
            src='/external/bar1182-j35-200h.png'
            alt='bar1182'
            className='frame-bar5'
          />
        </div>
      </div>
    </div>
  );
};
