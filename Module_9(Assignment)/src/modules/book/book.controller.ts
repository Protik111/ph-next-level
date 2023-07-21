import { NextFunction, Request, Response } from "express";
import { getAllBooks, getBooksByPublisher } from "./book.service";

export const findBooks = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const books = await getAllBooks();

    res.status(200).json({
        success: true,
        data: books
    })
}

export const findBooksByPublisher = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const books = await getBooksByPublisher();
    res.status(200).json({
        success: true,
        data: books
    })
}