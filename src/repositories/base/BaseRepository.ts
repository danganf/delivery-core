export abstract class BaseRepository {
  public Model: object;

  constructor (model: object) {
    this.Model = model
  }

  async create (item: object): Promise<boolean> {
    console.log(this.Model)
    const model = new this.Model(item)
    const res = await model.save()
    return true
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
