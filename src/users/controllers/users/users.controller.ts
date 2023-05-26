import { Body, Controller, Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
// import { Request, Response } from 'express';

@Controller('users')
export class UsersController {

  @Get()
  getUsers(@Query('sortBy') sortBy: string) {
    console.log(sortBy)
    return { username: 'Eris', email: 'ee@ee.com' }
  }

  @Post('create')
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData)
    return {}
  }
  @Get(':id/:postId')
  getUserById(@Param('id') id: string) {
    console.log(id)
    return { id }
  }

  /* Post request Express way
  @Post()
  createUser(@Req() request: Request, @Res() response: Response) {
    console.log(request.body)
    response.send("Created")
  }
  */

  /*   get request examples
  @Get('posts')
  getUsersPost() {
    return [
      {
        username: 'Eris',
        email: 'ee@ee.com',
        posts: [
          {
            id: 1,
            description: 'Some text',
          },
          {
            id: 2,
            description: 'Some more text',
          },
        ]
      }
    ]
  }

  @Get('post/comments')
  getUsersPostComments() {
    return [
      {
        id: 1,
        title: 'some text',
        comments: ['Comment text']
      }
    ]
  }*/
}
