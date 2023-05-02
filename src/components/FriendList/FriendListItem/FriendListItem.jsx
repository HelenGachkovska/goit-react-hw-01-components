import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './FriendListItem.module.css'

export const FriendListItem = ({id, name, avatar, isOnline}) => {  
    
        return (<li className={css.item} >
                <span
                    className={clsx(
                        css.status,
                        isOnline ? css['status--isOnline'] : css['status--isOffline']
                    )}
                ></span>
                <img className={css.avatar} src={avatar} alt={name} width="48" />
                <p className={css.name}>{name}</p>
            </li>
        )
    };


FriendListItem.propTypes = {  
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
