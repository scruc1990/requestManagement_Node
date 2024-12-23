# requestManagement_Node

Prueba técnica de backend en nodejs

Para la ejecución del proyecto es necesario configurar el .env primero
Luego de ello puede ejecutarlo con docker de la siguiente forma

Pasos:
1. Configurar .env
2. Ejecutar en la consola estando ubicados en la raiz del proyecto: *docker compose -f docker-compose.yml up -d --build*
3. Ingresar a la base de datos dockerizada y crear la schema que se va a usar
4. Ejecutar docker ps para obtener el id del contenedor
5. Ejecutar las migraciones: *docker exec -it **idcontenedor** npm run migrate*
6. Ejecutar seeders: *docker exec -it **idcontenedor** npm run seed*


# Comandos de Git utilizados

Estos fueron los primero comandos que se ejecutaron para poder subir el proyecto

  
 - git init git add .
 - git commit -m "Se Sube proyecto finalizado cuando volvió laluz"
 - git branch -M main git remote add origin https://github.com/scruc1990/requestManagement_Node.git
 - git push -u origin main
 - git add README.md git status git commit -m "Rama: main Autor: Cristian Herrera Descripción: Se realiza el montaje de la base del proyecto con empleados funcionando"
 - git push

En el trascurso del desarrollo de la prueba tecnica se reutilizaron varios de estos comandos

  
 - git add .                                      // Para añadir todos lo archivos modificados
 - git rm --cache *nombre archivo*                // Para quitar de staged changes un archivo en especifico
 - git status                                     // para validar que archivos estan en el staged changes y cuales no
 - git commit -m "*texto del commit*"             // para realizar el commit
 - git push                                       // para subir el commit al repositorio remoto
 - git fetch                                      // para que me actualice los cambios que tiene el repositorio remoto
 - git pull                                       // para poder bajar los cambio del repositorio remoto al local
 - git checkout -- .                              // para eliminar todos los cambios que tengo
