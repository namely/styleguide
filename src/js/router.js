import Router from 'ampersand-router';
import React from 'react';
import ReactDOM from 'react-dom';
import NavContainer from './nav-container';
import HomePage from './pages/home';
import LayoutPage from './pages/layout';
import BasePage from './pages/base';
import NavPage from './pages/nav';
import TablesPage from './pages/tables';
import FormsPage from './pages/forms';
import ButtonsPage from './pages/buttons';
import PopoversPage from './pages/popovers';
import ModalsPage from './pages/modals';
import CardsPage from './pages/cards';
import IconsPage from './pages/icons';
import AnimationsPage from './pages/animations';
import AccordionsPage from './pages/accordions';
import ViewPage from './pages/view';
import ViewActions from './components/view/actions/view-actions';

let appContainer = document.getElementById('app');

export default Router.extend({
  renderPage(Page) {
    ViewActions.flush();
    const main = React.createElement(NavContainer, {}, React.createElement(Page));

    ReactDOM.render(main, appContainer);
  },

  routes: {
    '': 'home',
    'layout': 'layout',
    'base': 'base',
    'nav': 'nav',
    'tables': 'tables',
    'forms': 'forms',
    'buttons': 'buttons',
    'popovers': 'popovers',
    'modals': 'modals',
    'view': 'view',
    'cards': 'cards',
    'icons': 'icons',
    'animations': 'animations',
    'accordions': 'accordions'
  },

  home() {
    this.renderPage(HomePage);
  },

  layout() {
    this.renderPage(LayoutPage);
  },

  base() {
    this.renderPage(BasePage);
  },

  nav() {
    this.renderPage(NavPage);
  },

  tables() {
    this.renderPage(TablesPage);
  },

  forms() {
    this.renderPage(FormsPage);
  },

  buttons() {
    this.renderPage(ButtonsPage);
  },

  popovers() {
    this.renderPage(PopoversPage);
  },

  modals() {
    this.renderPage(ModalsPage);
  },

  view() {
    this.renderPage(ViewPage);
  },

  cards() {
    this.renderPage(CardsPage);
  },

  icons() {
    this.renderPage(IconsPage);
  },

  animations() {
    this.renderPage(AnimationsPage);
  },
  accordions() {
    this.renderPage(AccordionsPage);
  }


});
