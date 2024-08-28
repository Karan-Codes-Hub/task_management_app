import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getPerformance, providePerformance } from '@angular/fire/performance';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(), provideFirebaseApp(() => initializeApp({"projectId":"demoo-48af6","appId":"1:474466041183:web:b8368962e9928b7c11caea","databaseURL":"https://demoo-48af6-default-rtdb.firebaseio.com","storageBucket":"demoo-48af6.appspot.com","apiKey":"AIzaSyBnAuB3D4Seuv_hxfEUb58QPWJDhn8Hg6E","authDomain":"demoo-48af6.firebaseapp.com","messagingSenderId":"474466041183","measurementId":"G-NPLB5SHLLV"})), providePerformance(() => getPerformance())],
};
