import PropTypes from 'prop-types';
import data from '../../data/friends.json';
import clsx from "clsx";
import css from './FriendList.module.css';

export const FriendList = () => {
  return (
    <ul className={css.friendlist}>
      {data.map(el => {
        return (
          <li className={css.item} key={el.id}>
            <span className={clsx(css.status, el.isOnline ? css["status--isOnline"]: css["status--isOffline"])}></span>
            <img className={css.avatar} src={el.avatar} alt={el.name} width="48" />
            <p className={css.name}>{el.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
