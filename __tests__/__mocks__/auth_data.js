let username = 'Promit2211';
const testdata = [
  {
    "id": 13,
    "username": "Promit2211",
    "password": "$2b$10$DrOpSrLUBaXJHvaNDmZ4u.Wvz7fZo8u0.sIrGRs9s75DGtPZ6paA2",
    "updatedAt": "2023-03-09T05:16:16.791Z",
    "createdAt": "2023-03-09T05:16:16.791Z"
  }
];
const register = {
  mockRes: {
    json: jest.fn(),
    status: jest.fn().mockReturnThis(),
  },
  mockReq: {
    body: {
      username: username,
      password: "test",
    },  
  },
  resolvedValue: testdata[0],
};
const login = {
  mockRes: {
    json: jest.fn(),
    status: jest.fn().mockReturnThis(),
  },
  mockReq: {
    body: {
      username: username,
      password: 'test',
    },
  },
  resolvedValue: testdata[0],
};
const accessToken = {
  mockRes: {
    json: jest.fn(),
    status: jest.fn().mockReturnThis(),
  },
  mockReq: {
    body: {
      email: testEmail,
      password: 'test',
    },
  },
  resolvedValue: {
    data: testdata[0],
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByb21pdC5yZXZhcjIyMTFAZ21haWwuY29tIiwiaWF0IjoxNjc1OTYyOTI3LCJleHAiOjE2NzU5NjY1Mjd9.Ve6AIDZWdbq4ptj-fceQHXns4g_PLeD2KYwtgSpfhu4',
    success: true,
    message: 'Login successful',
  },
};
const wrongPassword = {
  mockRes: {
    json: jest.fn(),
    status: jest.fn().mockReturnThis(),
  },
  mockReq: {
    body: {
      email: testEmail,
      password: 't',
    },
  },
};
const wrongEmail = {
  mockRes: {
    json: jest.fn(),
    status: jest.fn().mockReturnThis(),
  },
  mockReq: {
    body: {
      email: testEmail,
      password: 't',
    },
  },
};
module.exports = {
  register,
  login,
  accessToken,
  wrongPassword,
  wrongEmail,
};