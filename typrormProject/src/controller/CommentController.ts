import {AppDataSource} from "../data-source";
import {Comment} from "../entity/Comment";
import {NextFunction, Request, Response} from "express";
import {validate} from "class-validator";
import {Recipe} from "../entity/Recipe";


export class CommentController {

    private commentRepository = AppDataSource.getRepository(Comment);

    async all(req: Request, res: Response, next: NextFunction) {
        const recipeID = parseInt(req.params.id);

        return this.commentRepository.find({
            where: {recipeID}
        });
    }

    async create(req: Request, res: Response, next: NextFunction) {
        const { recipeID, commentText } = req.body;

        if (!req.user) {
            res.status(401).json({message: "Unauthorized: Must be signed in to create a recipe"})
            return
        }

        const userID = req.user.userID

        const commentToAdd = Object.assign(new Comment(), {
            recipeID,
            userID,
            commentText
        });

        if (!await AppDataSource.getRepository(Recipe).exists(recipeID)) {
            res.status(404).json({message: "Recipe not found"})
            return;
        }

        const validationResult = await validate(commentToAdd);

        if (validationResult.length > 0) {
            return validationResult
        }

        await this.commentRepository.save(commentToAdd);
        res.json({message: "Comment has been created"})
    }

    async update(req: Request, res: Response, next: NextFunction) {
        const { recipeID, commentText, userID } = req.body
        const commentID = parseInt(req.params.id);

        const commentToUpdate = Object.assign(new Comment(), {
            commentID,
            recipeID,
            userID,
            commentText
        })

        if (!req.user || req.user.userID !== userID)
        {
            res.status(401).json({message: "Unauthorized: Cannot update other user's comments"})
            return
        }

        const validationResult = await validate(commentToUpdate);

        if (validationResult.length > 0) {
            return validationResult
        }
        await this.commentRepository.save(commentToUpdate);

        res.json({message: "Comment has been updated"})
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        const commentID = parseInt(req.params.id)

        const commentToDelete = await this.commentRepository.findOneBy({commentID});

        if (!commentToDelete)
        {
            res.status(404).json({message: "Recipe not found"})
            return;
        }

        if (!req.user || req.user.userID !== commentToDelete.userID)
        {
            res.status(401).json({message: "Unauthorized: Cannot delete other user's comments"})
            return;
        }

        await this.commentRepository.remove(commentToDelete)
        res.json({message: "Comment has been deleted"})
    }

}