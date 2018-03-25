import { Container } from "inversify"
import getDecorator from "inversify-inject-decorators"

import { Client } from "./client"
import { DataService } from "../services/data_service"

const container = new Container()

// Http
const client = new Client()
container.bind<Client>(Client).toConstantValue(client)

// Services
container.bind<DataService>(DataService).toConstantValue(new DataService(client))

// Injection
//
// This injector should be used in React components
const inject = getDecorator(container).lazyInject

export { container, inject }
