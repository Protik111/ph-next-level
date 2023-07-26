import { NextFunction, Request, Response } from "express";
import { getAllBooks, getBooksByPublisher, getFeaturedBooks } from "./book.service";

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

export const featuredBooks = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const featuredBooks = await getFeaturedBooks();
    res.status(200).json({
        success: true,
        data: featuredBooks
    })
}