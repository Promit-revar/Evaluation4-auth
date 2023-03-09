const authController = require("../../src/controllers/authController");
const authServices = require("../../src/services/authServices");
describe("authController", () => {
  describe("register", () => {
    it("should return 200 and user object", async () => {
      const resolvedValue = {
        "id": 13,
        "username": "Promit2211",
        "password": "$2b$10$DrOpSrLUBaXJHvaNDmZ4u.Wvz7fZo8u0.sIrGRs9s75DGtPZ6paA2",
        "updatedAt": "2023-03-09T05:16:16.791Z",
        "createdAt": "2023-03-09T05:16:16.791Z"
    }
      const mockReq = {
        body: {
          username : "Promit2211",
          password: "testpassword",
        },
      };
      jest.spyOn(authServices, "addUser").mockResolvedValue(resolvedValue);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await authController.register(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith(resolvedValue);
    });
    it("should return 401 and error message", async () => {
      const rejectedValue = {
        "error": "\"password\" length must be at least 8 characters long"
    }
      const mockReq = {
        body: {
          username: "Promit2211",
          password: "k",
        },
      };
      jest.spyOn(authServices, "addUser").mockRejectedValue(rejectedValue);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await authController.register(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith(rejectedValue);
    });
  });
  describe("login", () => {
    it("should return 200 and user object", async () => {
      const resolvedValue ={
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlByb21pdDIyMTEiLCJpYXQiOjE2NzgzNDA0NTEsImV4cCI6MTY3ODQyNjg1MX0.V7B6O8qclf-gPmLHfPoaG6Ec39ii8EdF4wx7hQbXW-Y",
        "success": true
      };
      const mockReq = {
        body: {
            "username":"Promit2211",
            "password":"testing5"
        }
      };
      jest.spyOn(authServices, "loginVerification").mockResolvedValue(resolvedValue);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await authController.login(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith(resolvedValue);
    });
    it("should return 400 and error message", async () => {
      const rejectedValue = "";
      const mockReq = {
        body: {
          username: "poosarlagaurav@gmail.com",
          password: "123456",
        },
      };
      jest.spyOn(authServices, "login").mockRejectedValue(rejectedValue);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await authController.login(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalled();
    });
  });
  describe("validate", () => {
    it("should return 200 and user object", async () => {
      const resolvedValue = true;
      const mockReq = {
        headers: {
          authorization: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdhdXJhdkBtY2tpbnNleS5jb20iLCJ0aW1lc3RhbXAiOjE2NzgyOTE3NjY1ODEsImlhdCI6MTY3ODI5MTc2Nn0.389BGTNFs4r-TVJ7qd6KAvFP80LDVRpVjfBBnp0rhPE",
          },
        },
      };
      jest.spyOn(authServices, "validate").mockResolvedValue(resolvedValue);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await authController.validate(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith(resolvedValue);
    });
    it("should return 400 and error message", async () => {
      const rejectedValue = "";
      const mockReq = {
        headers: {
          authorization: {
            token: "",
          },
        },
      };
      jest.spyOn(authServices, "validate").mockRejectedValue(rejectedValue);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await authController.validate(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalled();
    });
  });
});


