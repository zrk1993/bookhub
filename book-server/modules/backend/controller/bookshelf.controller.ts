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

@Controller('/bookshelf')
@Description('bookshelf')
export class Bookshelf {

  @Get('/list')
  async logout(@Ctx() ctx: Koa.Context) {
    return ResultUtils.success({
      data: [{
        cover: 'https://bookcover.yuewen.com/qdbimg/349573/c_19151894208405704/150',
        title: '元尊',
        author: '天蚕土豆',
        source: '浙江网友',
        desc: '天地万物阿瓦达阿瓦达我的阿瓦达安慰的阿瓦达ad'
      },
      {
        cover: 'https://bookcover.yuewen.com/qdbimg/349573/c_19151894208405704/150',
        title: '元尊',
        author: '天蚕土豆',
        source: '浙江网友',
        desc: '天地万物阿瓦达阿瓦达我的阿瓦达安慰的阿瓦达ad'
      },
      {
        cover: 'https://bookcover.yuewen.com/qdbimg/349573/c_19151894208405704/150',
        title: '元尊',
        author: '天蚕土豆',
        source: '浙江网友',
        desc: '天地万物阿瓦达阿瓦达我的阿瓦达安慰的阿瓦达ad'
      },
      {
        cover: 'https://bookcover.yuewen.com/qdbimg/349573/c_19151894208405704/150',
        title: '元尊',
        author: '天蚕土豆',
        source: '浙江网友',
        desc: '天地万物阿瓦达阿瓦达我的阿瓦达安慰的阿瓦达ad'
      },{
        cover: 'https://bookcover.yuewen.com/qdbimg/349573/c_19151894208405704/150',
        title: '元尊',
        author: '天蚕土豆',
        source: '浙江网友',
        desc: '天地万物阿瓦达阿瓦达我的阿瓦达安慰的阿瓦达ad'
      }]
    })
  }

}
