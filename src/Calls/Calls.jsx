import React, { useEffect } from 'react';
import classes from './Calls.module.css';
// import { getApi, getApiResource } from '../Store/api/api';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalCalls } from '../Store/callsSlice';

export const Calls = () => {
  // const [calls, setCalls] = useState([]);
  const calls = useSelector((state) => state.calls);
  const dispatch = useDispatch();

  useEffect(() => {
    // getApiResource('https://api.skilla.ru/mango/getList').then((results) =>
    //   setItems(results.results)

    // getApi('https://api.skilla.ru/mango/getList?limit=20').then((response) =>
    //   setCalls(response.data.results)
    // );
    // &in_out=0

    dispatch(getTotalCalls('https://api.skilla.ru/mango/getList?limit=40'));
  }, [dispatch]);

  return (
    <section className={classes.frameCalls}>
      <div className={classes.frameTable}>
        <div className={classes.frameFrame1529}>
          <div className={classes.frameTableheader}>
            <span className={classes.frameText002}>Тип</span>
            <span className={classes.frameText004}>Время</span>
            <span className={classes.frameText006}>Источник</span>
            <span className={classes.frameText008}>Оценка</span>
            <span className={classes.frameText010}>Длительность</span>
            <span className={classes.frameText012}>Звонок</span>
            <span className={classes.frameText014}>Сотрудник</span>
          </div>
        </div>
        <div className={classes.frameTable1}>
          <div className={classes.frameRows}>
            {calls.map((item) => (
              <div className={classes.frameRow} key={item.id}>
                <div className={classes.frameBorder}>
                  <img
                    src='/external/borderi115-dl3.svg'
                    alt='borderI115'
                    className={classes.frameBorder01}
                  />
                </div>
                {item.in_out === 1 ? (
                  <img
                    src='/external/tablecomponenticoncall1158-1e3k.svg'
                    alt='tablecomponenticoncall1158'
                    className={classes.frameTablecomponenticoncall}
                  />
                ) : (
                  <img
                    src='/external/tablecomponenticoncalli115-h6to.svg'
                    alt='tablecomponenticoncall1158'
                    className={classes.frameTablecomponenticoncall}
                  />
                )}
                <div className={classes.frameName}>
                  <span className={classes.frameText016}>
                    <>{item.contact_name}</> <br />
                    <>{item.from_number}</>
                  </span>
                </div>
                <span className={classes.frameText018}>
                  {item.contact_company}
                </span>
                <span className={classes.frameText020}>
                  {item.date.replace(/.+ /, '')}
                </span>
                <div className={classes.frameGrade}>
                  <div className={classes.frameComponent26}>
                    <img
                      src={'/external/ellipse31i115-e1b6h-200h.png'}
                      alt='Ellipse31I115'
                      className={classes.frameEllipse31}
                    />
                    <img
                      src='/external/ellipse32i115-gp6l-200h.png'
                      alt='Ellipse32I115'
                      className={classes.frameEllipse32}
                    />
                    <img
                      src='/external/ellipse30i115-lp1c-200h.png'
                      alt='Ellipse30I115'
                      className={classes.frameEllipse30}
                    />
                  </div>
                  <div className={classes.frameFrame01}>
                    <span className={classes.frameText022}>{item.status}</span>
                  </div>
                </div>
                <span className={classes.frameText024}>12:06</span>
                <div className={classes.frameTablecomponentavatar}>
                  <img
                    src={item.person_avatar}
                    alt='avatarI115'
                    className={classes.frameAvatar}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
