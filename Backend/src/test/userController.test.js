const SequelizeMock = require('sequelize-mock');
const userController = require('../controller/userController');

// Setup Sequelize mock instance
const dbMock = new SequelizeMock();
const UserMock = dbMock.define('users', {
  userId: 1,
  username: 'john_doe',
  email: 'john.doe@example.com',
  password: 'hashed_password',
  role: 'admin',
});

// Mock the Users model with Jest
jest.mock('../model/userSchema', () => ({
    create: jest.fn((userData) => Promise.resolve({ ...userData, userId: 2 })),
    destroy: jest.fn(() => Promise.resolve(1)), // Simulating 1 row deleted
    findAll: jest.fn(() =>
      Promise.resolve([
        { userId: 1, username: 'john_doe', email: 'john.doe@example.com' },
      ])
    ),
  }));
  
  // ✅ Import AFTER the mock is set up
  const Users = require('../model/userSchema'); 
//   const userController = require('../controller/userController');

describe('User Controller', () => {
    let req, res;
  
    beforeEach(() => {
        req = {}; 
        res = {
          status: jest.fn().mockReturnThis(),
          json: jest.fn(),
          send: jest.fn(), // Add this line
        };
      });
  
    it('should create a user successfully', async () => {
      req.body = {
        username: 'john_doe',
        email: 'john.doe@example.com',
        password: 'password123',
      };
  
      await userController.create(req, res);
  
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'successfully created user',
          data: expect.objectContaining({
            username: 'john_doe',
            email: 'john.doe@example.com',
          }),
        })
      );
    });
  
    it('should delete a user successfully', async () => {
      req.params = { id: 1 };
  
      await userController.deleteUser(req, res);
  
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ message: 'User deleted successfully' })
      );
    });
  
    it('should get all users successfully', async () => {
      await userController.getAllUsers(req, res);
  
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.arrayContaining([
            expect.objectContaining({
              username: 'john_doe',
              email: 'john.doe@example.com',
            }),
          ]),
        })
      );
    });
  });
  