import home from './home';
import menu from './menu';
import contact from './contact';
import './style.css';

const dom = (() => {
  const selectors = {
    body: document.querySelector('body'),
  };

  // Selector for the new created content div
  const setContentSelector = (content) => {
    selectors.content = content;
  };

  const getContentSelector = () => selectors.content;

  // Add div tag inside body as the first child
  const addContentDivToBody = () => {
    const div = document.createElement('div');
    div.setAttribute('id', 'content');
    selectors.body.insertBefore(div, selectors.body.firstChild);
    // Setting a selector for the new created div
    setContentSelector(selectors.body.firstChild);
  };

  // Add 3 links (home, menu & contact) for instant tabing
  const addLinks = (text, i) => {
    const a = document.createElement('a');
    a.setAttribute('href', '');
    // used for styling
    a.setAttribute('id', text.toLowerCase() + i);
    // used for event listenning
    a.setAttribute('class', text.toLowerCase());
    a.appendChild(document.createTextNode(text));
    getContentSelector().appendChild(a);
  };

  // Add page title inside content
  const addPageTitle = (title, tag) => {
    const element = document.createElement(tag);
    element.appendChild(document.createTextNode(title));
    getContentSelector().appendChild(element);
  };
  // Add a brief description after page title
  const addPageDesc = (description, element, id) => {
    const h5 = document.createElement('h5');
    h5.appendChild(document.createTextNode(description));
    h5.setAttribute('id', id);
    element.appendChild(h5);
  };

  // empty page data for a re-render
  const refreshPage = () => {
    getContentSelector().parentNode.removeChild(getContentSelector());
  };

  // render home page
  const renderHome = (e) => {
    e.preventDefault();
    addContentDivToBody();
    addPageTitle(home.title(), 'h1');
    addPageDesc(home.description(), getContentSelector(), 'home-title');
    addLinks('Menu', 1);
    addLinks('Contact', 1);
  };

  // add elements that contains menu courses
  const addCoursesToMenuPage = (courses) => {
    const div = document.createElement('div');
    div.setAttribute('id', 'courses');
    Object.entries(courses).forEach((prop, i) => {
      addPageDesc(prop[0], div, `course-${i + 1}`);
      prop[1].forEach(serving => {
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
        // div1.setAttribute('id', `serving${i + 1}-${j}`)
        div.appendChild(div1);
      });
    });
    getContentSelector().appendChild(div);
  };

  // render Menu page
  const renderMenu = (e) => {
    e.preventDefault();
    addContentDivToBody();
    addLinks('Home', 2);
    addLinks('Contact', 2);
    addPageTitle(menu.title(), 'h2');
    addCoursesToMenuPage(menu.courses);
  };

  // add elements that contains contact info
  const addContactInfoToContactPage = () => {
    const div = document.createElement('div');
    addPageDesc(contact.address(), div, 'contact-address');
    addPageDesc(contact.telephone(), div, 'contact-tel');
    addPageDesc(contact.email(), div, 'contact-email');
    div.setAttribute('id', 'contact-card');
    getContentSelector().appendChild(div);
  };

  // render Contact page
  const renderContact = (e) => {
    e.preventDefault();
    addContentDivToBody();
    addLinks('Home', 3);
    addLinks('Menu', 3);
    addPageTitle(contact.title(), 'h2');
    addContactInfoToContactPage();
  };

  // render the page according to the dispatched event
  // renders on load home page, on links clicks home page, menu & contact

  const renderOnPageLoad = () => {
    document.addEventListener('DOMContentLoaded', renderHome, { once: true });
  };

  const homeDispatcher = () => {
    document.addEventListener('click', (e) => {
      if (e.target && e.target.className === 'home') {
        refreshPage();
        renderHome(e);
      }
    });
  };

  const menuDispatcher = () => {
    document.addEventListener('click', (e) => {
      if (e.target && e.target.className === 'menu') {
        refreshPage();
        renderMenu(e);
      }
    });
  };

  const contactDispatcher = () => {
    document.addEventListener('click', (e) => {
      if (e.target && e.target.className === 'contact') {
        refreshPage();
        renderContact(e);
      }
    });
  };

  // assemble all previous render methods into one
  const render = () => {
    renderOnPageLoad();
    homeDispatcher();
    menuDispatcher();
    contactDispatcher();
  };

  return { render };
})();

dom.render();