import PropTypes from 'prop-types';
import friends from '../../data/friends.json';
import clsx from 'clsx';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendlist}>
      {friends.map(el => {
        return (
          <li className={css.item} key={el.id}>
            <span
              className={clsx(
                css.status,
                el.isOnline ? css['status--isOnline'] : css['status--isOffline']
              )}
            ></span>
            <img
              className={css.avatar}
              src={el.avatar}
              alt={el.name}
              width="48"
            />
            <p className={css.name}>{el.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
