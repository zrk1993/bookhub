import * as joi from 'joi';
import * as Koa from 'koa';
import * as fs from 'fs'
import * as path from 'path'
import { Controller, Get, QuerySchame, Query, Ctx, Post, BodySchame, Body, Description, Render } from '@/common/application';
import { SYS_ROLE } from '@/utils/enums';
import { ResultUtils } from '@/utils/result-utils';
import db from '@/utils/db';
import * as Lock from '@/utils/lock';
import md5 from '@/utils/md5';
import * as appJwt from '@/middleware/app-jwt';
import Role from '@/decorators/role';
import CurUser from '@/decorators/cur-user';
import BookModel from '@/model/book'

@Controller('/book')
@Description('book')
export class Book {
  
  @Get('/info')
  async info(@Ctx() ctx: Koa.Context) {
    const title = ctx.request.query.title || ctx.request.query.book_id
    return ResultUtils.success({
      file_path: '/public/book/' + title,
    });
  }

  @Get('/list')
  async list(@Ctx() ctx: Koa.Context) {
    var files = fs.readdirSync(path.join(__dirname, '../../', '/public/book'));
    const result = files.map(v => {
      return { title: v };
    })
    return ResultUtils.success(result)
  }

  @Post('/upload')
  async upload(@Ctx() ctx: any) {
    const file = ctx.request.files.file;   // 获取上传文件
    const reader = fs.createReadStream(file.path);  // 创建可读流
    const [name, ext] = file.name.replace(/\/\\/g, '').split('.');     // 获取上传文件扩展名
    if (ext !== 'epub') {
      return ResultUtils.badRequest('仅支持.Epub文件')
    }
    const pt = `/public/book/${name}.${ext}`
    const upStream = fs.createWriteStream(path.join(__dirname, '../../', pt));     // 创建可写流
    reader.pipe(upStream);  // 可读流通过管道写入可写流
    return ResultUtils.success()
  }

  @Post('/remove')
  async remove(@Ctx() ctx: Koa.Context) {
    const title = ctx.request.body.title;
    const [name, ext] = title.replace(/\/\\/g, '').split('.');     // 获取上传文件扩展名
    if (ext !== 'epub') {
      return ResultUtils.badRequest('仅支持.Epub文件')
    }
    fs.unlinkSync(path.join(__dirname, '../../', '/public/book', title))
    return ResultUtils.success()
  }

}
