import { SetMetadata } from '@nestjs/common';
import { ROLE_PERMISSION } from 'src/users/entities/users.schema';
export const ROLES_KEY = 'roles';
export const Roles = (...role: ROLE_PERMISSION[]) => SetMetadata(ROLES_KEY, role);
