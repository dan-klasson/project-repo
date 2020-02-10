import { Args, Query, Resolver } from '@nestjs/graphql';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Int } from 'type-graphql';

import { Project } from './project.entity';

@Resolver(of => Project)
export class ProjectResolver {
    constructor(
        @InjectRepository(Project)
        private readonly projectRepository: Repository<Project>,
    ) {
    }

    @Query(returns => Project)
    async project(@Args({name: 'id', type: () => Int}) id: number) {
        return this.projectRepository.findOneOrFail(id);
    }

    @Query(returns => [Project])
    async projects() : Promise<Project[]> {
        return this.projectRepository.find();
    }
}
