'use server';

import { EntityActionBuilder } from '@/admin-builder/action-builder';
import { entityConfig } from './config';
import { dbClient } from '@/server/db-client';

export const userAction = EntityActionBuilder.init({
  config: entityConfig,
  dbClient,
});
