import { applyDecorators, HttpStatus } from '@nestjs/common';
import { Doc, DocPaging } from 'src/common/doc/decorators/doc.decorator';
import { ResponseIdSerialization } from 'src/common/response/serializations/response.id.serialization';
import {
    UserDocParamsGet,
    UserDocQueryBlocked,
    UserDocQueryIsActive,
} from 'src/modules/user/constants/user.doc.constant';
import { UserGetSerialization } from 'src/modules/user/serializations/user.get.serialization';
import { UserListSerialization } from 'src/modules/user/serializations/user.list.serialization';

export function UserAdminListDoc(): MethodDecorator {
    return applyDecorators(
        DocPaging<UserListSerialization>('user.list', {
            auth: {
                jwtAccessToken: true,
            },
            request: {
                queries: [...UserDocQueryIsActive, ...UserDocQueryBlocked],
            },
            response: {
                serialization: UserListSerialization,
            },
        })
    );
}

export function UserAdminGetDoc(): MethodDecorator {
    return applyDecorators(
        Doc<UserGetSerialization>('user.get', {
            auth: {
                jwtAccessToken: true,
            },
            request: {
                params: UserDocParamsGet,
            },
            response: { serialization: UserGetSerialization },
        })
    );
}

export function UserAdminCreateDoc(): MethodDecorator {
    return applyDecorators(
        Doc<ResponseIdSerialization>('user.create', {
            auth: {
                jwtAccessToken: true,
            },
            response: {
                httpStatus: HttpStatus.CREATED,
                serialization: ResponseIdSerialization,
            },
        })
    );
}

export function UserAdminUpdateDoc(): MethodDecorator {
    return applyDecorators(
        Doc<ResponseIdSerialization>('user.update', {
            auth: {
                jwtAccessToken: true,
            },
            request: {
                params: UserDocParamsGet,
            },
            response: { serialization: ResponseIdSerialization },
        })
    );
}

export function UserAdminDeleteDoc(): MethodDecorator {
    return applyDecorators(
        Doc<void>('user.delete', {
            auth: {
                jwtAccessToken: true,
            },
            request: {
                params: UserDocParamsGet,
            },
        })
    );
}

export function UserAdminImportDoc(): MethodDecorator {
    return applyDecorators(
        Doc<void>('user.import', {
            auth: {
                jwtAccessToken: true,
            },
            response: {
                httpStatus: HttpStatus.CREATED,
            },
        })
    );
}

export function UserAdminExportDoc(): MethodDecorator {
    return applyDecorators(
        Doc('user.export', {
            auth: {
                jwtAccessToken: true,
            },
            response: {
                httpStatus: HttpStatus.OK,
            },
        })
    );
}

export function UserAdminActiveDoc(): MethodDecorator {
    return applyDecorators(
        Doc<void>('user.active', {
            auth: {
                jwtAccessToken: true,
            },
            request: {
                params: UserDocParamsGet,
            },
        })
    );
}

export function UserAdminInactiveDoc(): MethodDecorator {
    return applyDecorators(
        Doc<void>('user.inactive', {
            auth: {
                jwtAccessToken: true,
            },
            request: {
                params: UserDocParamsGet,
            },
        })
    );
}

export function UserAdminBlockedDoc(): MethodDecorator {
    return applyDecorators(
        Doc<void>('user.blocked', {
            auth: {
                jwtAccessToken: true,
            },
            request: {
                params: UserDocParamsGet,
            },
        })
    );
}
