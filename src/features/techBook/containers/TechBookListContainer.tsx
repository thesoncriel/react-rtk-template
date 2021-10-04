import { FC } from 'react';
import { useSelector } from 'react-redux';
import { TechBookList } from '../components/TechBookList';
import { selTechBookItems } from '../stores/techBook.selector';

interface TechBookListContainerProps {}

export const TechBookListContainer: FC<TechBookListContainerProps> = () => {
  const items = useSelector(selTechBookItems);

  return <TechBookList items={items} />;
};
