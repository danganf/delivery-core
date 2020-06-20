import mongoose from '../../bin/db'
import { IWrite } from '@repositories/interfaces/IWrite'
import { IRead } from '@repositories/interfaces/IRead'

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  public readonly _db: mongoose;

  create (item: T): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

  update (id: string, item: T): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

  delete (id: string): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

  find (item: T): Promise<T[]> {
    throw new Error('Method not implemented.')
  }

  findOne (id: string): Promise<T> {
    throw new Error('Method not implemented.')
  }
}
