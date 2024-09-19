import { createId } from '@paralleldrive/cuid2'
import { date, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const psychologists = pgTable('psychologists', {
    id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
    name: text('name').notNull(),
    username: text('username').notNull().unique(),
    password: text('password').notNull(),
    permissions: text('permissions').notNull(),
    resetPasswordToken: text('reset_password_token'),
    resetPasswordExpires: timestamp('reset_password_expires'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull()
})

export const customers = pgTable('customers', {
    id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
        firstName: text('first_name').notNull(),
    lastName: text('last_name').notNull(),
    birthDate: date('birth_date').notNull(),
    document: text('document').notNull().unique(),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
    resetPasswordToken: text('reset_password_token'),
    resetPasswordExpires: timestamp('reset_password_expires'),
    about: text('about'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull()
});