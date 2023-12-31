"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const roles_decorator_1 = require("./../auth/decorators/roles.decorator");
const reset_password_dto_1 = require("./dto/reset-password.dto");
const create_forgot_password_dto_1 = require("./dto/create-forgot-password.dto");
const login_user_dto_1 = require("./dto/login-user.dto");
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("./dto/create-user.dto");
const verify_uuid_dto_1 = require("./dto/verify-uuid.dto");
const user_service_1 = require("./user.service");
const passport_1 = require("@nestjs/passport");
const refresh_access_token_dto_1 = require("./dto/refresh-access-token.dto");
const swagger_1 = require("@nestjs/swagger");
const roles_guard_1 = require("src/auth/guards/roles.guard");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    register(createUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.create(createUserDto);
        });
    }
    verifyEmail(req, verifyUuidDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.verifyEmail(req, verifyUuidDto);
        });
    }
    login(req, loginUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.login(req, loginUserDto);
        });
    }
    refreshAccessToken(refreshAccessTokenDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.refreshAccessToken(refreshAccessTokenDto);
        });
    }
    forgotPassword(req, createForgotPasswordDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.forgotPassword(req, createForgotPasswordDto);
        });
    }
    forgotPasswordVerify(req, verifyUuidDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.forgotPasswordVerify(req, verifyUuidDto);
        });
    }
    resetPassword(resetPasswordDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.resetPassword(resetPasswordDto);
        });
    }
    findAll() {
        return this.userService.findAll();
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiOperation({ title: 'Register user', }),
    swagger_1.ApiCreatedResponse({}),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "register", null);
__decorate([
    common_1.Post('verify-email'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOperation({ title: 'Verify Email', }),
    swagger_1.ApiOkResponse({}),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, verify_uuid_dto_1.VerifyUuidDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "verifyEmail", null);
__decorate([
    common_1.Post('login'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOperation({ title: 'Login User', }),
    swagger_1.ApiOkResponse({}),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, login_user_dto_1.LoginUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    common_1.Post('refresh-access-token'),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiOperation({ title: 'Refresh Access Token with refresh token', }),
    swagger_1.ApiCreatedResponse({}),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [refresh_access_token_dto_1.RefreshAccessTokenDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "refreshAccessToken", null);
__decorate([
    common_1.Post('forgot-password'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOperation({ title: 'Forgot password', }),
    swagger_1.ApiOkResponse({}),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_forgot_password_dto_1.CreateForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "forgotPassword", null);
__decorate([
    common_1.Post('forgot-password-verify'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOperation({ title: 'Verfiy forget password code', }),
    swagger_1.ApiOkResponse({}),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, verify_uuid_dto_1.VerifyUuidDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "forgotPasswordVerify", null);
__decorate([
    common_1.Post('reset-password'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOperation({ title: 'Reset password after verify reset password', }),
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiImplicitHeader({
        name: 'Bearer',
        description: 'the token we need for auth.'
    }),
    swagger_1.ApiOkResponse({}),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_password_dto_1.ResetPasswordDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "resetPassword", null);
__decorate([
    common_1.Get('data'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    roles_decorator_1.Roles('admin'),
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiOperation({ title: 'A private route for check the auth', }),
    swagger_1.ApiImplicitHeader({
        name: 'Bearer',
        description: 'the token we need for auth.'
    }),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({}),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAll", null);
UserController = __decorate([
    swagger_1.ApiUseTags('User'),
    common_1.Controller('user'),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map