import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../../const';
import { FilmType } from '../../types/films';
import Details from '../details/details';
import Overview from '../overview/overview';
import Reviews from '../reviews/reviews';

type CardOverviewProps = {
  film: FilmType
}

function Tabs({film}: CardOverviewProps): JSX.Element {

  const [activeTab, setActiveTab] = useState(Tab.Overview);

  const renderTab = (tab: Tab): JSX.Element => {
    switch (tab) {
      case Tab.Overview:
        return <Overview film={film}/>;
      case Tab.Details:
        return <Details film={film}/>;
      case Tab.Reviews:
        return <Reviews />;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={(activeTab === Tab.Overview) ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <Link to={''} onClick={() => setActiveTab(Tab.Overview)} className="film-nav__link" >Overview</Link>
          </li>
          <li className={(activeTab === Tab.Details) ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <Link to={''} onClick={() => setActiveTab(Tab.Details)} className="film-nav__link">Details</Link>
          </li>
          <li className={(activeTab === Tab.Reviews) ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <Link to={''} onClick={() => setActiveTab(Tab.Reviews)} className="film-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>
      {renderTab(activeTab)}
    </div>
  );
}

export default Tabs;
