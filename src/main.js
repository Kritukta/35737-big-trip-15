import {navigationTemplate} from './view/navigationTemplate';
import {filterTemplate} from './view/filterTemplate';
import {sortTemplate} from './view/sortTemplate';
import {pointTemplate} from './view/pointTemplate';
import {editPointTemplate} from './view/editTemplate';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};
/**
 * const
 */
const POINT_COUNT = 3;


/**
 * containers
 * */
const NavigationContainer = document.querySelector('.trip-controls__navigation');
const FilterContainer = document.querySelector('.trip-controls__filters');
const EventsContainer = document.querySelector('.trip-events');

/**
 * render
 * */
render(NavigationContainer,navigationTemplate(), 'afterbegin');
render(FilterContainer, filterTemplate(), 'afterbegin');
render(EventsContainer, sortTemplate(),'afterbegin' );
for (let i = 0; i < POINT_COUNT; i++) {
  render(EventsContainer, pointTemplate(), 'beforeend');
}
render(EventsContainer, editPointTemplate(), 'afterbegin');
