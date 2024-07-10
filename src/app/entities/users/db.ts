import { EntityDbBuilder } from '@/admin-builder/db-builder';
import { entityConfig } from './config';
import { dbClient } from '@/server/db-client';

export const UserDbSchema = EntityDbBuilder.init({
  config: entityConfig,
  dbClient,
});
