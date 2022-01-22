import React from 'react';
import styles from '../styles/nav.module.css'
const Nav = () => {
  return <div>
        <nav className={styles.navPrimaray}>
    <div className={"nav-wrapper"}>
    <ul id="nav-mobile" class="left hide-on-med-and-down">
      <li >
          <div className={styles.navPrimarayFlex}>
         <h6>Book My Show</h6>
         <div className={styles.navSearch}>
             <input/>
         </div>
         </div>
     </li>
     </ul>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
    
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
       <nav className={styles.navSec}>
    <div className={"nav-wrapper"}>
      {/* <a href="#" class="brand-logo">Logo</a> */}
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
  </div>;
};

export default Nav;
