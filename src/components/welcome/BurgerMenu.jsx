import React from 'react';
import { Link } from 'react-scroll';

const BurgerMenu = ({ closeMenu }) => {
  return (
    <div className="burger-menu active">
      <ul>
        {['about', 'services', 'benefits', 'FAQ', 'reviews', 'contacts'].map(section => (
          <li className="a_burgerr" key={section}>
            <Link
              className="a"
              to={section}
              spy
              smooth
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              {{
                about: 'ОБО МНЕ',
                services: 'УСЛУГИ',
                FAQ: 'FAQ',
                reviews: 'ОТЗЫВЫ',
                contacts: 'КОНТАКТЫ',
                benefits: 'ПРЕИМУЩЕСТВА',
              }[section]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerMenu;
