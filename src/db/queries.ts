import { db } from './index';
import { transactions } from './schema';

export async function getTransactions() {
  return await db.select().from(transactions);
}