import { ICorrectAnswers } from "../interfaces/IQuestions";

export default function correctAnswerIndex(correctAnswers: ICorrectAnswers): number {
    const correctAnswer = Object.entries(correctAnswers).findIndex(([_key, value]) => value === 'true')
    return correctAnswer
}