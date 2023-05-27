import { Module } from '@nestjs/common';
import { RoleService } from './services/role.service';
import { RoleRepositoryModule } from 'src/modules/role/repository/role.repository.module';

@Module({
    controllers: [],
    providers: [RoleService],
    exports: [RoleService],
    imports: [RoleRepositoryModule],
})
export class RoleModule {}
