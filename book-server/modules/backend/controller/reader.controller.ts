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
import ReadProgressModel from '@/model/read-progress'
import ApperanceModel from '@/model/apperance'

@Controller('/reader')
@Description('reader')
export class reader {

  @Get('/progress')
  async getProgress(@Ctx() ctx: Koa.Context) {
    const progress = await ReadProgressModel.getByBookId(ctx.query.book_id);
    return ResultUtils.success(progress)
  }

  @Post('/progress/up')
  @BodySchame({
    book_id: joi.any(),
    percentage: joi.any().required(),
    cfi: joi.any().required(),
    href: joi.any().required(),
  })
  async upProgress(@Ctx() ctx: Koa.Context, @Body() body: any) {
    if (body.book_id) {
      const progress = await ReadProgressModel.getByBookId(body.book_id);
      await ReadProgressModel.updateById(body.book_id, Object.assign(progress, body))
    } else {
      await ReadProgressModel.insert({
        ...body
      })
    }
    return ResultUtils.success()
  }

  @Get('/appearance')
  async getAppearance(@Ctx() ctx: Koa.Context) {
    // const appearance = await ApperanceModel.getById(ctx.query.id);
    // if (appearance) {
    //   return ResultUtils.success(appearance)
    // }

    return ResultUtils.success({
      code: 'dark',
      background: '#3a3f42',
      color: '#b6b9bb',
      font_size: '18px',
    })

    return ResultUtils.success({
      code: 'dark',
      background: '#1a1a1a',
      color: 'rgba(255,255,255,.6)',
      font_size: '18px',
    })

    return ResultUtils.success({
      code: 'default',
      color: '#000',
      font_size: '20px',
      background: '#c4b395 url(/public/image/theme/skin-default.jpg) no-repeat center'
    });
  }

  @Post('/appearance/up')
  @BodySchame({
    id: joi.any(),
    code: joi.any().required(),
    background: joi.any().required(),
    color: joi.any().required(),
    font_size: joi.any().required(),
  })
  async upAppearance(@Ctx() ctx: Koa.Context, @Body() body: any) {
    if (body.id) {
      const appearance = await ApperanceModel.getById(body.id);
      await ApperanceModel.updateById(body.id, Object.assign(appearance, body))
    } else {
      await ApperanceModel.insert({
        ...body
      })
    }
    return ResultUtils.success()
  }

}
