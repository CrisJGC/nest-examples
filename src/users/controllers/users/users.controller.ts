import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {

  @Get()
  getUsers() {
    return { username: 'Eris', email: 'ee@ee.com' }
  }

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
  }
}
