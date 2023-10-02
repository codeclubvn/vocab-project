import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLE_PERMISSION } from 'src/users/schema/users.schema';
import { ROLES_KEY } from './roles.decorator';
import { CreateLogger } from 'src/commons/logger/index.logger';
import { Request } from 'express';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<ROLE_PERMISSION[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    const request: Request = context.switchToHttp().getRequest();
    CreateLogger(request.headers.authorization, requiredRoles);

    if (!requiredRoles) {
      return true;
    }

    return true;
    // return requiredRoles.some((role) => user.roles?.includes(role));
  }
  
}
