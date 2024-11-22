import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            login: jest.fn(),
            refreshToken: jest.fn(),
          }
        }
      ]
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });


  it('Auth login should call login function', async () => {
    // Arrange
    const user = { id: 1, email: '' };
    const req = { user };
    const loginSpy = jest.spyOn(authService, 'login').mockResolvedValue({} as any);

    // Act
    await controller.login(req);

    // Assert
    expect(loginSpy).toHaveBeenCalledWith(user);
  })
  it('Auth refresh token should call refreshtoken function', async () => {
    // Arrange
    const header = {
      'Authorization': 'Bearer hello-world'
    }
    const req = { header };
    const refreshTokenSpy = jest.spyOn(authService, 'refreshToken').mockResolvedValue({} as any);

    // Act
    await controller.refreshToken(req);

    // Assert
    expect(refreshTokenSpy).toHaveBeenCalledWith(req);
  })
});
