const CategoriesRespository = require('../repositories/CategoriesReposity');

class CategoryController {
  async index(request, response) {
    const categories = await CategoriesRespository.findAll();

    response.json(categories);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name required' });
    }

    const category = await CategoriesRespository.create({ name });

    response.stauts(201).json(category);
  }
}

module.exports = new CategoryController();
