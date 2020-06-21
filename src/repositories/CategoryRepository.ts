import { BaseRepository } from '@repositories/base/BaseRepository'
import Category from '@models/Category'

class CategoryRepository extends BaseRepository {
  constructor () {
    super(Category)
  }
}

export default new CategoryRepository()
