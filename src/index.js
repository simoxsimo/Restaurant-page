import home from './home';
import menu from './menu';
import contact from './contact';

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

  // Add page title inside content
  const addPageTitle = (title) => {
      const h1 = document.createElement('h1');
      h1.appendChild(document.createTextNode(title));
      getContentSelector().appendChild(h1);
  }
  // Add a brief description after page title
  const addPageDesc = (description, element) => {
      const h5 = document.createElement('h5');
      h5.appendChild(document.createTextNode(description));
      element.appendChild(h5);
  }

  // empty page data for a re-render
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
    addPageTitle(home.title());
    addPageDesc(home.description(), getContentSelector());
  }

  // add elements that contains menu courses
  const addCoursesToMenuPage = (courses) => {
    const div = document.createElement('div');
    Object.entries(courses).forEach( prop => {
      addPageDesc(prop[0], div);
      prop[1].forEach( serving => {
        const div1 = document.createElement('div');
        const h6 = document.createElement('h6');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        h6.appendChild(document.createTextNode(serving.title));
        div1.appendChild(h6);
        p1.appendChild(document.createTextNode(serving.description));
        div1.appendChild(p1);
        p2.appendChild(document.createTextNode(`Price: ${serving.price}Dh`));
        div1.appendChild(p2);
        div.appendChild(div1);
      } );
    } );
    getContentSelector().appendChild(div);
  }

  // render Menu page
  const renderMenu = (e) => {
    e.preventDefault();
    addContentDivToBody();
    addLinks('Home');
    addLinks('Menu');
    addLinks('Contact');
    // setLinksSelector();
    addPageTitle(menu.title());
    addCoursesToMenuPage(menu.courses);
  }

  // add elements that contains contact info
  const addContactInfoToContactPage = () => {
    const div = document.createElement('div');
    addPageDesc(contact.address(), div);
    addPageDesc(contact.telephone(), div);
    addPageDesc(contact.email(), div);
    getContentSelector().appendChild(div);
  } 

  // render Contact page
  const renderContact = (e) => {
    e.preventDefault();
    addContentDivToBody();
    addLinks('Home');
    addLinks('Menu');
    addLinks('Contact');
    // setLinksSelector();
    addPageTitle(contact.title());
    addContactInfoToContactPage();
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