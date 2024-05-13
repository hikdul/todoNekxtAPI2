# Development
Pasos para levantar la app en desarrollo


1. Levantar la base de datos
```
docker compose up -d
```

2. Renombrar el .env.template a .env
3. Reemplazar las variables de entorno
4. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed)


# Prisma commnads
```
npx prisma init
npx prisma migrate dev
npx prisma generate

```



# Prod


# Stage


## sections

resumen de algunos secciones practicadas y especificadas en su rama

### server actions [serverActions]

pruebas de los server actions y el hook de optimistic updates

### Cookies - server y client side [cookies]

en esta rama se observa a profundidad los siguientes elementos:

* Cookies del lado del servidor
* Cookies del lado del cliente
* Carrito de compras
* Manipulación de cookies

### auth

Trabajaremos con authenticacion de usuarios, aunque no es como normalmente yo trabajaria con esto, si se puede decir que estamos en el momento de entender un poco como hacerlo y lo mas importante los saltos entre paginas. Temas que se veran aca son:


1. Auth.js
2. Proveedores
3. Google
4. Github
5. Credenciales personalizadas
6. Encriptación de contraseña
7. Relaciones de base de datos
8. Sesión de usuario
9. Server y Client side validation
10. Campos adicionales de usuario
11. Modificación global de usuario de Auth.js

