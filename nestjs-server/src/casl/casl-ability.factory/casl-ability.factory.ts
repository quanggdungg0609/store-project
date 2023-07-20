import { PureAbility, InferSubjects, AbilityClass, AbilityBuilder } from "@casl/ability";
import { User } from "@prisma/client";
import { Action } from "../enum";
import { Injectable } from "@nestjs/common";

type Subjects= InferSubjects<User> |"all"

export type AppAbility = PureAbility<[Action, Subjects]>

@Injectable()
export class CaslAbilityFactory {
    createForUser(user: User){
        const {can, cannot, build}= new AbilityBuilder<PureAbility<[Action, Subjects]>>(PureAbility as AbilityClass<AppAbility>)
        if (user.role==="admin"){
            can(Action.Manage, "all")
        }
    }
}
//TODO: need to update