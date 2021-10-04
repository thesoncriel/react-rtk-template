import { FC, useEffect } from 'react';
import { useQueryParams } from 'ts-fe-toolkit';
import { PageContainer, TechBookListContainer } from '../containers';
import { useDispatch } from 'react-redux';
import { effTechBookLoadList } from '../stores/techBook.effect';

interface TechBookPageQueries {
  keyword: string;
}

function selQueries(queries: Record<string, string>) {
  const result: TechBookPageQueries = {
    keyword: queries.keyword || '뉴턴',
  };
  return result;
}

const TechBookPage: FC = () => {
  const dispatch = useDispatch();
  const { keyword } = useQueryParams(selQueries);

  useEffect(() => {
    dispatch(
      effTechBookLoadList({
        keyword,
      }),
    );
  }, []);

  return (
    <PageContainer title="도서관 책목록">
      <TechBookListContainer />
    </PageContainer>
  );
};

export default TechBookPage;
