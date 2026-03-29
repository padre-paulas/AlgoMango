import { pgTable, serial, text, integer, timestamp, pgEnum } from 'drizzle-orm/pg-core';

// Pro-tip: Use Enums for fixed values like transaction types
export const statusEnum = pgEnum('status', ['pending', 'success', 'failed']);

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  clerkId: text('clerk_id').unique().notNull(), // Connects to your Auth provider
  email: text('email').notNull(),
});

export const transactions = pgTable('transactions', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id).notNull(),
  amount: integer('amount').notNull(), // Store in cents (e.g., 1000 = $10.00)
  status: statusEnum('status').default('pending'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});