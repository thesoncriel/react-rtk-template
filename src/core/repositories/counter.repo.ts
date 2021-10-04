import { CounterEntity } from '../entities/counter.entity';

export const counterRepository = {
  fetchCount(amount = 1) {
    return new Promise<CounterEntity>((resolve) =>
      setTimeout(() => resolve({ data: amount }), 500),
    );
  },
};
