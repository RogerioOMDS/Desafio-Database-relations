import { inject, injectable } from 'tsyringe';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import Order from '../infra/typeorm/entities/Order';
import IOrdersRepository from '../repositories/IOrdersRepository';
import OrdersRepository from '../infra/typeorm/repositories/OrdersRepository';
import ProductsRepository from '@modules/products/infra/typeorm/repositories/ProductsRepository';
import CustomersRepository from '@modules/customers/infra/typeorm/repositories/CustomersRepository';

interface IRequest {
  id: string;
}

@injectable()
class FindOrderService {
  constructor(
    @inject(OrdersRepository)
    private ordersRepository: IOrdersRepository,

    // @inject(ProductsRepository)
    // private productsRepository: IProductsRepository,

    // @inject(CustomersRepository)
    // private customersRepository: ICustomersRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Order | undefined> {
    const order = await this.ordersRepository.findById(id)

    return order
  }
}

export default FindOrderService;
