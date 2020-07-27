# APP GUATEMALA.COM
 
Esta es el app en ionic para las promociones de Guatemala.com 

Para ejecutarla, escribir `ionic serve` en la terminal dentro del directorio del proyecto. 

#Como integrar los endpoints anteriores a esta aplicación

- Importar en nuestro `app.module.ts` la siguiente libreria `import { HttpClientModule } from '@angular/common/http';`
- Inyectamos a nuestro servicio dataService en el construcctor la libreria recien agregada: `private http: HttpClient`
- Y por último hacemos la llamada, nos quedaria un código similar a este:
`
getAllData(page: string, length: string): Observable<any> {
     return this.http.get('http://127.0.0.1:8000/api/promotion/list?page=${page}&length=${length}', headers: {'Authorization':'Bearer TOKEN'});
   }`

# Compilación: 

- Para la compilación es necesario ejecutar en la terminal el comando `ionic build`
- Para optimizarla y preparar para producción (minificando codigo por ejemplo) `ionic build --prod`
- Tener instalado capacitor
    - `npm install @capacitor/core @capacitor/cli --save`
- Ejecutar en la terminal `npx cap init`
    - Nos solicitara un nombre y un id para la aplicacion por ejemplo "com.guatemalacom.promociones" esto es el codigo unico en las tiendas.
    
##Android: 
- Para añadir android ejecutar en la terminal `npx cap add android`
- Para abrir en android studio `npx cap open android`

##IOS
- Para añadir ios ejectuar en la terminal `npx cap add ios`
- Para abrir en xcode `npx cap open ios`

##Cambios
- Cada vez que realicemos cambios en el proyecto (plugins, nombres, codigo nativo) ejectuar `npx cap sync`
- Si solo realizamos cambios en el proyecto web (javascript, css, html) ejectuar `npx cap copy`

#Generar APK para Producción
- Necesitamos crear o tener un keystore. 
- Dentro de Android Studio en la barra superior, seleccionamos build -> generate signed bundle / apk 
- Existen dos formas de generar una app firmada, en este caso seleccionamos APK
- Colocamos la dirección de nuestro keystore para producción.
- Llenamos el password, key alias, y key password. 
- Luego seleccionamos en build variants el flavor release. 
- Seleccionamos las dos opciones de abajo V1, V2
- Presionamos Finish. 

Al obtener el APK ya lo podemos subir a nuestra cuenta de google en el playstore. 








