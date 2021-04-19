import * as joi from 'joi';
import * as Koa from 'koa';
import { Controller, Get, QuerySchame, Query, Ctx, Post, BodySchame, Body, Description, Render } from '@/common/application';
import { SYS_ROLE } from '@/utils/enums';
import { ResultUtils } from '@/utils/result-utils';
import db from '@/utils/db';
import * as Lock from '@/utils/lock';
import md5 from '@/utils/md5';
import * as appJwt from '@/middleware/app-jwt';
import Role from '@/decorators/role';
import CurUser from '@/decorators/cur-user';

@Controller('/reader')
@Description('reader')
export class reader {

  @Get('/appearance')
  async theme(@Ctx() ctx: Koa.Context) {

    return ResultUtils.success({
      code: 'dark',
      background: '#1a1a1a',
      color: 'rgba(255,255,255,.5)',
      fontSize: '14px',
    })

    return ResultUtils.success({
      code: 'default',
      color: '#000',
      fontSize: '14px',
      background: '#c4b395 url(/public/image/theme/skin-default.jpg) no-repeat center'
    });
  }

}
