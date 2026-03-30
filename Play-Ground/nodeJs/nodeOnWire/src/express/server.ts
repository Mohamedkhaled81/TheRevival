import express, { NextFunction, Request, Response } from 'express';
import path from 'node:path';
import fs from 'node:fs/promises'

declare module 'express-serve-static-core' {
  interface Request {
    requestedAt?: Date; // our custom property
  }
}

const movieFile = path.join(__dirname, '..', '..', 'data', 'movies.json');

const readFileAsync = async function (pathFile: string): Promise<string> {
    return await fs.readFile(pathFile, 'utf-8');
}

const writeFileAsync = async function (pathFile: string, data: any): Promise<void>{
    await fs.writeFile(pathFile, data);
}

const getAllObjects = async function (pathFile: string): Promise<Array<Object>> {
    
    const jsonData = await readFileAsync(pathFile);
    return JSON.parse(jsonData.trim() === '' ? '[]' : jsonData);
}

const getObjectById = async function (pathFile: string, id: number): Promise<Object | undefined> {
    const allObjects = await getAllObjects(pathFile);
    return allObjects.find((obj: any) => obj.id === id);
}

const saveObject = async function (pathFile: string, data: any): Promise<Object> {
    const allObjects = await getAllObjects(pathFile);
    allObjects.push(data);
    await writeFileAsync(pathFile, JSON.stringify(allObjects, null, 2));
    return data;
}

const getIdLastObj = async function (pathFile: string) {
    const allObjects = await getAllObjects(pathFile);
    const lastObject = allObjects[allObjects.length - 1]; 
    return (lastObject as any).id;
}

const generateNewId = async function (pathFile: string) {
    return await getIdLastObj(pathFile) + 1;
}

const PORT = 7000;
let app = express();

app.listen(PORT, () => {
    console.log('SERVER IS STARTED!');
});

/* // Route is Method + Url + handler
app.get('/', (req, res) => {
    // By default the content-type is text/html
    // res.status(200).send('Hello From Express');

    // In order to send Json..
    res.status(200).json({message: 'Hello World'})
});

app.post('/', () => {

}) */

// Making custom MiddleWare
const logger = function(req: Request, res: Response, next: NextFunction) {
    console.log('Custom Called');
    next();
}

const requestedAt = function(req: Request , res: Response, next: NextFunction) {
    req.requestedAt = new Date();
    next();
}

// Request object doesnt have a body so in order to use it we need to use a middleware
app.use(express.json());
app.use(logger);
app.use(requestedAt);

// GET - api/movies
app.get('/api/v1/movies',async (req, res) => {
    try {
        console.log(req.requestedAt);
        const allMovies = await getAllObjects(movieFile);
        return res.status(200).json({ status: "success", count: allMovies.length, data: {movies: allMovies}});
    }catch(err) {
        return res.status(500).json({ status: "Server Error", message: (err as Error).message });
    }
});

// GET - api/movies/:id
app.get('/api/v1/movies/:id', async (req, res) => {
    try {
        const idParam = Number(req.params.id);
        if(Number.isNaN(idParam)) {
            throw new Error('InValid param Type')
        }
        const movie = await getObjectById(movieFile, idParam);
        if(!movie) {
            throw new Error('Resource doesnt exist')
        }
        return res.status(200).json({ status: "success", data: {movies: movie}});
    }catch(err) {
        if((err as Error).message === 'Resource doesnt exist') {
            return res.status(404).json({ status: "Not Found", message: (err as Error).message});
        }
        return res.status(500).json({ status: "Server Error", message: (err as Error).message });
    }
})

// POST - api/movies
app.post('/api/v1/movies', async (req, res) => {
    try{
        const deserializedObj = req.body;
        const newId = await generateNewId(movieFile);
        const newMovie = Object.assign({id: newId}, deserializedObj)
        await saveObject(movieFile, newMovie);
        return res.status(201).json({status: "created", data: {movie: deserializedObj}});
    }catch(err) {
        return res.status(500).json({ status: "Server Error", message: (err as Error).message });
    }
})