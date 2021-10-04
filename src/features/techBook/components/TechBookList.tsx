import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { FC, useMemo } from 'react';
import { TechBookModel } from '../models';

interface TechBookListProps {
  items: TechBookModel[];
}

function renderColumns() {
  const result: ColumnsType<TechBookModel> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '제목',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '저자',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: '출판연도',
      dataIndex: 'year',
      key: 'year',
      render: (year) => {
        return <>{year}</>;
      },
    },
  ];

  return result;
}

export const TechBookList: FC<TechBookListProps> = ({ items }) => {
  const columns = useMemo(renderColumns, []);

  return <Table columns={columns} dataSource={items} />;
};
