const app = require('../src/app');
const session = require('supertest');
const request = session(app);
const character = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: {
       name: 'Earth (C-137)',
       url: 'https://rickandmortyapi.com/api/location/1',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
}

describe('Test de RUTAS', () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            const response = await request.get('/rickandmorty/character/1')
            expect(response.statusCode).toBe(200)
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = await request.get('/rickandmorty/character/1')
            for(const prop in character) {
                expect(response.body).toHaveProperty(prop)
            }
        })
        it('Si hay un error responde con status: 500', async () => {
            const response = await request.get('/rickandmorty/character/0')
            expect(response.statusCode).toBe(500)
        })
    })
    describe('GET /rickandmorty/login', () => {
        it('Responde con un objeto con la propiedad access en TRUE sí la informacón del usuario es válida', async () => {
            const { body } = await request.get('/rickandmorty/login?email=insa@henry.com&password=123456')
            expect(body.userFound).toEqual(true)
        })
        it('Responde con un objeto con la propiedad access en FALSE sí la informacón del usuario no es válida', async () => {
            const { body } = await request.get('/rickandmorty/login?email=urralde@henry.com&password=asd123')
            expect(body.userFound).toEqual(false)
        })
    })
    describe('POST /rickandmorty/fav', () => {
        it('Debe guardar el personaje en Favoritos', async () => {
            const response = await request.post('/rickandmorty/fav').send(character)
            expect(response.body).toContainEqual(character)
        })
        it('Debe agregar personajes a Favoritos sin eliminar los existentes', async () => {
            character.id = 827
            const response = await request.post('/rickandmorty/fav').send(character)
            expect(response.body.length).toBe(2)
        })
    })
    describe('DELETE /rickandmorty/fav/:id', () => {
        it('Sí el ID solicitado no existe, debería retornar un arreglo con todos Favoritos', async () => {
            const response = await request.delete('/rickandmorty/fav/2gh56')
            expect(response.body.length).toBe(2)
        })
        it('Sí el ID enviado existe, debería eliminarlo de Favoritos', async () => {
            const response = await request.delete('/rickandmorty/fav/827')
            expect(response.body.length).toBe(1)
        })
    })
})
