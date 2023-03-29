import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from "../swagger.json";
import { router } from './routes/index'
import { createCourse } from './routes';

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.get('/', createCourse);

app.post('/courses', (request, response) => {
    const { name } = request.body;
    return response.json({ name });
})

app.listen(3333);