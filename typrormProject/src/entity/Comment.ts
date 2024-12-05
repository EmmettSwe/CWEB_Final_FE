import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm"
import {IsNotEmpty, IsOptional, MinLength} from "class-validator";

@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    @IsOptional()
    commentID: number

    @Column({nullable:false})
    @IsNotEmpty()
    recipeID: number

    @Column({nullable:false})
    @IsNotEmpty()
    userID: number

    @Column({nullable:false})
    @MinLength(2)
    commentText: string

    @CreateDateColumn({nullable: false})
    uploadDate: Date
}
