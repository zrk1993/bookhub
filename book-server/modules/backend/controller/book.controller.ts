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

@Controller('/book')
@Description('book')
export class Book {

  @Get('/reader')
  @Render('index')
  async reader(@Ctx() ctx: Koa.Context) {
    return {
      bookPath: '/public/book/123.epub',
      bookName: '132',
      progress: '123123'
    };
  }

  @Get('/info')
  async info(@Ctx() ctx: Koa.Context) {
    return ResultUtils.success({
      bookPath: '/public/book/123.epub',
      bookName: '132',
      progress: '123123'
    });
  }

}
