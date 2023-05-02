import PropTypes from 'prop-types';
import data from '../../data/data.json';
import css from './Statistics.module.css';
import { getRandomHexColor } from '../../utils/colorPicker';

export const Statistics = () => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>
      <ul className={css.statlist}>
        {data.map(el => (
          <li className={css.item} key={el.id} style={{backgroundColor: getRandomHexColor()}}>
            <span className={css.label}>{el.label}</span>
            <span className={css.percentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.string.isRequired
    })
}
