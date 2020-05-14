import home from './home';

const dom = ( () => {
  const selectors = {
      body: document.querySelector('body')
  }

  // Selector for the new created content div
  const setContentSelector = (content) => {
      selectors.content = content;
  }

  const getContentSelector = () => {
      return selectors.content;
  }

  // Add div tag inside body as the first child
  const addContentDivToBody = () => {
      const div = document.createElement('div');
      div.setAttribute('id', 'content');
      selectors.body.insertBefore(div, selectors.body.firstChild);
      // Setting a selector for the new created div
      setContentSelector(selectors.body.firstChild);
  }

  // Add 3 links (home, menu & contact) for instant tabing
  const addLinks = (text) => {
    const a = document.createElement('a');
    a.setAttribute('href', '');
    a.setAttribute('id', text.toLowerCase());
    a.appendChild(document.createTextNode(text));
    getContentSelector().appendChild(a);
  }

  // Add Home page title inside content
  const addHomePageTitle = () => {
      const h1 = document.createElement('h1');
      h1.appendChild(document.createTextNode(home.title()));
      getContentSelector().appendChild(h1);
  }
  // Add a brief description after Home page title
  const addHomePageDesc = () => {
      const p = document.createElement('p');
      p.appendChild(document.createTextNode(home.description()));
      getContentSelector().appendChild(p);
  }

  // implementing getters/setters of selectors to select the links
  // const setLinksSelector = () => {
    // selectors.links = document.querySelectorAll('a');
  // }
// 
  // const getLinksSelector = () => {
      // return selectors.links;
  // }

  // refresh page for re-render
  const refreshPage = () => {
    console.log(getContentSelector());
    getContentSelector().parentNode.removeChild(getContentSelector());
  }
  
  // render home page
  const renderHome = (e) => {
    e.preventDefault();
    addContentDivToBody();
    addLinks('Home');
    addLinks('Menu');
    addLinks('Contact');
    // setLinksSelector();
    addHomePageTitle();
    addHomePageDesc();
  }

  // render Menu page
  const renderMenu = (e) => {
    e.preventDefault();
    addContentDivToBody();
    addLinks('Home');
    addLinks('Menu');
    addLinks('Contact');
    // setLinksSelector();
  }

  // render Contact page
  const renderContact = (e) => {
    e.preventDefault();
    addContentDivToBody();
    addLinks('Home');
    addLinks('Menu');
    addLinks('Contact');
    // setLinksSelector();
  }

  // render the page according to the dispatched event
  // renders on load home page, on links clicks home page, menu & contact

  const renderOnPageLoad = () => {
    document.addEventListener('DOMContentLoaded', renderHome, {once: true});
  }

  const homeDispatcher = () => {
    document.addEventListener('click', function(e) {
      console.log(e.target.id);
      if (e.target && e.target.id === 'home'){
        refreshPage();
        renderHome(e);
      }
    });
  }

  const menuDispatcher = () => {
    document.addEventListener('click', function(e) {
      if (e.target && e.target.id === 'menu'){
        refreshPage();
        renderMenu(e);
      }
    });
  }

  const contactDispatcher = () => {
    document.addEventListener('click', function(e) {
      if (e.target && e.target.id === 'contact'){
        refreshPage();
        renderContact(e);
      }
    });
  }

  // assemble all previous render methods into one
  const render = () => {
    renderOnPageLoad();
    homeDispatcher();
    menuDispatcher();
    contactDispatcher();
  }
  return { render };
})();

dom.render();