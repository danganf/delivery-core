export abstract class BaseRepository {
  public model: object;

  constructor (model: object) {
    this.model = model
  }

  create (item: object): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

  update (id: string, item: object): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

  delete (id: string): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

  find (item: []): Promise<[]> {
    throw new Error('Method not implemented.')
  }

  findOne (id: string): Promise<object> {
    throw new Error('Method not implemented.')
  }
}
