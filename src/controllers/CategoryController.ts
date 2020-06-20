import { Request, Response, NextFunction } from 'express'
import { CategoryRepository as Repository } from '@repositories/CategoryRepository'

const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(new Repository())
    // const data = await repository.get()
    res.status(200).send({ message: 'ok' })
  } catch (e) {
    res.status(500).send({ message: 'Nenhum registro localizado', data: e })
  }
}

export default {
  get
}
