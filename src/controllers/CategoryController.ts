import { Request, Response, NextFunction } from 'express'
import repository from '@repositories/CategoryRepository'

const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // const data = await repository.get()
    res.status(200).send({ message: 'ok' })
  } catch (e) {
    res.status(500).send({ message: 'Nenhum registro localizado', data: e })
  }
}

const post = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(repository)

    res.status(201).send({ message: 'Registro salvo com sucesso' })
  } catch (e) {
    res.status(400).send({ message: 'Falha ao salvar o registro', data: e })
  };
}

export default {
  get, post
}
