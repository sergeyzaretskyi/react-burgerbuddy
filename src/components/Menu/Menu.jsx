import { useEffect, useState } from 'react';
import styles from './Menu.module.scss';
import { Categories } from '../Categories/Categories';
import { BurgersSection } from '../BurgersSection/BurgersSection';

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [menuObject, setMenuObject] = useState({});
  const [menuCategories, setMenuCategories] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/burgers.json');
        const data = await res.json();

        setMenuObject(data);
        setMenuCategories(Object.keys(data.menu));
      } catch (error) {
        console.log(error);
      } finally {
        setIsDataLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <Categories {...{ activeCategory, setActiveCategory, menuCategories }} />

      <BurgersSection
        {...{ activeCategory, menuCategories, menuObject, isDataLoading }}
      />
    </main>
  );
};
